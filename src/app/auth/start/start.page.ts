import { Component, OnInit } from '@angular/core';
import { IonContent, IonImg } from '@ionic/angular/standalone';
import { PreferencesService } from 'src/app/services/preferences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonImg,
  ]
})
export class StartPage implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.preferences.checkName('access_token').then((resp) => {
      let access_token = resp.value;
      if (access_token) {
        this.router.navigateByUrl('tabs/tab1');
      } else {
        this.router.navigateByUrl('login');
      }
    });
  }

}
