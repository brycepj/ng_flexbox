import {Component} from 'angular2/core';

@Component({
	selector: 'admin-panel',
	template: `
  <div class="control-panel">
    <span class="cp-title">control panel</span>
    <div class="cp-wrap">
      <div class="cp-items">
        <span class="cp-c-title">new item</span>
        <div class="cp-i-add-remove">
          <a class="cp-i-add" (click)="newItem"><i class="fa fa-plus"></i></a>
          <a class="cp-i-remove" (click)="oneLessItem"><i class="fa fa-minus"></i></a>
        </div>
        <div class="cp-i-settings">
          <div class="cp-i-s-width">
            <label for="fixed">fixed<input (checked)="flexType" type="radio" [name]="flexType" [value]="fixed"                         checked/></label>
            <label for="flexy">flexible<input (checked)="flexType" type="radio" [name]="flexType" [value]="flexy"/></label>
          </div>
          <label for="">lorem? <input [value]="loremCount" type="text"/></label>
        </div>
        <div class="cp-actions">
          <a href="#" (click)="destroyAll">delete all</a>
          <a href="#" (click)="tourResize">resize box</a>
        </div>
      </div>
      <div class="cp-container">
        <span class="cp-c-title">container properties</span>
        <label>flex-direction:
          <select *ngSelect="flexDirectionOptions" [value]="cPropsCurrent.flexDirection"></select>
        </label>
        <label>flex-wrap:
          <select *ngSelect="flexWrapOptions" [value]="cPropsCurrent.flexWrap"></select>
        </label>
        <label>justify-content:
          <select *ngSelect="justifyContentOptions" [value]="cPropsCurrent.justifyContent"></select>
        </label>
        <label>align-items:
            <select *ngSelect="alignItemsOptions" [value]="cPropsCurrent.alignItems"></select>
        </label>
        <label>align-content:
          <select *ngSelect="alignContentOptions" [value]="cPropsCurrent.alignContent"></select>
        </label>
      </div>
    </div>
	</div>
	`
})

export class AdminPanelCmp {

}