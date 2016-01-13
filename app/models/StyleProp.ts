import { StyleDefaults } from '../services/CSSDefaults';

export class StylePropSet {
	public type: string;
	public model: StyleDefaults;
	public formatted: any;

	constructor(type, StyleDefaults: StyleDefaults) {
		this.type = type == 'container' || 'item' ? type : Error;
		// arr of StyleProps
		var unformatted = new StyleDefaults(type);
		this.model = unformatted;
		this.formatted = this.formatNgStyles();
	}

	formatNgStyles() {
		// this will be this.styles
		var obj = {};

		_.forEach(this.model, function(value){
			let styleProp = _.kebabCase(value.name);
			let styleValue = value.default;
			obj[styleProp] = styleValue;
		});

		return obj;
	}
	/*

	*/


}




export class StyleProp {
	public property:string;
	public unit: any;
	public value: string;
	public options: string[];

	constructor(name, cfg) {
		this.property = name;
		this.unit = cfg.unit || null;
		this.value = cfg.value;
		this.options = cfg.options || null;
		this.default = cfg.value;
	}
}