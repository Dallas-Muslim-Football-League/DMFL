import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'Dallas Muslim Football League';
  user = 'user'
  imageDir = environment.assetBasePath;
}
