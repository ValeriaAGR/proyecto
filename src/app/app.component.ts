import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) { }

  towishlist(){
    this.router.navigate(['/wishlist']);
  }

  nuevolibro(){
    this.router.navigate(['/newbook']);
  }

  librosl(){
    this.router.navigate(['/booksr']);
  }

  cuen(){
    this.router.navigate(['/cuenta']);
  }
}
