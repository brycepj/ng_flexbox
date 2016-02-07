import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {FlexContainer} from '../services/FlexContainer';
import {CSSDefaults} from '../services/CSSDefaults';
import {DerpPipe} from '../utils/pipes';
import {containerOptions} from '../utils/data';

@Component({
	selector: 'admin-panel',
	templateUrl: './components/templates/adminPanel.html',
	directives: [FORM_DIRECTIVES],
	pipes: [DerpPipe]
})

export class AdminPanelCmp {
	public options: any;
	public itemDefaults: any;
	constructor(private flexContainer: FlexContainer, private _cssDefaults: CSSDefaults) {
		this.options = containerOptions;
		this.itemDefaults = {
			type: {
				fixed: true,
				flexy: false
			},
			lorem: 5,
			timesClicked: 0
		};
	}

	updateContainerStyles(prop, evt) {
		var srcElem = evt.srcElement;
		var newVal = srcElem.value;
		// prop = _.kebabCase(prop);
		this.flexContainer.styles[prop] = newVal;
		console.log("Thinsg", prop, newVal);
	}

	changeItemTypeDefault(type, event) {
		this.itemDefaults[type] = event.target.checked;
		console.log(this.itemDefaults);
		this.itemDefaults.timesClicked++;
	}
	private toggleLocalValues(){
		let types = this.itemDefaults.type;
		this.itemDefaults.type = _.mapValues(types, function (val) {
			return !val;
		});
		console.log(this.itemDefaults);
	}

	addItem() {
		this.flexContainer.createFlexItem();
	}

	removeItem() {
		this.flexContainer.removeItem();
	}

	removeAllItems(){
		this.flexContainer.removeAll()
	}

	setItemDefault(styleObj) {
		this._cssDefaults.setitem(styleObj);
	}




}
