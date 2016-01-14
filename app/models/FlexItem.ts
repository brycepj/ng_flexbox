// this is where the data model and data-related methods go for FlexItems
import {ItemCfg} from '../utils/interfaces';
import {CSSDefaults} from '../services/CSSDefaults';
import {Inject} from 'angular2/core';
import {Injectable} from "angular2/core";

var ItemStyles = {
	height: {
		unit: 'px',
		value: '250',
		options: null
	},
	width: {
		unit: 'px',
		value: '300',
		options: null
	},
	margin: {
		unit: 'px',
		value: '10',
		options: null
	},
	flexGrow: {
		unit: null,
		value: '1',
		options: null
	},
	flexShrink: {
		unit: null,
		value: '0',
		options: []
	},
	flexBasis: {
		unit: 'px',
		value: '200',
		options: null
	},
	alignSelf: {
		unit: null,
		value: '',
		options: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'inherit']
	}
};

var ContainerStyles = {
	flexDirection: {
		unit: null,
		value: '',
		options: ['row', 'column']
	},
	flexWrap: {
		unit: null,
		value: '',
		options: ['wrap', 'nowrap']
	},
	justifyContent: {
		unit: null,
		value: '',
		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
	},
	alignItems: {
		unit: null,
		value: '',
		options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
	},
	alignContent: {
		unit: null,
		value: '',
		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
	}
};
@Injectable()
export class FlexItem {
	public itemStyles: any;

	constructor(private _cssDefaults: CSSDefaults) {

		this.itemStyles = this._cssDefaults.item;
		// this may belong in a lower level class
	}

}
// remember fixed/flexy is a setting of multiple props

// {display: flex}


/*
 setStyles() {
 return {
 // CSS property names
 'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
 'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
 'font-size':   this.isSpecial    ? 'x-large': 'smaller', // larger
 }
 }

 */
