import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownDirective} from './dropdown.directive';
import {DropdownClickDirective} from './dropdownclick.directive';


@NgModule({
  declarations: [
    DropdownDirective,
    DropdownClickDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    DropdownClickDirective
  ]
})
export class SharedModule {
}
