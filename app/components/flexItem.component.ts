// this is where you write UI logic and methods for FlexItem
import {NgIf} from 'angular2/common';
import {Input, Component} from 'angular2/core';
import {FlexItem} from '../models/FlexItem';
import {CSSDefaults} from '../services/CSSDefaults';

@Component({
	selector: 'flex-item',
	template: `
	  <div style="setStyles()" class="flex-item animated">
      <a href="#" class="fi-destroy-btn" (click)="destroySelf"><i class="fa fa-times"></i></a>
      <a href="#" class="fi-settings-btn" (click)="toggleSettings"><!--, visible:tallEnough-->
        <i class="fa fa-cog"></i>
      </a>
      <span class="fi-index">{{item.text.index}}</span>
      <p class="fi-content" *ngIf="viewContent">{{item.text.content}}</p>
      <div class="fi-options" *ngIf="viewSettings">
        <span class="fi-o-title">
          <a href="#" (click)="makeFixedWidth" [style]="{fontSize:highlightFixed}">fixed</a> or
          <a href="#" (click)="makeFlexyWidth" [style]="{fontSize:highlightFlexy}">flexy</a> width?
        </span>
        <div class="fi-options-fixed" data-bind="visible:isFixedWidth">
          <label>width:
            <input type="text" enable="isFixedWidth" [value]="iPropsCurrent.width">
          </label>
          <label>height:
            <input type="text" enable="isFixedWidth" [value]="iPropsCurrent.height">
          </label>
        </div>
        <div class="fi-options-flexy" *ngIf="isFlexyWidth">
          <label>flex-grow:
            <input type="text" enable="isFlexyWidth" [value]="iPropsCurrent.flexGrow">
          </label>
          <label for="">flex-shrink:
            <input type="text" [value]="iPropsCurrent.flexShrink">
          </label>
          <label for="">flex-basis:
            <input type="text" [value]="iPropsCurrent.flexBasis">
          </label>
        </div>
      </div>
    </div>
	`,
	directives: [NgIf]
})

export class FlexItemCmp {
	@Input() model:FlexItem;
	public itemStyles: any;
	constructor(private _cssDefaults: CSSDefaults) {
		this.itemStyles = this._cssDefaults.item;
	}
}



