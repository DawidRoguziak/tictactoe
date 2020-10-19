(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dawid/Desktop/tictactoe/src/main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class MenuComponent {
    constructor() {
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setPLayer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leftSide = null;
        this.rightSide = null;
        this.player1Name = 'Player 1';
        this.player2Name = 'Player 2';
    }
    startGame() {
        if (this.leftSide !== null && this.rightSide !== null) {
            this.closeMenu.emit();
        }
    }
    handlePlayerChoose(e, side, type) {
        if (side === 'x') {
            this.leftSide = type;
        }
        else {
            this.rightSide = type;
        }
        this.setPLayer.emit({
            side,
            type,
            name: side === 'x' ? this.player1Name : this.player2Name
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu-component"]], outputs: { closeMenu: "closeMenu", setPLayer: "setPLayer" }, decls: 17, vars: 14, consts: [[1, "menu"], [1, "menu-left"], [1, "player-name"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "menu-option-human", 3, "click"], [1, "menu-option-computer", 3, "click"], [1, "menu-right"], ["type", "button", 1, "btn", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuComponent_Template_input_ngModelChange_3_listener($event) { return ctx.player1Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_4_listener($event) { return ctx.handlePlayerChoose($event, "x", "human"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Human ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_6_listener($event) { return ctx.handlePlayerChoose($event, "x", "computer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuComponent_Template_input_ngModelChange_10_listener($event) { return ctx.player2Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_11_listener($event) { return ctx.handlePlayerChoose($event, "y", "human"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Human ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_13_listener($event) { return ctx.handlePlayerChoose($event, "y", "computer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_15_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Start game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.player1Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.leftSide === "human");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.leftSide === "computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.player2Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.rightSide === "human");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.rightSide === "computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("success", ctx.leftSide !== null && ctx.rightSide !== null)("disabled", ctx.leftSide === null || ctx.rightSide === null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".menu[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.player-name), .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.player-name) {\n  position: absolute;\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background: #faa307;\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .menu-option-human[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .menu-option-computer[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   .menu-option-human[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   .menu-option-computer[_ngcontent-%COMP%] {\n  left: 20%;\n  background: #457b9d;\n  transform: translateY(-50%);\n  width: 60%;\n  padding: 10px;\n  border-radius: 6px;\n  color: #1d3557;\n  font-size: 20px;\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .menu-option-human[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   .menu-option-human[_ngcontent-%COMP%] {\n  top: 50%;\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .menu-option-computer[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   .menu-option-computer[_ngcontent-%COMP%] {\n  top: 60%;\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.menu[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 200px;\n}\n@media (max-width: 768px) {\n  .menu[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 130px !important;\n  }\n}\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFHUTtFQUNJLGtCQUFBO0FBRFo7QUFJUTtFQUNJLG1CQUFBO0FBRlo7QUFLTztFQUNLLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkN6Qkc7RUQwQkgsY0FBQTtFQUNBLGVDNUJEO0FEeUJYO0FBTVE7RUFDSSxRQUFBO0FBSlo7QUFPUTtFQUNJLFFBQUE7QUFMWjtBQVFPO0VBQ0ssa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBTlo7QUFRWTtFQUNJLGVDOUNMO0VEK0NLLFlBQUE7QUFOaEI7QUFXSTtFQUVRO0lBQ0ksdUJBQUE7RUFWZDtBQUNGO0FBY0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFaUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi92YXJzJztcclxuXHJcbi5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAubWVudS1yaWdodCwgLm1lbnUtbGVmdCAge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGl2Om5vdCgucGxheWVyLW5hbWUpIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWEzMDc7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAubWVudS1vcHRpb24taHVtYW4gLCAubWVudS1vcHRpb24tY29tcHV0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NTdiOWQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgICAgICAgICAgY29sb3I6ICMxZDM1NTc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgICAubWVudS1vcHRpb24taHVtYW4ge1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51LW9wdGlvbi1jb21wdXRlciB7XHJcbiAgICAgICAgICAgIHRvcDogNjAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAucGxheWVyLW5hbWUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAucGxheWVyLW5hbWUgeyAgIFxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG59IiwiJGZvbnRTaXplOiAyMHB4O1xyXG4kYm9yZGVyUmFkaXVzOiA2cHg7XHJcbi8vIGNvbG9yc1xyXG4kYmFja2dyb3VuZENvbG9yOiAjMWQzNTU3O1xyXG4kc3VjY2VzQ29sb3I6ICMwNmQ2YTA7XHJcbiRkYW5nZXJDb2xvcjogI2U3MWQzNjtcclxuJHByb2NjZWRDb2xvcjogIzAwNzdiNjtcclxuJGRlZmF1bHRGb250Q29sb3I6ICNmMWZhZWU7XHJcbiRncmF5Q29sb3I6ICNkZGQ7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu-component',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, { closeMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['closeMenu']
        }], setPLayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['setPLayer']
        }] }); })();


/***/ }),

/***/ "1tmV":
/*!**********************************!*\
  !*** ./src/app/models/Player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(name, symbol, isComputer = false) {
        this.name = name;
        this.winCounter = 0;
        this.isComputer = isComputer;
        this.symbol = symbol;
    }
}


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
const _c0 = [[["", "modalTitle", ""]], [["", "modalContent", ""]], [["", "modalFooter", ""]]];
const _c1 = ["[modalTitle]", "[modalContent]", "[modalFooter]"];
class ModalComponent {
    constructor() {
        this.open = false;
    }
    openModal() {
        this.open = true;
    }
    closeModal() {
        this.open = false;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], ngContentSelectors: _c1, decls: 2, vars: 2, consts: [["class", "modal", 4, "ngIf"], ["class", "mask", 4, "ngIf"], [1, "modal"], [1, "modal-title"], [1, "modal-content"], [1, "modal-footer"], [1, "mask"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_div_1_Template, 1, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n  z-index: 99999;\n}\n.modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n@media (max-width: 768px) {\n  .modal[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.mask[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 99998;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0FBRlI7QUFLSTtFQUNJLGFBQUE7QUFIUjtBQU9BO0VBQ0k7SUFDQyxZQUFBO0VBSkg7QUFDRjtBQU9BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcnMnO1xyXG5cclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG5cclxuICAgIC5tb2RhbC10aXRsZSwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplICogMjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7ICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1vZGFsIHtcclxuICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXNrIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IC41O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Player */ "1tmV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game/game.component */ "opiA");






function AppComponent_menu_component_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "menu-component", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setPLayer", function AppComponent_menu_component_0_Template_menu_component_setPLayer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setPLayer($event); })("closeMenu", function AppComponent_menu_component_0_Template_menu_component_closeMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_game_component_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "game-component", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resetGame", function AppComponent_game_component_1_Template_game_component_resetGame_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.resetGame($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPlayer", ctx_r1.currentPlayer)("player1", ctx_r1.player1)("player2", ctx_r1.player2);
} }
class AppComponent {
    constructor() {
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
    }
    resetGame() {
        this.player1 = this.player2 = this.currentPlayer = null;
    }
    setPLayer(e) {
        if (e.side === 'x') {
            this.player1 = new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"](e.name, 'x', e.type === 'computer');
        }
        else {
            this.player2 = new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"](e.name, 'o', e.type === 'computer');
        }
    }
    startGame() {
        this.currentPlayer = this.player1;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[3, "setPLayer", "closeMenu", 4, "ngIf"], [3, "currentPlayer", "player1", "player2", "resetGame", 4, "ngIf"], [3, "setPLayer", "closeMenu"], [3, "currentPlayer", "player1", "player2", "resetGame"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_menu_component_0_Template, 1, 0, "menu-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_game_component_1_Template, 1, 3, "game-component", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPlayer === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPlayer !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game/game.component */ "opiA");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "opiA":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal.component */ "7aL3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GameComponent_div_2_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameComponent_div_2_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_2_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const col_r3 = ctx.$implicit; const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.handleFieldClick($event, row_r1, col_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_2_div_1_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameComponent_div_2_div_1_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.board[row_r1][col_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.board[row_r1][col_r3] === "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.board[row_r1][col_r3] === "o");
} }
function GameComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_2_div_1_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.arrayTwo(3));
} }
class GameComponent {
    constructor() {
        this.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
        this.tie = 0;
        this.games = 1;
        this.board = Array(3).fill('').map(() => Array(3).fill(''));
    }
    ngOnInit() {
        this.moveIfComputer();
    }
    arrayTwo(n) {
        return [...Array(n).keys()];
    }
    resetGame() {
        this.eventEmitter.emit();
        this.modalComponent.closeModal();
    }
    nextGame() {
        this.board = Array(3).fill('').map(() => Array(3).fill(''));
        this.currentPlayer = this.player1;
        this.modalComponent.closeModal();
        this.moveIfComputer();
        this.games += 1;
    }
    handleFieldClick(e, row, col) {
        if (this.board[row][col].length !== 0) {
            return;
        }
        this.board[row][col] = this.currentPlayer.symbol;
        if (this.checkIfSomeoneWin(row, col)) {
            this.showWinner();
            return;
        }
        this.boardIsFull();
        this.currentPlayer = this.currentPlayer.symbol === this.player1.symbol ? this.player2 : this.player1;
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
            row = Math.floor(Math.random() * 3);
            col = Math.floor(Math.random() * 3);
            if (this.board[row][col].length === 0) {
                findCords = false;
            }
        } while (findCords);
        setTimeout(() => {
            this.handleFieldClick({}, row, col);
        }, 100);
    }
    showWinner() {
        this.currentPlayer.winCounter += 1;
        this.modalComponent.openModal();
    }
    checkIfSomeoneWin(row, col) {
        const windIndex = 2;
        const boardSize = 3;
        // check row
        for (let i = 0; i < boardSize; ++i) {
            if (this.board[row][i] !== this.currentPlayer.symbol) {
                break;
            }
            if (i === windIndex) {
                return true;
            }
        }
        // check column
        for (let i = 0; i < boardSize; ++i) {
            if (this.board[i][col] !== this.currentPlayer.symbol) {
                break;
            }
            if (i === windIndex) {
                return true;
            }
        }
        // check first diagonal
        if (row === col) { // diagonal box
            for (let i = 0; i < boardSize; ++i) {
                if (this.board[i][i] !== this.currentPlayer.symbol) {
                    break;
                }
                if (i === windIndex) {
                    return true;
                }
            }
        }
        // check second diagonal
        if (row + col === boardSize - 1) { // second diagonal box
            for (let i = 0; i < boardSize; ++i) {
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
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (this.board[i][j].length === 0) {
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
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["game-component"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalComponent = _t.first);
    } }, inputs: { player1: "player1", player2: "player2", currentPlayer: "currentPlayer" }, outputs: { eventEmitter: "resetGame" }, decls: 25, vars: 9, consts: [[1, "fields-box", "relative"], [1, "board"], ["class", "row", 4, "ngFor", "ngForOf"], ["modalTitle", ""], ["modalContent", "", 1, "relative", 2, "height", "100px"], [1, "flex", "center"], [1, "color-danger"], [1, "color-gray"], [1, "color-success"], ["modalFooter", "", 1, "flex"], [1, "btn", "procced", "m-r-10", 3, "click"], [1, "btn", "procced", 3, "click"], [1, "row"], ["class", "field relative", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "field", "relative", 3, "click"], ["class", "center symbol", 4, "ngIf"], [1, "center", "symbol"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Winner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_button_click_21_listener() { return ctx.resetGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Restart Game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_button_click_23_listener() { return ctx.nextGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Next game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arrayTwo(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("color-danger", ctx.currentPlayer.symbol === "x")("color-success", ctx.currentPlayer.symbol === "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentPlayer.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.player1.winCounter, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.tie, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.player2.winCounter, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".fields-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.fields-box[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.fields-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.fields-box[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background: #ddd;\n}\n.fields-box[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%] {\n  background: #e71d36;\n}\n.fields-box[_ngcontent-%COMP%]   .o[_ngcontent-%COMP%] {\n  background: #06d6a0;\n}\n.fields-box[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .fields-box[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .fields-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUtJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUhSO0FBTUk7RUFDSSxtQkN0Qk07QURrQmQ7QUFPSTtFQUNJLG1CQzNCTTtBRHNCZDtBQVFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBTlI7QUFTSTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFQVjtFQVVNO0lBQ0ksWUFBQTtFQVJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vdmFycyc7XHJcblxyXG4uZmllbGRzLWJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAuYm9hcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9IFxyXG5cclxuICAgIC5yb3cge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICAueCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGRhbmdlckNvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHN1Y2Nlc0NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zeW1ib2wge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59IiwiJGZvbnRTaXplOiAyMHB4O1xyXG4kYm9yZGVyUmFkaXVzOiA2cHg7XHJcbi8vIGNvbG9yc1xyXG4kYmFja2dyb3VuZENvbG9yOiAjMWQzNTU3O1xyXG4kc3VjY2VzQ29sb3I6ICMwNmQ2YTA7XHJcbiRkYW5nZXJDb2xvcjogI2U3MWQzNjtcclxuJHByb2NjZWRDb2xvcjogIzAwNzdiNjtcclxuJGRlZmF1bHRGb250Q29sb3I6ICNmMWZhZWU7XHJcbiRncmF5Q29sb3I6ICNkZGQ7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'game-component',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss'],
            }]
    }], function () { return []; }, { eventEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['resetGame']
        }], player1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], player2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modalComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map