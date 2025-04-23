import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAPIResponse, ILoan, IUser } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  loggedUserData!:IUser;

  constructor(private http:HttpClient) {

    const loggedData=sessionStorage.getItem("bankuser")
    if(loggedData != null){
      this.loggedUserData=JSON.parse(loggedData);
      
    }
   }
  onSaveLoan(obj:ILoan){

    
    return this.http.post<IAPIResponse>("https://projectapi.gerasim.in/api/BankLoan/AddNewApplication",obj)
  }

  getMyApplication(id:number){
    
  return this.http.get<IAPIResponse>("https://projectapi.gerasim.in/api/BankLoan/GetMyApplications?customerId="+id)
  }

  getApplicationAssigned(id:number){

    return this.http.get<IAPIResponse>("https://projectapi.gerasim.in/api/BankLoan/GetApplicationAssigneedToMe?bankEmployeeId="+id)
    }
}

