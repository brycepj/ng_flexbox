import {Local} from '../services/LocalStorage';

// factory that takes type of component and returns
// also produces the model for admin panel
// no -- provide methods. this is a factory. Configure at the outset, but be functional
export class StyleDefaults {
	public
	constructor() {
		// register properties associated with each type

		this.maybeSetFromLocalStorage();

		// setContainerDefaults
		// check localStorage
		// loop through
		// this needs the tools to keep state for the container
		// this also needs the ability to create new flex
	}

	get container() {

	}

	set container(defaults) {
		// only accessed by localStorageGetterSetter
	}

	get item() {

	}

	set container(defaults) {

	}


	_maybeSetFromLocalStorage() {

		if (Local.exists) {
			this.container(Local.containerDefaults);
			this.item(Local.itemDefaults);

		} else {
			store.set('itemDefaults', this.item);
			store.set('containerDefaults', this.container);
			store.set('itemList', this.items);
		}
 		// readLocalStorage
		store.get();
	}

	_setLocalStorage() {

	}

}

var containerProps = [
	['display', 'block'],
	['width', '100%'],
	['height', '100%'],
	['flex-wrap', 'wrap'],
	['flex-direction', 'row'],
	['justify-content', 'center'],
	['align-items', 'center'],
	['align-self', 'center'],
];
var itemProps = [
	['display','flex'],
	['width','300px'],
	['height','250px'],
	['flex-grow','0'],
	['flex-shrink','0'],
	['flex-order','1'],
	['flex-basis','0'],
	['align-self','center'],
];
