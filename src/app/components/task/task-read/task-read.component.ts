import { Component } from '@angular/core';
import { Task } from '../../../model/Task';
import { Category } from '../../../model/Category';
import { TaskService } from '../../../servico/task/task.service';
import { CategoryService } from '../../../servico/category/category.service';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrl: './task-read.component.css'
})
export class TaskReadComponent {
  
  task = new Task();
  category = new Category();

  //json de task
  tasks: Task[] = []
  categories: Category[] = [];

  //construtor
  constructor(private service:TaskService,
    private categoryservice: CategoryService){}

  //metodo de listagem
  getAllTasks(): void{
    this.service.getAllTasks()
    .subscribe(retorno => this.tasks = retorno);
  } 

  getAllCategories(): void{
    this.categoryservice.getAllCategories()
    .subscribe(retorno => this.categories = retorno);
  }

    //metodo de cadastro
    createTask(): void{
      this.service.createTask(this.task)
      .subscribe(retorno => { 
        this.tasks.push(retorno);
        this.task = new Task();
        alert('Task cadastrada com sucesso!')
      });
    }
    

  //metodo de inicialização
  ngOnInit(){    
    console.log(this.task);
    
    this.getAllTasks();
    this.getAllCategories();
  }

}
