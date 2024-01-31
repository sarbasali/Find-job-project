import { NgModule } from "@angular/core";
// import { FeedComponent } from "./feed/feed.component";
import { LoginComponent } from "./authModule/components/login/login.component";
import { SignUpComponent } from "./authModule/components/sign-up/sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";

@NgModule ({
    declarations:[
        // FeedComponent,
        LoginComponent,
        SignUpComponent,
    ],
    imports :[
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
})
export class AuthModule{

}