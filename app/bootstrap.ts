import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';
import {CSSDefaults} from './services/CSSDefaults';
import {Local} from './services/LocalStorage';
import {FlexContainer} from './models/FlexContainer';

bootstrap(AppCmp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(Local, {useClass:Local}),
  provide(FlexContainer, {useClass:FlexContainer})
]);

