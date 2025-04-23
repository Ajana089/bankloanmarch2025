import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeregistrationComponent } from './pages/employeeregistration/employeeregistration.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { BankerListComponent } from './pages/banker-list/banker-list.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { LoanApplicatonlistComponent } from './pages/loan-applicatonlist/loan-applicatonlist.component';
import { NewLoanComponent } from './pages/new-loan/new-loan.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginpageComponent },
    { path: 'bankerslist', component: BankerListComponent },
    { path: 'customer', component: CustomerListComponent },
    { path: 'loanapplication', component: LoanApplicatonlistComponent },
    { path: 'newloan', component: NewLoanComponent },
    { path: '**', redirectTo: 'login' },
  ];
  