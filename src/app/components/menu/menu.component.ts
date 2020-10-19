import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output('closeMenu') closeMenu = new EventEmitter<string>();
  @Output('setPLayer') setPLayer = new EventEmitter<object>();
  
  leftSide:any = null;
  rightSide:any = null;

  player1Name:String = 'Player 1';
  player2Name:String = 'Player 2';

  constructor() { }

  startGame() {
      if (this.leftSide !== null && this.rightSide !== null) {
        this.closeMenu.emit();  
      }
  }

  handlePlayerChoose(e:any, side: String, type: String) {
    if (side === 'x') {
        this.leftSide = type;
    } else {
      this.rightSide = type;
    }

    this.setPLayer.emit({
        side,
        type,
       name: side === 'x' ? this.player1Name : this.player2Name
      });
  }

}
