import {Component} from 'angular2/core';

@Component({
	selector: 'tour-panel',
	template: `
    <div id="message-box" class="message-box">
      <span class="mb-title">tour</span>
      <span class="mb-progress">{{tourBox.tourProgress}}</span>
      <p class="mb-content">{{tourBox.currentMessage}}</p>
      <a class="mb-action" *ngIf="tourBox.hasButton" (click)="tourBox.currentXUrl"> {{tourBox.currentXText}}</a>
      <a class="mb-action" (click)="tourAction" *ngIf="tourBox.currentAction">{{tourBox.currentXText}}</a>
      <nav class="mb-nav">
        <a href="#" (click)="tourPrevious"><i class="fa fa-chevron-left"></i></a>
        <a href="#" (click)="tourNext"><i class="fa fa-chevron-right"></i></a>
      </nav>
    </div>
	`
})

export class TourPanelCmp {
	public tourBox:any;
	public tourAction: any;

	constructor() {
		this.tourAction = {

		};
		this.tourBox = {
			hasButton: function () {
				console.log("Helo button");
			}
		}
	}
}
