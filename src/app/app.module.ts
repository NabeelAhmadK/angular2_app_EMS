import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddemployeeComponent } from './manage-employee/addemployee/addemployee.component';
import { DeleteemployeeComponent } from './manage-employee/deleteemployee/deleteemployee.component';
import { EditemployeeComponent } from './manage-employee/editemployee/editemployee.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfilepicComponent } from './manage-employee/profilepic/profilepic.component';
import { ValidationComponent } from './validation/validation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppHeaderComponent } from './widgets/app-header/app-header.component';
import { AppFooterComponent } from './widgets/app-footer/app-footer.component';
import { PagingComponent } from './widgets/paging/paging.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddemployeeComponent,
    DeleteemployeeComponent,
    EditemployeeComponent,
    ShowemployeeComponent,
    ManageEmployeeComponent,
    ProfilepicComponent,
    ValidationComponent,
    LoginComponent,
    SignupComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PagingComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      { path: 'home', component: HomeComponent },
      { path: 'manage', component: ManageEmployeeComponent},
      { path: 'manage/add', component: AddemployeeComponent },
      { path: 'manage/delete', component: DeleteemployeeComponent },
      { path: 'manage/edit', component: EditemployeeComponent },
      { path: 'show', component: ShowemployeeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
