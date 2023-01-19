import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs'
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatListModule} from '@angular/material/list';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { GetComponent } from './get/get.component';
import { DeleteComponent } from './delete/delete.component'
import { MainServiceService } from './main-service.service';
import {HttpClientModule} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    UpdateComponent,
    GetComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
