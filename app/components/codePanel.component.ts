import {Component} from 'angular2/core';

@Component({
	selector: 'code-panel',
	template: `
	<div class="code-box">
	  <span class="cb-title">code samples</span>
	  <div class="cb-item">
	    <code>
				<pre>
				.flex-container {
				    display:flex;
				    flex-direction: <span data-bind="text:cPropsCurrent.flexDirection"></span>;
				    flex-wrap: <span data-bind="text:cPropsCurrent.flexWrap"></span>;
				    justify-content: <span data-bind="text:cPropsCurrent.justifyContent"></span>;
				    align-content: <span data-bind="text:cPropsCurrent.alignContent"></span>;
				    align-items: <span data-bind="text:cPropsCurrent.alignItems"></span>;
				}
				</pre>
	    </code>
	  </div>
	  <div class="cb-item">
	    <code>
				<pre>
				.flex-items-default {
				    width: <span data-bind="text:iPropsDefault.width">null</span>;
				    height: <span data-bind="text:iPropsDefault.height">null</span>;
				    flex-grow: <span data-bind="text:iPropsDefault.flexGrow">null</span>;
				    flex-shrink: <span data-bind="text:iPropsDefault.flexGrow">null</span>;
				    flex-basis: <span data-bind="text:iPropsDefault.flexGrow">null</span>;
				}
				</pre>
	    </code>
	  </div>
	  <div class="code-box-items" data-bind="template: { name: 'code-box-items', foreach: items, as:'item' }"></div>
	</div>
	`
})
export class CodePanelCmp {

}
