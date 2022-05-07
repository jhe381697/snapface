import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Spiderman';
    this.description = 'A Marvel super hero';
    this.createdDate = new Date();
    this.snaps = 7;
    this.imageUrl = 'https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
    this.buttonText = 'Oh snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh snap!') {
      this.snaps++;
      this.buttonText = 'Oops, un snap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh snap!';
    }
  }
}
