import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { productsTypes } from '../../../models/productsTypes';

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrl: './productss.component.css'
})
export class ProductssComponent {
  @Input()                                                                                                                                                                                                                                                                                                                    
    prod : productsTypes
}
