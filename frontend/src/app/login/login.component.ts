import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '@app/services/login.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '@app/services/token-storage.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('alert_ref') alert_ref: any;

  form: any = {
    username: null,
    password: null
  };

  alert_message: string = '';
  isLoginFailed = false;
  errorMessage = '';
  role: string = '';
  constructor(private loginService: LoginService, 
    private tokenStorage: TokenStorageService, 
    private router: Router,
    private toast:NgToastService) { }

  ngOnInit() {
    if(window.sessionStorage.getItem('loggedIn')=='true'){
      if(this.tokenStorage.getUser().role=='admin'){
        this.router.navigate(['admin'])
      }
      else{
        this.router.navigate(['batches'])
      }
    }
  }

  close_alert() {
    this.alert_ref.nativeElement.style.display = 'none';
  }

  onSubmit(form: NgForm) {
    this.loginService.login(form.value.username, form.value.password)
    .subscribe({
      next: data=>{
        this.tokenStorage.saveUser(data);
        
        this.isLoginFailed = false;
        this.loginService.isLoggedIn = true;
        window.sessionStorage.setItem('loggedIn', 'true')
        this.toast.success({detail:"Success Message",summary:"Logged in Successfully",duration:3000});
        this.role = this.tokenStorage.getUser().role;
        if(this.role=='admin'){
          this.router.navigate(['admin'])
        }
        else{
          this.router.navigate(['batches'])
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toast.error({detail:"Error Message",summary:this.errorMessage,duration:3000})
        form.resetForm()
      }
    })
  }
}
