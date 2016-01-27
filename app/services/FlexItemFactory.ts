import {FlexItem} from '../models/FlexItem';
import {CSSDefaults} from "./CSSDefaults";
import {Injectable} from "angular2/core";

@Injectable()
export class FlexItemFactory {
	// eventually validate with a validate method
	constructor(private _cssDefaults:CSSDefaults) {}

	create() {
		let defaults = this._cssDefaults.getitem();
		var helloItem = new FlexItem(defaults);
		return helloItem;
	}
}

