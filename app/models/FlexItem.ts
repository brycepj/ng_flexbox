// this is where the data model and data-related methods go for FlexItems
import {ItemCfg} from '../utils/interfaces';
import {StyleProp} from './StyleProp';

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

export class FlexItem {
	public itemStyles:StyleProp[];
	private cfg: ItemCfg;

	constructor(cfg) {

		this.cfg = cfg;
		var styles = this.itemStyles = [];

		_.forOwn(ItemStyles, function (value, key) {
			styles.push(new StyleProp(key, value));
		});

		_.forOwn(ContainerStyles, function (value, key) {
			styles.push(new StyleProp(key, value));
		});
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
