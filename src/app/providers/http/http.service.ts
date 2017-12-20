/**
 * Created by Galois Zhou on 20/12/2017 15:15.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {RouteJson, RouteMap} from '../../models/route-map/route-map.modle';

@Injectable()
export class HttpService {

  private isLoading: boolean = false;

  constructor(private http: HttpClient) {
  }

  openLoading() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    // TODO add loading...

    setTimeout(() => {
      this.closeLoading();
    }, 30000);
  }

  closeLoading() {
    if (this.isLoading) {
      this.isLoading = false;
      // TODO close loading...
    }
  }

  request(routeJson: RouteJson, params: any = {}, isLoading: boolean = false): Promise<any> {
    let method = routeJson.method;
    let requestUrl = routeJson.url;
    let observable: Observable<Object>;

    if (isLoading) {
      this.openLoading();
    }

    switch (method) {
      case RouteMap.METHODS.GET:
        observable = this.http.get(requestUrl, {params: params});
        break;
      case RouteMap.METHODS.POST:
        observable = this.http.post(requestUrl, JSON.stringify(params));
        break;
      case RouteMap.METHODS.PUT:
        observable = this.http.put(requestUrl, JSON.stringify(params));
        break;
      case RouteMap.METHODS.DELETE:
        observable = this.http.request(RouteMap.METHODS.DELETE, requestUrl, {body: params});
        break;
      // default:
      //   ;
    }

    return new Promise((resolve, reject) => {
      if (observable) {
        observable.subscribe(
          data => {
            console.log('----------------1-------------data');
            resolve(data);
            if (isLoading) {
              this.closeLoading();
            }
          },
          error => {
            console.log('-----------------2------------error');
            reject(error);

            if (isLoading) {
              this.closeLoading();
            }
            // 如果是401
            // this.gotoLogin();
          });
      } else {
        reject('未知请求方法');
      }
    });

  }

  gotoLogin() {
  }
}
