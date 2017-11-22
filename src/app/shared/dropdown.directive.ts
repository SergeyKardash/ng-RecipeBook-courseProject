import {Directive, HostBinding, HostListener} from '@angular/core';


@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding ('class.open') isOpen = false;

  @HostListener ('mouseover') openMenu() {
    this.isOpen = !this.isOpen;
  }
  @HostListener ('mouseout') closeMenu() {
    this.isOpen = !this.isOpen;
  }
}
