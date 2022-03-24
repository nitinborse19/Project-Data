import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationbidComponent } from './registrationbid/registrationbid.component';
import { HomeComponent } from './home/home.component';
import { FarmwelcComponent } from './farmwelc/farmwelc.component';
import { ClaimComponent } from './claim/claim.component';
import { ApplInsuranceComponent } from './appl-insurance/appl-insurance.component';
import { PlacesellComponent } from './placesell/placesell.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderwelcome.component';
import { InsurancepageComponent } from './insurancepage/insurancepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { AdminclaimComponent } from './adminclaim/adminclaim.component';
import { AdmininsuranceComponent } from './admininsurance/admininsurance.component';
import { AdminmarketplaceComponent } from './adminmarketplace/adminmarketplace.component';
import { BidcropComponent } from './bidcrop/bidcrop.component';



const routes: Routes = [
  
    {path:'login', component : LoginComponent },
    {path:'about', component : AboutComponent },
    {path:'contact', component : ContactComponent },
    {path:'registration', component : RegistrationComponent },
    {path:'registrationbid', component :RegistrationbidComponent },
    {path:'', component :HomeComponent },
    {path:'insurancepage', component :InsurancepageComponent },
    {path:'claim', component :ClaimComponent },
    {path:'farmerwelcome', component : FarmwelcComponent },
    {path:'applyinsu', component : ApplInsuranceComponent },
    { path:'placesell', component : PlacesellComponent },
    {path:'forget', component : ForgetpassComponent },
    {path:'viewhistory', component : ViewhistoryComponent },
    {path:'marketplace', component : MarketplaceComponent },
    {path:'bidderwelcome',component :BidderwelcomeComponent},
    {path:'insupage',component :InsurancepageComponent},
    {path:'adminpage',component :AdminpageComponent},
    {path:'adminlogin',component :AdminloginComponent},
    {path:'bidderlogin',component :BidderloginComponent},
    {path:'admininsurance',component :AdmininsuranceComponent},
    {path:'adminclaim',component :AdminclaimComponent},
    {path:'adminmarketplace',component :AdminmarketplaceComponent},
    {path:'bidcrop/:requestid',component :BidcropComponent}


    

   
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
