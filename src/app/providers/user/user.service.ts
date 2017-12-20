import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {RouteMap} from '../../models/route-map/route-map.modle';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) {

  }


  // TODO delete
  test(): Promise<any> {
    return this.httpService.request(RouteMap.V1.COMMON.TOKEN);
  }


}
