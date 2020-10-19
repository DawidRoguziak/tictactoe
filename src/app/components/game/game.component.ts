
import { ModalComponent } from '../modal/modal.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
 
})

export class GameComponent implements OnInit  {
  @Output('resetGame') eventEmitter = new EventEmitter<string>();

  @Input() player1 = null;
  @Input() player2 = null;
  @Input() currentPlayer = null;

  @ViewChild(ModalComponent) modalComponent:ModalComponent;

  tie = 0;
  games = 1;
  board = Array(3).fill('').map(() => Array(3).fill(''));
  constructor () {
}
  ngOnInit(): void {
    this.moveIfComputer();
  }

  arrayTwo(n: number): number[] {
    return [...Array(n).keys()];
  }

  resetGame() {
    this.eventEmitter.emit()
    this.modalComponent.closeModal();
  }

  nextGame(){
     this.board = Array(3).fill('').map(() => Array(3).fill(''));
     this.currentPlayer = this.player1;
     this.modalComponent.closeModal();
     this.moveIfComputer();
     this.games +=1;
  }

  handleFieldClick(e,row, col) {

    if (this.board[row][col].length !== 0) {
        return;
    }

    this.board[row][col] = this.currentPlayer.symbol;
    
    if(this.checkIfSomeoneWin(row,col)) {
      this.showWinner();
      return;
    }

    this.boardIsFull();

    this.currentPlayer = this.currentPlayer.symbol === this.player1.symbol  ? this.player2 : this.player1;

    this.moveIfComputer();
  }

  moveIfComputer() {
    if (this.currentPlayer.isComputer) {
       this.computerClick();
    }
  }

  computerClick() {
    this.boardIsFull();

    let row = null;
    let col = null;
    let findCords = true;

    do {
      row = Math.floor(Math.random() * 3)
      col = Math.floor(Math.random() * 3)
      if (this.board[row][col].length === 0) {
         findCords = false;
      }

    } while(findCords);

    setTimeout(() => {
      this.handleFieldClick({}, row, col)
    },100);
  
  }

  showWinner() {
     this.currentPlayer.winCounter  += 1;
     this.modalComponent.openModal();   
  }

  checkIfSomeoneWin(row, col) {
      const windIndex = 2;
      const boardSize = 3;

    // check row
    for(let i = 0;i < boardSize;++i) {
      if (this.board[row][i] !== this.currentPlayer.symbol) {
        break;
      } 

      if (i === windIndex) {
        return true;
      }
    }

    // check column
    for(let i = 0;i < boardSize;++i) {
        if (this.board[i][col] !== this.currentPlayer.symbol) {
           break;
        } 

        if (i === windIndex) {
          return true;
        }
    }

    // check first diagonal
    if (row === col) { // diagonal box
      for(let i = 0;i < boardSize;++i) {
        if (this.board[i][i] !== this.currentPlayer.symbol) {
          break;
        } 

        if (i === windIndex) {
          return true;
        }
      }
    }

    // check second diagonal
    if (row  + col === boardSize - 1 ) { // second diagonal box
      for(let i = 0;i < boardSize;++i) {
        if (this.board[i][(boardSize - 1) - i] !== this.currentPlayer.symbol) {
          break;
        } 

        if (i === windIndex) {
          return true;
        }
      }
    }

    return false;
  }

  boardIsFull() {
    
    let boardIsFull = true;
    for(let i = 0;i < 3;++i) {
      for(let j = 0;j < 3;++j) {
        if(this.board[i][j].length === 0 ){
            boardIsFull = false;
            break;
        }
    }
  }
    if (boardIsFull) {
        this.tie += 1;
        this.nextGame();
    }
  
  }
}
