import {Directive, HostBinding, HostListener} from '@angular/core';


@Directive ({
  selector: '[appDropdownClick]'
})
export class DropdownClickDirective {
  @HostBinding ('class.open') isOpen = false;

  @HostListener ('click') openMenu() {
    this.isOpen = !this.isOpen;
  }
}
