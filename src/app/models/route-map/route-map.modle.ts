/**
 * Created by Galois Zhou on 20/12/2017 15:25.
 */

import {EnvironmentConstant} from '../../../environments/environment';

export class RouteJson {
  method: string;
  url: string;

  constructor(method, apiUrl, url: string) {
    this.method = method;
    this.url = apiUrl + url;
  }
}

export class RouteMap {
  static METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
  };
  private static API_URL_V1 = EnvironmentConstant.API_URL_V1;
  static V1 = {
    COMMON: {
      TOKEN: new RouteJson(RouteMap.METHODS.GET, RouteMap.API_URL_V1, 'token'),
    },
  };
}
