import { Component,inject } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { IAPIResponse } from '../../models/loan';

@Component({
  selector: 'app-new-loan',
  imports: [ReactiveFormsModule],
  templateUrl: './new-loan.component.html',
  styleUrl: './new-loan.component.css'
})
export class NewLoanComponent {

  loanappForm:FormGroup=new FormGroup({});

  formBuilder=inject(FormBuilder);
  masterserv=inject(MasterService)

  constructor(){
    this.initializeForm();
   
    if(this.masterserv.loggedUserData != null){
    
      this.loanappForm.controls['customerId'].setValue(this.masterserv.loggedUserData.userId);
    }

  }

  initializeForm(){
    this.loanappForm=this.formBuilder.group({
      applicantID:[0],
      fullName:[''],
      applicationStatus: [''],
      panCard:[''] ,
     dateOfBirth: [''],
     email: [' '],
    phone: [''],
    address: [''],
    city: [''],
    state: [''],
    zipCode: [''],
     annualIncome: [0],
    employmentStatus: [''],
     creditScore: [0],
   assets: [''],
    dateApplied: [new Date()],
    loans:this.formBuilder.array([this.createLoanGroup()]),
    customerId:[0]
    })
  }

  createLoanGroup():FormGroup{

    return this.formBuilder.group({
      loanID: [0],
      applicantID: [0],
      bankName:[''],
      loanAmount: [0],
      emi: [0]
    

    })

    
  }
  get loanList():FormArray{

    return this.loanappForm.get('loans') as FormArray;

  }
  addNewLoan(){
    this.loanList.push(this.createLoanGroup());
  }
  removeLoan(index:number){

    this.loanList.removeAt(index);

  }

  onSave(){

    const formValue=this.loanappForm.value;

    console.log(formValue)

    this.masterserv.onSaveLoan(formValue).subscribe((res:IAPIResponse)=>{

      if(res.result){
        alert("loan app created")
      }
      else{
        alert(
          res.message
        );
      }
      
    })

    
  }



}
