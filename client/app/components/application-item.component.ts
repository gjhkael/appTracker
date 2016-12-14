/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Component} from '@angular/core';
import {ServerConnector} from '../services/server-connector';

@Component ({
  selector: 'application-item',
  moduleId: module.id,
  templateUrl: '../../html/application-item.html',
  styleUrls : ['../../css/app-item.css'],
  inputs: ['application']
})

export class ApplicationItemComponent {

  constructor(private connector: ServerConnector){}

}
