import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {FlexContainer} from '../models/FlexContainer';
import {FlexItemCmp} from './flexItem.component';
import {FlexItem} from '../models/FlexItem';

@Component({
	selector: 'flex-container',
	template: `
		<h1>hello angular 2 flexbox</h1>
		<div id='flex-container-wrap'>
			<div id="flex-container" class="flex-container">
			<flex-item *ngFor="#item of itemsList" [model]="item"></flex-item>
			</div>
    </div>
	`,
	directives: [NgFor, FlexItemCmp]
})

export class FlexContainerCmp {
	public itemsList: any;
	private flexContainer: FlexContainer;

	constructor() {
		let container = this.flexContainer = new FlexContainer();
		this.itemsList = container.list;
		this.setup();
	}

	setup() {

	}
}

var methods = {

};

