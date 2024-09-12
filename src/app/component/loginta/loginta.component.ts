import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-loginta',
  templateUrl: './loginta.component.html',
  styleUrls: ['./loginta.component.css'],
  providers: [DataService]
})
export class LogintaComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('表單提交', this.loginForm.value);
      // 這裡寫驗證
    }
  }
}
