import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [HeaderComponent, TitleComponent],
  imports: [
    CommonModule, IonicModule.forRoot()
  ],
  exports: [HeaderComponent, TitleComponent]
})
export class SharedModule { }
