import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicvineapiService } from '../../services/comicvineapi.service';

interface TocItem {
  text: string;
}

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  tocItems: TocItem[] = [];
  showTOC = true;

  constructor(private service: ComicvineapiService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getCharacter(getParamId);
  }

  getCharacter(id: any) {
    this.service.getCharacterDetails(id).subscribe(async (result) => {
      console.log(result, 'charsdetails#');
      this.character = await result;
      this.generateTableOfContents();
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  generateTableOfContents() {
    const content = this.character.results.description;
    const headings = content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/g);

    if (headings) {
      this.tocItems = headings.map((heading: string) => {
        const text = heading.replace(/<\/?[^>]+(>|$)/g, '');
        return { text };
      });
    }
  }

  scrollToHeading(text: string) {
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3, h4'));

    headingElements.forEach((element: Element) => {
      const elementText = element.textContent?.trim();

      if (elementText === text) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    });
  }

  toggleTOC() {
    this.showTOC = !this.showTOC;
  }
}
