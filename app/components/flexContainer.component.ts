import {Component} from 'angular2/core';
import {NgFor, NgStyle} from 'angular2/common';
import {FlexContainer} from '../services/FlexContainer';
import {FlexItemCmp} from './flexItem.component';
import {TourPanelCmp, AdminPanelCmp, CodePanelCmp} from './SidebarCmps';
import {FlexItem} from '../models/FlexItem';
import {CSSDefaults} from '../services/CSSDefaults';
import {Local} from '../services/LocalStorage';
import {PropsToSelectors} from '../utils/pipes';

@Component({
	selector: 'flex-container',
	styles: [`

  `],
	template: `
		<h1>hello angular 2 flexbox</h1>
		<div id='flex-container-wrap'>
			<div id="flex-container" [ngStyle]="flexContainer.styles | PropsToSelectors" class="flex-container">
				<flex-item *ngFor="#item of flexContainer.list" [item]="item"></flex-item>
			</div>
			<aside class="sidebar">
				<tour-panel></tour-panel>
				<admin-panel></admin-panel>
				<code-panel></code-panel>
			</aside>
    </div>
	`,
	directives: [NgFor, FlexItemCmp, NgStyle,
		TourPanelCmp, AdminPanelCmp, CodePanelCmp],
	providers: [CSSDefaults, FlexContainer],
	pipes: [PropsToSelectors]
})

export class FlexContainerCmp {
	constructor(public flexContainer: FlexContainer) {}
}
