import {Local} from '../services/LocalStorage';
import {cssStylePairItem, cssStylePairContainer} from '../utils/interfaces';

export class CSSDefaults {
	// injected at Boot, inject anywhere
	public container:cssStylePairContainer;
	public item:cssStylePairItem;

	private _itemDefaults:cssStylePairItem;
	private _containerDefaults:cssStylePairContainer;
	private _localExists = Local.exists;

	constructor() {
		this._itemDefaults = _.cloneDeep(itemDefaults);
		this._containerDefaults = _.cloneDeep(containerDefaults);
		this.setup(this._localExists);
	}

	get container() {
		return this._containerDefaults;
	}

	set container(styles:cssStylePairContainer) {
		// TODO: Will want to validate these as possible styles
		_.forOwn(styles, function (val, key) {
			let defaults = this._containerDefaults;
			if (defaults.hasOwnProperty(key)) {
				defaults[key] = val;
			}
		});
	}

	get item() {
		return this._itemDefaults;
	}

	set item(styles:cssStylePairItem) {
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
		let container = this.container = exists ? Local.containerDefaults : this._containerDefaults;
	}

	setupItemDefaults(exists) {
		let item = this.item = exists ? Local.itemDefaults : this._itemDefaults;
	}
}

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
