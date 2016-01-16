import {Component, Input} from 'angular2/core';
import {FlexContainer} from '../services/FlexContainer';
import {CSSDefaults} from '../services/CSSDefaults';

@Component({
	selector: 'admin-panel',
	templateUrl: './components/templates/adminPanel.html'
})

export class AdminPanelCmp {
	public options: any;
	constructor(public flexContainer: FlexContainer, private _cssDefaults: CSSDefaults) {
		this.options = this._cssDefaults.containerOptions;
	}

	addItem() {
		this.flexContainer.createFlexItem();
	}

	removeLastItem() {
		this.flexContainer.removeItem();
	}

	setContainerStyle(prop:string, val:string) {
		var formatted = _.kebabCase(prop);
		var obj = {}; obj[formatted] = val;
		this._cssDefaults.setcontainer(obj);
	}
}
