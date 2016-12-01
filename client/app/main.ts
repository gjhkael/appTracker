/**
 * Created by pkulenkamp on 22/11/2016.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './module/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);