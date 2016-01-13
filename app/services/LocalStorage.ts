export var Local = (function () {
	new _Local()
})();

class _Local {
	private _exists:Boolean;

	constructor() {
		this._exists = _.keys(store.getAll()).length > 0;
	}

	get exists():Boolean {
		return this._exists;
	}

	get itemsList():any {
		return store.get('itemsList');
	}

	set itemsList(items:any) {
		store.set('itemsList', items);
	}

	get itemDefaults():any {
		return store.get('itemDefaults');
	}

	set itemDefaults(itemObj:any) {
		store.set('itemDefaults', itemObj)
	}

	get containerDefaults():any {
		return store.get('containerDefaults');
	}

	set containerDefaults(containerObj:any) {
		store.set('containerDefaults', containerObj);
	}
}