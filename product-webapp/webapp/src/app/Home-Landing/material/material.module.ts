import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
    exports: [
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatToolbarModule
      
    ]
  })
  export class MaterialModule { }