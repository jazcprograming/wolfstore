import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() salida = new EventEmitter();
  constructor(
    private router: Router,
    private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  logearConGoogle() {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then( value => {this.salida.emit(value.user.displayName);console.log(value.user.displayName)})
  }

  logearConGithub() {
    this.auth.signInWithPopup( new firebase.auth.GithubAuthProvider())
    .then( value => {this.salida.emit(value.user.displayName);console.log(value.user.displayName)})
  }
}
