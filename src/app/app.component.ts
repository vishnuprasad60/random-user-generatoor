import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any;

  constructor(private userService: UserService, private toastr: ToastrService) {
    
  }
  ngOnInit() {
    this.nextUser();
  }
  nextUser() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
        console.log(user);
      },
      (err: any) => {
        this.toastr.error(err.status, "Error")
      }
    )
  }
}
