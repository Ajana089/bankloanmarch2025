import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IAPIResponse, IApplicationList } from '../../models/loan';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-loan-applicatonlist',
  imports: [JsonPipe],
  templateUrl: './loan-applicatonlist.component.html',
  styleUrl: './loan-applicatonlist.component.css'
})
export class LoanApplicatonlistComponent {

masterser=inject(MasterService)
applicationList:IApplicationList []= [];

  constructor(){

    if(this.masterser.loggedUserData.role == "customer"){

      console.log("hai")

      this.getcustomerApplication();
    }

    else{

      this.getApplicationAssigned();


    }
  }

  getcustomerApplication(){
      
    this.masterser.getMyApplication(this.masterser.loggedUserData.userId).subscribe((res:IAPIResponse)=>{

      this.applicationList=res.data;

    })

  }







getApplicationAssigned() {
  this.masterser.getApplicationAssigned(this.masterser.loggedUserData.userId).subscribe((res:IAPIResponse)=>{

    this.applicationList=res.data;

  })

}

   

}

