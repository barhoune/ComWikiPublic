import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dockheader',
  templateUrl: './dockheader.component.html',
  styleUrls: ['./dockheader.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DockheaderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {
  }
  items: MenuItem[] | undefined;
  ngOnInit() {
      this.items = [
          {

              icon: 'assets/Char.png',
              routerLink: 'characters'
          },
          {
              label: 'Series',
              icon: 'assets/se.png',
              routerLink: 'series'
          },
          {
              label: 'Movies',
              icon: 'assets/mov.png',
              routerLink: 'movies'
          },
          {
              label: 'Issues',
              icon: 'assets/ISS.png',
              routerLink:'issues'
          },
          {
              label: 'Volumes',
              icon: 'assets/vol.png',
              routerLink:'volumes'
          },
          // {
          //   label: 'Volumes',
          //   icon: 'assets/vol.png',
          //   routerLink:'volumes'
          // }
      ];
  }

}
