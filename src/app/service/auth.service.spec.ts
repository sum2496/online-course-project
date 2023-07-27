import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

describe('Service : Auth',() => {
  let service: AuthService;
  let http: HttpClient;
  let router: Router;

  beforeEach(() => {
    service = new AuthService(http,router);
  })

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });


  it('should return true from getisAuth() when there is a token',() => {
    localStorage.setItem('token',"4r79307r");
    expect(service.getIsAuth()).toBeTruthy();
  });

  it('should return false from getIsAuth() when there is not a token',() => {
    expect(service.getIsAuth()).toBeFalsy();
  });

});