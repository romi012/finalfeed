import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
posts: FirebaseListObservable<any>

  constructor(public navCtrl: NavController,public af: AngularFireDatabase) {
  this.posts = af.list('/posts').valueChanges();;
}

 deletePost(posts: any):void {
 this.af.object('/posts/' + posts.$key).remove();

}
}
