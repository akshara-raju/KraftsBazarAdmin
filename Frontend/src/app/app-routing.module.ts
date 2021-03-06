import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ValidateproductsComponent } from './validateproducts/validateproducts.component';
import { FormsModule } from '@angular/forms';
import { VerifyproductComponent } from './verifyproduct/verifyproduct.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'validate',
canActivate:[AuthGuard],
component:ValidateproductsComponent},
{path:'checkreview',component:CheckreviewsComponent},
{path:'user',component:UserComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'validate/:id', component:VerifyproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
