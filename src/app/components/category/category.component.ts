import { Component } from '@angular/core';
import { Category } from '../../model/Category';
import { CategoryService } from '../../servico/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category = new Category();

  categories: Category[] = [];

  constructor(private service: CategoryService){}

  getAllCategories(): void{
    this.service.getAllCategories()
    .subscribe(retorno => this.categories = retorno);
  }

  ngOnInit(){    
    this.getAllCategories();
  }

}
