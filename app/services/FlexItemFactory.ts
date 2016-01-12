import {FlexItem} from '../models/FlexItem';

export class FlexItemFactory {
	// eventually validate with a validate method
	constructor() {
		this.validate();
	}

	validate(throwIt?: Boolean) {
		if (!throwIt) throw Error('NOT VALID CFG!!');
	}
	create(cfg) {
		return new FlexItem(cfg);
	}
}

