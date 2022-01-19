import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckOutService } from '../Shared/check-out.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private router: Router, public service: CheckOutService, private toastrservice:ToastrService) { }

  ngOnInit(): void {
  }
  onSumbit()
  {
    this.service.register().subscribe(
      (res:any)=>
      {
        if(res.succeeded)
        {
          this.service.formModel.reset();
          this.toastrservice.success('Transaction Sucessfull','  Pizza ordered  Sucessful.');
        }
        else {
         
        }
      },
      
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
}
}
