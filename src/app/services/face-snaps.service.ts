import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";


@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title:'Kylo Ren',
          description: 'Sith',
          imageUrl: 'https://images.unsplash.com/photo-1623476408624-721c9185d569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
          createdDate: new Date(),
          snaps: 500,
          location: 'planète inconnue'
        },
        {
          title: 'A planet',
          description: 'Star wars univer',
          imageUrl: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
          createdDate: new Date(),
          snaps: 0,
          location: 'espace'
        },
        {
          title: 'BB-8',
          description: 'Droïd',
          imageUrl: 'https://images.unsplash.com/photo-1592513735373-ae19bac7fde8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
          createdDate: new Date(),
          snaps: 0
        },
      ];
}