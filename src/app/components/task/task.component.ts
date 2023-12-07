import { Component } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskService } from '../../servico/task/task.service';
import { Category } from '../../model/Category';
import { CategoryService } from '../../servico/category/category.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = new Task();
  category = new Category();

  //json de task
  tasks: Task[] = []
  categories: Category[] = [];

  //construtor
  constructor(private service:TaskService,
    private categoryservice: CategoryService){}

  //metodo de seleção
  getAllTasks(): void{
    this.service.getAllTasks()
    .subscribe(retorno => this.tasks = retorno);
  }
  getAllCategories(): void{
    this.categoryservice.getAllCategories()
    .subscribe(retorno => this.categories = retorno);
  }

  //metodo de inicialização
  ngOnInit(){    
    console.log(this.categories);
    
    this.getAllTasks();
    this.getAllCategories();
  }
}
