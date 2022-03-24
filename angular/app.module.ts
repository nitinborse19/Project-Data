import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationbidComponent } from './registrationbid/registrationbid.component';
import { FarmwelcComponent } from './farmwelc/farmwelc.component';
import { ClaimComponent } from './claim/claim.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplInsuranceComponent } from './appl-insurance/appl-insurance.component';
import { LogoutComponent } from './logout/logout.component';
import { PlacesellComponent } from './placesell/placesell.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderwelcome.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { InsurancepageComponent } from './insurancepage/insurancepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { AdmininsuranceComponent } from './admininsurance/admininsurance.component';
import { AdminclaimComponent } from './adminclaim/adminclaim.component';
import { AdminmarketplaceComponent } from './adminmarketplace/adminmarketplace.component';
import { BidcropComponent } from './bidcrop/bidcrop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    RegistrationComponent,
    RegistrationbidComponent,
    FarmwelcComponent,
    ClaimComponent,
    ApplInsuranceComponent,
    LogoutComponent,
    PlacesellComponent,
    BidderwelcomeComponent,
    ForgetpassComponent,
    ViewhistoryComponent,
    MarketplaceComponent,
    InsurancepageComponent,
    AdminpageComponent,
    AdminloginComponent,
    BidderloginComponent,
    AdmininsuranceComponent,
    AdminclaimComponent,
    AdminmarketplaceComponent,
    BidcropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
