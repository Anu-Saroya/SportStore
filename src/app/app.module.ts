import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { FormsModule } from '@angular/forms';

import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './store/aboutUs.component';
import { ContactFormComponent } from './store/contactUs.component';
import { PageNotFoundComponent } from './store/pageNotFound.component'; //Import pageNotFoundComponent

@NgModule({
  declarations: [AppComponent,ContactFormComponent, PageNotFoundComponent], // add pageNotFoundComponent to declarations
  imports: [BrowserModule, StoreModule, FormsModule,
    RouterModule.forRoot([
        {
            path: "store", component: StoreComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "cart", component: CartDetailComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "checkout", component: CheckoutComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "admin",
            loadChildren: () => import("./admin/admin.module")
                .then(m => m.AdminModule),
            canActivate: [StoreFirstGuard]
        },
        {
            path: "home", component: StoreComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "main", component: StoreComponent,
            canActivate: [StoreFirstGuard]
        },
        { path: "about-us", component: AboutUsComponent }, // `About Us` component route
        { path: 'contact-us', component: ContactFormComponent }, // Contact Us component route
     //   { path: "**", redirectTo: "/store" },  // Make the page redirects automatically to the `about-us` or contact-us content when loaded.
        { path: "**", component: PageNotFoundComponent }, // Use PageNotFoundComponent for the wildcard route
    ]),
    BrowserAnimationsModule],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
