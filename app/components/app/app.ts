import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { FlexContainer } from '../../services/FlexContainer';
import {FlexContainerCmp} from '../flexContainer.component';
import { Info } from '../../services/Info';
import { NgIf } from 'angular2/common';

// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';

@Component({
  selector: 'flexboxapp',
  template:`
    <div *ngIf='!flexContainer.list.length' class="masthead">
      <h1 class="mh-logo">{{siteTitle}}</h1>
      <p class="mh-desc">{{siteDesc}}</p>

      <div class="mh-cond-content">
        <h2 class="mh-desc">{{siteStepsTitle}}</h2>
        <ul>
          <li *ngFor="#step of siteSteps">
            {{ step }}
          </li>
        </ul>
        <p class="mh-warning">This is a warning {{warning}}</p>
        <p>{{lastUpdated}}</p>
      </div>
    </div>
    <!--<nav>-->
      <!--<a [routerLink]="['/Home']">Home</a>-->
      <!--<a [routerLink]="['/About']">About</a>-->
    <!--</nav>-->
    <flex-container id="flexbox-app" class="flex-container-wrap"></flex-container>
    <!--<router-outlet></router-outlet>-->
  `,
  styleUrls: ['./components/app/app.css'],
  directives: [ROUTER_DIRECTIVES, FlexContainerCmp, NgIf]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {
  public siteTitle: string;
  public siteDesc: string;
  public siteStepsTitle: string;
  public siteSteps: any[];
  public lastUpdated: Date;
  public warning: string;
  public listLength: number;

  constructor(private flexContainer: FlexContainer) {
    this.setup();
  }

  setup() {
    this.setupSiteInfo();
  }

  setupSiteInfo () {
    var info = new Info().site;
    this.siteDesc = info.desc;
    this.siteTitle = info.title;
    this.siteSteps = info.steps;
    this.siteStepsTitle = info.stepsTitle;
    this.lastUpdated = info.lastUpdated;
    this.warning = info.warning;
  }


}
