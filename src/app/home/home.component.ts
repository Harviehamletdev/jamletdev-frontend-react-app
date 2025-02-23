import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // 💡 Es un componente standalone
  template: `<h1>Bienvenido a la Página Principal</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HomeComponent {}
