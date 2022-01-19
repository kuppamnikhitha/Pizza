import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../classes/Pizza';
import { PizzalistService } from '../Shared/pizzalist.service';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {

  constructor(private router: Router, private service:PizzalistService) { }
  lstPizza!: Pizza[];
  ngOnInit() {
    this.service.getPizzas()
    .subscribe
    (
      data=>
      {
          this.lstPizza = data;
      }
    )
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
}
}
