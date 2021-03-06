import {Api} from './Api';
import {Injectable} from '@angular/core';

export class VideoService {
  search(searchString: string) {
    return Api.fetch(searchString)
  }
}
