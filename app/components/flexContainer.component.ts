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
		<aside class="sidebar">
			<tour-panel></tour-panel>
			<admin-panel></admin-panel>
			<code-panel list="flexContainer.list"></code-panel>
		</aside>
		<div id='flex-container-wrap'>
			<div id="flex-container"  [ngStyle]="{
		    'width': flexContainer.styles.width,
		    'height': flexContainer.styles.height,
	      'display': flexContainer.styles.display,
				'flex-wrap': flexContainer.styles.flexWrap,
				'flex-direction': flexContainer.styles.flexDirection,
				'justify-content': flexContainer.styles.justifyContent,
				'align-items': flexContainer.styles.alignItems,
				'align-content': flexContainer.styles.alignContent
	    }" class="flex-container">
				<flex-item *ngFor="#item of flexContainer.list" [item]="item"></flex-item>
			</div>
    </div>
	`,
	directives: [NgFor, FlexItemCmp, NgStyle,
		TourPanelCmp, AdminPanelCmp, CodePanelCmp],
	providers: [CSSDefaults, FlexContainer],
	pipes: [PropsToSelectors]
})

export class FlexContainerCmp {
	constructor(private flexContainer: FlexContainer) {}
}
