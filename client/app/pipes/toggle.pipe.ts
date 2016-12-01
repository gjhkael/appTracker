/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Pipe} from '@angular/core';

@Pipe({
  name: 'toggle'
})

export class TogglePipe {

  public static get ALL():string {return "all";}
  public static get APPLIED_TO():string {return "appTo";}
  public static get NOT_APPLIED_TO():string {return "notAppTo";}

  transform(pipeData, pipeModifier) {
    return pipeData.filter((eachItem) => {
      switch (pipeModifier){
        case TogglePipe.ALL:
          return true;
        case TogglePipe.APPLIED_TO:
          return eachItem['appliedTo'] == true;
        case TogglePipe.NOT_APPLIED_TO:
          return eachItem['appliedTo'] == false;
      }
      
    });
  }
}
