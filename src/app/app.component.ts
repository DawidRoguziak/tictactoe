
import { Component } from '@angular/core';
import { Player } from './models/Player'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  player1 = null;
  player2 = null;
  currentPlayer = null

  constructor () {
      
  }

  resetGame() {
    this.player1 = this.player2 = this.currentPlayer = null;
   
  }

  setPLayer(e) {
    if (e.side === 'x') {
        this.player1 = new Player(e.name,'x', e.type === 'computer')
    } else {
      this.player2 = new Player(e.name,'o', e.type === 'computer')
    }
  }

  startGame() {
    this.currentPlayer =  this.player1;
  }
}
