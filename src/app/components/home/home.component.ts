import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  originalText = "Immerse yourself in a dynamic comic universe featuring captivating visuals and compelling narratives. Unleash your inner hero, solving mysteries and exploring extraordinary realms through curated collections of top-notch graphic storytelling.";

  constructor() { }

  ngOnInit(): void {
    this.typeText(this.originalText, 0);
  }

  typeText(text: string, index: number) {
    const paragraphElement = document.getElementById('typing-text');
    if (paragraphElement) {
      paragraphElement.innerHTML = text.substring(0, index);
      if (index < text.length) {
        setTimeout(() => {
          this.typeText(text, index + 1);
        }, 22);
      } else {

      }
    }
  }
}
