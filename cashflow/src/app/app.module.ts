import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReplenishComponent } from './replenish/replenish.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { MainComponent } from './main/main.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'user/signup', component: SignupComponent },
  { path: 'user/login', component: LoginComponent},
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/replenish', component: ReplenishComponent},
  { path: 'user/withdraw', component: WithdrawComponent},
  { path: 'main', component: MainComponent},
  { path: 'user/transfer', component: TransferComponent},
  { path: 'user/transactions', component: TransactionsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    ReplenishComponent,
    WithdrawComponent,
    MainComponent,
    TransferComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
