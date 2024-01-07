import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PipesComponent } from './pipes/pipes.component';
import { HooksComponent } from './lifeCycleHooks/hooks/hooks.component';
import { ContainerComponent } from './lifeCycleHooks/container/container.component';
import { ObservableComponent } from './Observable/observable/observable.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PaymentComponent } from './payment/payment.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home' , component:ProductComponent},
  {path:'contact' , component:ContactComponent},
  {path: 'login',component:LoginComponent},
  {path: 'pipes', component:PipesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'hooks',component:ContainerComponent},
  {path: 'observables',component:ObservableComponent},
  {path: 'data',component:FetchDataComponent},
  {path: 'payment',component:PaymentComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



