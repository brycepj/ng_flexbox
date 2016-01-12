// this is where the data model and data-related methods go for FlexItems
import {ItemStyles, ItemCfg} from '../utils/interfaces';
import {StyleProp} from './StyleProp';

export class FlexItem {
	public styles: StyleProp[];
	private cfg: ItemCfg;

	constructor(cfg) {

		this.cfg = cfg;
		var styles = this.styles = [];

		_.forOwn(ItemStyles, function (value, key) {
			styles.push(new StyleProp(key,value));
		});

		_.forOwn(ContainerStyles, function (value, key) {
			styles.push(new StyleProp(key, value));
		});
		// this may belong in a lower level class
	}
	private getDefaultStyles() {
		return {}
	}

	setDefaultStyles() {

	}
}
// remember fixed/flexy is a setting of multiple props

// {display: flex}
var ItemStyles = {
	height: {
		unit: 'px',
		value: '250',
		options: null,
	},
	width: {
		unit: 'px',
		value: '300',
		options: null,
	},
	margin: {
		unit: 'px',
		value: '10',
		options: null,
	},
	flexGrow: {
		unit: null,
		value: '1',
		options: null,
	},
	flexShrink: {
		unit: null,
		value: '0',
		options: [],
	},
	flexBasis: {
		unit: 'px',
		value: '200',
		options: null,
	},
	alignSelf: {
		unit: null,
		value: '',
		options: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'inherit'],
	}
};

var ContainerStyles = {
	flexDirection: {
		unit: null,
		value: '',
		options: ['row', 'column'],
	},
	flexWrap: {
		unit: null,
		value: '',
		options: ['wrap', 'nowrap'],
	},
	justifyContent: {
		unit: null,
		value: '',
		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
	},
	alignItems: {
		unit: null,
		value: '',
		options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
	},
	alignContent: {
		unit: null,
		value: '',
		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
	},
};




/*
setStyles() {
	return {
		// CSS property names
		'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
		'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
		'font-size':   this.isSpecial    ? 'x-large': 'smaller', // larger
	}
}

 style:{
 height:iPropsCurrent.height,
 width:iPropsCurrent.width,
 margin:iPropsCurrent.margin,
 flexGrow:iPropsCurrent.flexGrow,
 flexShrink:iPropsCurrent.flexShrink,
 flexBasis:iPropsCurrent.flexBasis,
 alignSelf:iPropsCurrent.alignSelf

 }"

*/


		// props

		// default styles
		// current styles
		// content
		// state
		// idx

		// calculated props
			// state
			// fixOrFlexy
		//


		// methods

		// saveProps to localstorage
		// destroy self
		// reset props
		// toggleState
		// toggleFlexFix
		// get/set all properties

//private model:any;
//public index:any;
//public iPropsCurrent:any;
//public isFixedWidth: Boolean;
//public isFlexyWidth: Boolean;
//public highlightFixed:any;
//public highlightFlexy:any;
//private content:any;
//public viewContent:any;
//public viewSettings:any;
//public lorem: any;
//public tallEnough:any;
//
//public itemStyles: any; // itemStyles
	//model:any, index:any, props:model.ItemProps = {
	//	viewSettings: false,
	//	viewContent: true,
	//	content: null,
	//	isFlexyWidth: false,
	//	isFixedWidth: true,
	//	height: "250px",
	//	width: "300px",
	//	order: null,
	//	flexGrow: null,
	//	flexShrink: null,
	//	flexBasis: null,
	//	alignSelf: null,
	//	margin: "10px",
	//	lorem: 1
		// set defaults
/*

		if (props.content && props.viewSettings) {
			props.viewSettings = true;
			props.viewContent = false;
		}
		else if (props.content) {
			props.viewSettings = false;
			props.viewContent = true;
		}


		;
		if (typeof props.lorem === "undefined") {
			props.lorem = 1;
		}
		;
		if (props.content) {
			props.lorem = null;
		}
		;
		if (typeof props.isFlexyWidth === "undefined") {
			props.isFlexyWidth = false
		}
		;
		if (typeof props.isFixedWidth === "undefined") {
			props.isFixedWidth = true
		}
		;
		if (typeof props.height === "undefined") {
			props.height = "250px"
		}
		;
		if (typeof props.width === "undefined") {
			props.width = "300px"
		}
		;
		if (typeof props.order === "undefined") {
			props.order = null
		}
		;
		if (typeof props.flexGrow === "undefined") {
			props.flexGrow = null
		}
		;
		if (typeof props.flexShrink === "undefined") {
			props.flexShrink = null
		}
		;
		if (typeof props.flexBasis === "undefined" && props.isFixedWidth) {
			props.flexBasis = null
		}
		;
		if (typeof props.margin === "undefined") {
			props.margin = "10px"
		}
		;


		if (props.isFlexyWidth) {
			props.isFixedWidth = false;
			props.width = null;

		} else if (props.isFixedWidth) {
			props.isFlexyWidth = false;
			props.height = "250px";
			props.width = "300px";
			props.order = null;
			props.flexGrow = null;
			props.flexShrink = null;
			props.flexBasis = null;
			props.alignSelf = null;

		}


		this.index = ko.observable(index);
		this.model = model;
		this.iPropsCurrent = {
			order: ko.observable(props.order),
			flexGrow: ko.observable(props.flexGrow),
			flexShrink: ko.observable(props.flexShrink),
			flexBasis: ko.observable(props.flexBasis),
			alignSelf: ko.observable(props.alignSelf),
			height: ko.observable(props.height),
			width: ko.observable(props.width),
			margin: ko.observable(props.margin)
		};


		this.viewSettings = ko.observable(props.viewSettings);
		this.viewContent = ko.observable(props.viewContent);

		this.lorem = new flexbox.model.devLorem(props.lorem);

		this.content = ko.computed(function () {
			var index = this.index();
			var lorem = this.lorem.text;

			var content = props.content;

			if (content) {
				return content;
			} else {
				return lorem;
			}

		}, this);


		this.isFixedWidth = ko.observable(props.isFixedWidth);
		this.isFlexyWidth = ko.observable(props.isFlexyWidth);


		this.highlightFixed = ko.computed(function () {
			if (this.isFixedWidth()) {
				return "1.6em"
			}
			else {
				return "inherit"
			}

		}, this);

		this.highlightFlexy = ko.computed(function () {
			if (this.isFlexyWidth()) {
				return "1.6em";
			}
			else {
				return "inherit";
			}

		}, this);

		this.tallEnough = function () {
			var height = this.iPropsCurrent.height();
			if (height > 60) {
				return true;
			}
			else {
				return false;
			}
		};
	}

	saveProps():void {
		var index = this.index();
		var keyName = "item-" + index;

		var flexGrow = this.iPropsCurrent.flexGrow();
		var flexShrink = this.iPropsCurrent.flexShrink();
		var flexBasis = this.iPropsCurrent.flexBasis();
		var width = this.iPropsCurrent.width();
		var height = this.iPropsCurrent.height();
		var isFlexy = this.isFlexyWidth();
		var isFixed = this.isFixedWidth();
		var viewContent = this.viewContent();
		var viewSettings = this.viewSettings();
		var content = this.content();


		localStorage.setItem(keyName + "-flexGrow", flexGrow);
		localStorage.setItem(keyName + "-flexShrink", flexShrink);
		localStorage.setItem(keyName + "-flexBasis", flexBasis);
		localStorage.setItem(keyName + "-width", width);
		localStorage.setItem(keyName + "-height", height);
		localStorage.setItem(keyName + "-isFlexy", isFlexy);
		localStorage.setItem(keyName + "-isFixed", isFixed);
		localStorage.setItem(keyName + "-viewContent", viewContent);
		localStorage.setItem(keyName + "-viewSettings", viewSettings);
		localStorage.setItem(keyName + "-content", content);


	}

	makeFixedWidth():void {
		this.isFixedWidth(true);
		this.iPropsCurrent.flexGrow(null);
		this.iPropsCurrent.flexBasis(null);
		this.iPropsCurrent.flexShrink(null);
		this.iPropsCurrent.width("300px");
		this.isFlexyWidth(false);


	}

	makeFlexyWidth():void {
		this.isFixedWidth(false);
		this.isFlexyWidth(true);
		this.iPropsCurrent.flexGrow("1");
		this.iPropsCurrent.flexBasis("200px");
		this.iPropsCurrent.flexShrink("0");
	}

	resetProps():void {
		var currentProps = this.iPropsCurrent;
		var newProps = this.model.iPropsDefault;
		currentProps.width(newProps.width());
		currentProps.flexGrow(newProps.flexGrow());
		currentProps.flexShrink(newProps.flexShrink());
		currentProps.flexBasis(newProps.flexBasis());
		currentProps.alignSelf(newProps.alignSelf());
	}


	toggleSettings():void {
		var visible = this.viewSettings();
		if (visible) {
			this.viewSettings(false);
			this.viewContent(true);
		} else {
			this.viewSettings(true);
			this.viewContent(false);
		}

	}

	destroySelf():void {
		var index = parseInt(this.index(), 10);
		this.model.destroyItem(index);
	}
}

*/
