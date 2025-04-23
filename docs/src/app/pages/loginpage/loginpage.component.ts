import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {


  showregForm=signal<boolean>(false);

  customerObj:any=
  {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  }


  loginForm:FormGroup=new FormGroup({
    userName:new FormControl(""),
    password:new FormControl("")

  })

 
  changeview(){

    this.showregForm.set(!this.showregForm());

  }

  http=inject(HttpClient);
  router=inject(Router);



  onLogin(){
    
    console.log(this.loginForm.value)
    const formValue=this.loginForm.value;
   debugger;
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/login",formValue)
    .subscribe((res:any)=>{

      console.log(res)
      debugger;
      if(res.result){
       sessionStorage.setItem("bankuser",JSON.stringify(res.data))
       this.router.navigateByUrl("loanapplication");

      }
      else{
        alert(res.message)
      }
    },errors=>{
      alert("n/w error")

    })
  }

  onRegister(){
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",this.customerObj).subscribe((res:any)=>{
      //debugger;
      if(res.result){
        alert("sucees")
      }
      else{
        alert(res.message)
      }
    },errors=>{
      alert("n/w error")

    })
  }

}
