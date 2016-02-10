import {Component} from 'angular2/core';
import {TourData, TourMessage} from '../services/tourData';
import {IndexDisplay} from '../utils/pipes';

@Component({
	selector: 'tour-panel',
	template: `
    <div>
      <span class="mb-title">tour</span>
      <span class="mb-progress">{{currentIdx | IndexDisplay }} / {{lastIdx | IndexDisplay}}</span>
      <p class="mb-content">{{currentMessage.text}}</p>
      <div *ngIf="currentMessage.btnText">
	      <a class="mb-action" (click)="takeAction()"> {{currentMessage.btnText}}</a>
      </div>

      <nav class="mb-nav">
        <a (click)="tourPrevious()"><i class="fa fa-chevron-left"></i></a>
        <a (click)="tourNext()"><i class="fa fa-chevron-right"></i></a>
      </nav>
    </div>
	`,
	pipes: [IndexDisplay],
	providers: [TourData]
})

export class TourPanelCmp {
	public currentIdx: number;
	public lastIdx: number;
	public currentMessage: TourMessage;

	constructor(private tourData: TourData) {
		let curr = this.currentIdx = 0;
		this.lastIdx = this.tourData.data.length -1;
		this.currentMessage = tourData.data[curr];
	}

	tourNext() {
		let curr = this.currentIdx;
		if (curr !== this.lastIdx) {
			curr = this.currentIdx = this.currentIdx + 1;
			this.currentMessage = this.tourData.data[curr];
		}
	}

	tourPrevious() {
		let curr = this.currentIdx;
		if (curr !== 0) {
			curr = this.currentIdx = this.currentIdx - 1;
			this.currentMessage = this.tourData.data[curr];
		}
	}

	takeAction(){
		let curr = this.currentMessage;
		let action:string = curr.btnAction;
		switch (action) {
			case 'url':
				console.log('navigate to:', curr.btnUrl);
				break;
			case 'resize':
				console.log('resize');
				break;
			default:
				this.buildTemplate(action);
		}

	}

	buildTemplate(action) {
		console.log('building template', action);
	}

}
