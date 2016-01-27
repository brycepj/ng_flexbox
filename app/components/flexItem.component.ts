// this is where you write UI logic and methods for FlexItem
import {NgIf} from 'angular2/common';
import {Input, Component} from 'angular2/core';
import {FlexItem} from '../models/FlexItem';
import {CSSDefaults} from '../services/CSSDefaults';
import {PropsToSelectors} from '../utils/pipes';
import {NgStyle, NgModel} from 'angular2/common';
import {FlexContainer} from '../services/FlexContainer';

@Component({
	selector: 'flex-item',
	template: `
	  <div [ngStyle]="{
		    'width': item.styles.width,
		    'height': item.styles.height,
	      'display': item.styles.display,
				'flex-grow': item.styles.flexGrow,
				'flex-shrink': item.styles.flexShrink,
				'flex-order': item.styles.flexOrder,
				'flex-basis': item.styles.flexBasis,
				'align-self': item.styles.alignSelf
	    }" class="flex-item animated">
      <a href="#" class="fi-destroy-btn" (click)="removeSelf()"><i class="fa fa-times"></i></a>
      <a href="#" class="fi-settings-btn" (click)="toggleViewMode()"><!--, visible:tallEnough-->
        <i class="fa fa-cog"></i>
      </a>
      <span class="fi-index">{{getItemIndex()}}</span>
      <div class="fi-content"  *ngIf="viewMode">
        <p>{{item.text}}</p>
      </div>
      <div class="fi-options" *ngIf="editMode">
        <span class="fi-o-title">
          <a (click)="makeFixedWidth()">fixed</a> or
          <a (click)="makeFlexyWidth()">flexy</a> width?
        </span>
        <div *ngIf="isFixed" class="fi-options-fixed">
          <label>width:
            <input type="text" [(ngModel)]="item.styles.width" (change)="logMe($event)">
          </label>
          <label>height:
            <input type="text" [(ngModel)]="item.styles.height">
          </label>
        </div>
        <div *ngIf="isFlexy" class="fi-options-flexy">
          <label>flex-grow:
            <input type="text" [(ngModel)]="item.styles.flexGrow">
          </label>
          <label for="">flex-shrink:
            <input type="text" [(ngModel)]="item.styles.flexShrink">
          </label>
          <label for="">flex-basis:
            <input type="text" [(ngModel)]="item.styles.flexBasis">
          </label>
        </div>
      </div>
    </div>
	`,
	directives: [NgIf, NgStyle, NgModel],
	pipes: [PropsToSelectors]
})

export class FlexItemCmp {
	@Input() item: FlexItem;
	public idx: number;
	public viewMode: Boolean = true;
	public editMode: Boolean = false;
	public isFixed: Boolean = true;
	public isFlexy: Boolean = false;
	constructor(private flexContainer: FlexContainer) {}

	removeSelf() {
		this.flexContainer.list.pop(this.idx);
	}

	toggleViewMode(){
		this.viewMode = !this.viewMode;
		this.editMode = !this.editMode;
	}

	makeFixedWidth() {
		this.isFixed = true;
		this.isFlexy = false;
		this.item.styles.display = 'block';
	}
	makeFlexyWidth() {
		this.isFlexy = true;
		this.isFixed = false;
		this.item.styles.display = 'flex';
	}
	getItemIndex(){
		// this should probably be handled by the flexContainer class
		let idx = this.idx = this.flexContainer.list.indexOf(this.item) + 1;
		return idx;
	}
	logMe(e) {
		console.log(e, this)
	}

}



