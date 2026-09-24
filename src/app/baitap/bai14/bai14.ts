import { Component } from '@angular/core';
import { CatalogService } from './catalog';

@Component({
  selector: 'app-bai14',
  standalone: false,
  templateUrl: './bai14.html',
  styleUrl: './bai14.css'
})
export class Bai14 {

  public categories: any;

  constructor(cservice: CatalogService) {
    this.categories = cservice.getCategories();
  }

}