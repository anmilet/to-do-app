import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  newTaskCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,
    ]
    }
  )

  tasks=signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear Componente',
      completed: false
    }
  ]);
  
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

  changeHandlerCtrl(){
    this.newTaskCtrl.setValue(this.newTaskCtrl.value.trim());
    if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('');
    }
    this.newTaskCtrl    
  }

  addTask(title: string)
  {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.update((tasks)=> [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update(
      (tasks) => tasks.filter(
        (task, position) => position !== index
        ));
  }

  updateTask(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) =>{
        if (position === index){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

}
