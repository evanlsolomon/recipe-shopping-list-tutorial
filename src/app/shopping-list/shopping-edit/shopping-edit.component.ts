import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', {static:true}) igNameInp:ElementRef; 
  @ViewChild('amount', {static:true}) igAmtInp:ElementRef; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    let newNm = this.igNameInp.nativeElement.value;
    let newAmt = this.igAmtInp.nativeElement.value;
    const newIngredient = new Ingredient(newNm, newAmt)
    this.shoppingListService.addIngredient(newIngredient);
  }

}
