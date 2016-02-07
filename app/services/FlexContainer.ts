import {FlexItem} from './../models/FlexItem';
import {CSSDefaults} from './CSSDefaults';
import {CssStylePairContainer} from '../utils/interfaces';
import {Local} from './LocalStorage';
import {Inject} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {containerOptions, containerDefaults} from '../utils/data';
import {FlexItemFactory} from '../services/FlexItemFactory';

@Injectable()
export class FlexContainer {
	public list:any = [];
	public styles: any;
	public styleOptions: any;
	constructor(private _flexItemFactory: FlexItemFactory) {
		this.styles = containerDefaults;
		this.styleOptions = containerOptions;
	}

	createFlexItem() {
		let newItem = this._flexItemFactory.create();
		newItem['index'] = this.list.length;
		this.list.push(newItem);
	}

	removeItem(idx?:number):void {
		let list = this.list;
		if (idx) {
			list.pop(idx);
		} else {
			list.pop();
		}
	}

	removeAll():void {
		this.list = [];
	}

}

