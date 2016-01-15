import {FlexItem} from './FlexItem';
import {CSSDefaults} from '../services/CSSDefaults';
import {CssStylePairContainer} from '../utils/interfaces';
import {Local} from '../services/LocalStorage';
import {Inject} from 'angular2/core';

export class FlexContainer {
	public list:FlexItem[];
	public styles:CssStylePairContainer;
	private _local: any;

	constructor(@Inject(Local) _local:Local) {
		this.list = [];
		this._local = _local;
	}

	createFlexItem() {
		let newItem = new FlexItem();
		this.list.push(newItem);
		this._local.setitemsList(this.list);
	}

	removeItem() {
		this.list.pop();
		this._local.setitemsList(this.list);
	}

/*	removeOneItem() {

	}

	removeAllItems() {

	}

	retrieveSaved() {

	}

	makeHolyGrail() {

	}

	makeResponsiveNav() {

	}*/
}

