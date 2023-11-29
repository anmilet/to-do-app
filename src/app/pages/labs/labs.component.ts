import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome='Hola a Todos'
  tasks=[
    'Instalar el Angular CLI',
    'Crear Proyecto',
    'Crear Componentes'
  ];
  name=signal('Miletza');
  age= '40';
  private id='1451537636'; /* esta es una variable privada y no se puede acceder desde el html, solo de este componente */
  disabled=true;
  imag='https://picsum.photos/200';

  person = {
    name:'Luis',
    photo:'https://w3schools.com/howto/img_avatar.png',
    age:20
  }

 clickHandler() {
    alert('Hola a todos!')
  }

  changeHandler(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.name.set(newValue)
 
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)    
  }
  
}
