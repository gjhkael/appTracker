/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Pipe} from '@angular/core';

@Pipe({
  name: 'text'
})

export class SearchPipe {
  transform(pipeData, pipeModifier) {
    return pipeData.filter((eachItem) => {
      return eachItem['company'].name.toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}
