import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { TOKEN } from "src/environment";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  private userInfo = "";
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient,private router: Router) {
  }

  getToken() {
    return TOKEN;
  }

  // authentication status
  getIsAuth() {
    if(localStorage.getItem('token') == null)
      return false;
    return true;
  }

  getUserInfo() {
    return this.userInfo;
  }

  getUserEmail() {
    return localStorage.getItem("userEmail");
  }

  getAuthStatus() {
    return this.authStatusListener.asObservable();
  }

  
  loginUser(loginForm: NgForm) {
    this.http.get<any>("http://localhost:3000/registerUsers")
    .subscribe({
      next: (res) => {
        // checking whether user data exist in db
        const user = res.find((data: any) => {
          return data.email === loginForm.value.email && data.password === loginForm.value.password;
        });

        // if admin logs in
        if(loginForm.value.email == 'admin@eknowledge.com' && loginForm.value.password == 'admin@1234') {
          localStorage.setItem("token",TOKEN);
          this.authStatusListener.next(true);
          loginForm.reset();
          this.router.navigate(['admin']);
        }
        else if(user) {
          // if user logs in 
          localStorage.setItem("token",TOKEN);
          localStorage.setItem("userName",JSON.stringify(user.fname));
          localStorage.setItem("userEmail",JSON.stringify(user.email));
          this.userInfo = JSON.stringify(user.email);
          this.authStatusListener.next(true);
          alert("Login Successful!!");
          loginForm.reset();
          this.router.navigate(['user']);
        }
        else {
          alert("Enter correct login details!!!");
        }
      },
      error: (err) => {
        alert("Something went wrong!!");
      }
    })
  }

  registerUser(registerForm: NgForm) {
    this.http.post<any>("http://localhost:3000/registerUsers",registerForm.value)
    .subscribe({
      next: (res) => { 
        alert("Successfully Registered!!");
        registerForm.reset();
        this.router.navigate(['login']);
      },
      error: (res) => {
        alert("Something went wrong, Please register again!!");
      }
    });
  }

  fetchUser(userRegistered: any[]) {
    this.http.get<any>("http://localhost:3000/registerUsers")
    .subscribe(res => {
      res.forEach((element:any) => {
        userRegistered.push({"name" : element.fname,"email" : element.email});
      });
    })
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this.authStatusListener.next(false);
    this.router.navigate(['/home']);
  }
}