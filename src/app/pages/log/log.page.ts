import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logMeIn(){
    //code for loggin in user goes here
    this.router.navigate(['/register']);
    console.log("Hola")
  }
  logSession(){
    this.router.navigate(['/inicio'])
  }
  
}