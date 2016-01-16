import {FlexItem} from './../models/FlexItem';
import {CSSDefaults} from './CSSDefaults';
import {CssStylePairContainer} from '../utils/interfaces';
import {Local} from './LocalStorage';
import {Inject} from 'angular2/core';
import {Injectable} from 'angular2/core';

@Injectable()
export class FlexContainer {
	public list:any = [];
	public styles: any;

	constructor(private _local:Local, private _cssDefaults: CSSDefaults) {
		this.styles = this._cssDefaults.getcontainer();
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

