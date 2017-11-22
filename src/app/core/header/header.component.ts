import {Component} from '@angular/core';
import {ServerService} from '../../shared/server.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private serverService: ServerService,
              private authService: AuthService) {
  }

  onSave() {
    this.serverService.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet() {
    this.serverService.fetchRecipes();
  }
  onLogOut() {
    this.authService.signOut();
  }
}
