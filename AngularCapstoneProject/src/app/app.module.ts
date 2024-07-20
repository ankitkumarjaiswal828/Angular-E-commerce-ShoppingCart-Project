import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailsPipe } from './Pipes/product-details.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthServiceService } from './guardService/auth-service.service';
import { authGuardGuard } from './guard/auth-guard.guard';
import { CartProductsComponent } from './cart-products/cart-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    AboutUsComponent,
    LoginComponent,
    RegistrationComponent,
    ProductDetailsPipe,
    PageNotFoundComponent,
    CartProductsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent, AuthServiceService]
})
export class AppModule { }
