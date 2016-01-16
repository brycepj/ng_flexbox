import {Local} from '../services/LocalStorage';
import {CssStylePairItem, CssStylePairContainer} from '../utils/interfaces';
import {Inject, Injectable} from "angular2/core";

const itemDefaults = {
	'display': 'flex',
	'width': '300px',
	'height': '250px',
	'flex-grow': '0',
	'flex-shrink': '0',
	'flex-order': '0',
	'flex-basis': '0',
	'align-self': 'center'
};

const containerDefaults = {
	'display': 'block',
	'width': '100%',
	'height': '100%',
	'flex-wrap': 'wrap',
	'flex-direction': 'row',
	'justify-content': 'center',
	'align-items': 'center',
	'align-self': 'center'
};

const containerOptions = {
	'display': 'block',
	'width': '100%',
	'height': '100%',
	'flexWrap': ['wrap', 'nowrap'],
	'flexDirection': ['row', 'column'],
	'justifyContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
	'alignItems': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
	'alignContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
};

@Injectable()
export class CSSDefaults {
	// injected at Boot, inject anywhere
	public container:CssStylePairContainer;
	public item:CssStylePairItem;
	public containerOptions: any = containerOptions;

	private _itemDefaults:CssStylePairItem;
	private _containerDefaults:CssStylePairContainer;
	private _localExists:Boolean;
	private _local:any;

	constructor(@Inject(Local) _local) {
		this._local = _local;
		this._localExists = _local.exists
		this._itemDefaults = _.cloneDeep(itemDefaults);
		this._containerDefaults = _.cloneDeep(containerDefaults);
		this.setup(this._localExists);
	}

	getcontainer() {
		return this._containerDefaults;
	}

	setcontainer(styles:CssStylePairContainer) {
		// TODO: Will want to validate these as possible styles
		_.forOwn(styles, function (val, key) {
			let defaults = this._containerDefaults;
			if (defaults.hasOwnProperty(key)) {
				defaults[key] = val;
			}
		});
	}

	getitem() {
		return this._itemDefaults;
	}

	setitem(styles:CssStylePairItem) {
		_.forOwn(styles, function (val, key) {
			let defaults = this._itemDefaults;
			if (defaults.hasOwnProperty(key)) {
				defaults[key] = val;
			}
		});
	}

	setup(exists:Boolean):void {
		this.setupContainerDefaults(exists);
		this.setupItemDefaults(exists);
	}

	setupContainerDefaults(exists:Boolean):void {
		this.container = exists
			? this._local.getcontainerDefaults()
			: this._containerDefaults;
	}

	setupItemDefaults(exists) {
		this.item = exists
			? this._local.getitemDefaults()
			: this._itemDefaults;
	}
}

/*
*
* var ItemStyles = {
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
 };*/