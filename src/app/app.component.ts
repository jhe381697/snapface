import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Kylo Ren',
      'Sith',
      'https://images.unsplash.com/photo-1623476408624-721c9185d569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'A planet',
      'Star wars univer',
      'https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      new Date(),
      0
    );
    
    this.myLastSnap = new FaceSnap(
      'BB-8',
      'Droïd',
      'https://images.unsplash.com/photo-1592513735373-ae19bac7fde8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      new Date(),
      0
    );
  }
}
