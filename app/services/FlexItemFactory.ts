import {FlexItem} from '../models/FlexItem';
import {CSSDefaults} from "./CSSDefaults";
import {Injectable} from "angular2/core";

var displayDefaults = {
	view: 'settings',
	state: 'fixed',
	lorem: 5
};

@Injectable()
export class FlexItemFactory {
	// eventually validate with a validate method
	public displayDefaults: any;
	constructor(private _cssDefaults:CSSDefaults) {
		this.displayDefaults = displayDefaults;
	}

	create() {
		let styleDefaults = this._cssDefaults.getitem();
		let displayDefaults = this.displayDefaults;

		return new FlexItem(styleDefaults, displayDefaults);
	}

	setDefault(cfg){
		_.assign(this.displayDefaults, cfg);
	}
}

