import {Component} from 'angular2/core';

@Component({
	selector: 'admin-panel',
	templateUrl: './components/templates/adminPanel.html'
})

export class AdminPanelCmp {
	public options:any;

	constructor() {
		this.options = {
			'flexWrap': ['one', 'two', 'three'],
			'flexDirection': ['four', 'five', 'six']
		};
	}
}
