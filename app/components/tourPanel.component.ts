import {Component} from 'angular2/core';

@Component({
	selector: 'tour-panel',
	template: `
    <div id="message-box" class="message-box">
      <span class="mb-title">tour</span>
      <span class="mb-progress" data-bind="text:tourBox.tourProgress"></span>
      <p class="mb-content" data-bind="html:tourBox.currentMessage"></p>
      <a class="mb-action" href="#" target="_blank" data-bind="visible:tourBox.hasButton,text:tourBox.currentXText,attr: {href:tourBox.currentXUrl}"></a>
      <a class="mb-action" href="#" target="_blank" data-bind="visible:tourBox.currentAction,click:tourAction,text:tourBox.currentXText">do it!</a>
      <nav class="mb-nav">
        <a href="#" data-bind="click:tourPrevious"><i class="fa fa-chevron-left"></i></a>
        <a href="#" data-bind="click:tourNext"><i class="fa fa-chevron-right"></i></a>
      </nav>
    </div>
	`
})

export class TourPanelCmp {

}