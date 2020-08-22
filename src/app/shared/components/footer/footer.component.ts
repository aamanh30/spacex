import { Component, OnInit } from '@angular/core';
import { FooterConfig } from '../../config/footer.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  developerName: string;
  developerLink: string;
  constructor() { }

  ngOnInit(): void {
    this.developerName = FooterConfig.developerName;
    this.developerLink = FooterConfig.developerLink;
  }

}
