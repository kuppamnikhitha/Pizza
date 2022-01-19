import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { SignUpService } from '../Shared/sign-in.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  
  constructor(public service: SignUpService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();

    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/sign-up/user-menu');
  }

  onSubmit() {
    this.service.login().subscribe(
      
       (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/Home');
      },
      err => {
       
          console.log(err);
      }
    );
    console.log("created");
  }
}