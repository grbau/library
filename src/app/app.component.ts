import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';

  constructor() {
    const config = {
      apiKey: 'AIzaSyAf3SB8ICDQ8LmTtF-Vb6WuOUTz5Z5Z--U',
      authDomain: 'library-7aa14.firebaseapp.com',
      databaseURL: 'https://library-7aa14.firebaseio.com/',
      projectId: 'https://library-7aa14.firebaseio.com',
      storageBucket: 'library-7aa14.appspot.com',
      messagingSenderId: '745641515493',
      appId: '1:745641515493:web:8bd36d184d67c79aa9f70c',
      measurementId: 'G-P2LNY7B75W',
    };
    firebase.initializeApp(config);
  }
}
