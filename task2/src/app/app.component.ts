import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  answer: any;

  derivativeForm !: FormGroup

  num1!: number;
  num2!: number;
  ngOnInit(): void {
    this.derivativeForm = new FormGroup({
      'num1': new FormControl(null, Validators.required),
      'num2': new FormControl(null, Validators.required),
    })
    // this.printSinWave(2, 3)
  }
  derivative() {
    var answer: number = this.derivativeForm.value.num1;
    answer = this.derivativeForm.value.num1 * Math.pow(this.derivativeForm.value.num2, this.derivativeForm.value.num1 - 1);
    console.log(this.derivativeForm.value);
    this.answer = answer
    // return answer;
  }

  printSinWave(wave_height: number, wave_length: number) {
    // inner space and outer space.
    let is = 1, os = 2;

    let inc = 1;
    let jump = (wave_height * 3) -
      (wave_height + 1);
    let ch = 'A'.charCodeAt(0) + wave_height - 1;

    // for loop for height of wave
    for (let i = 1; i <= wave_height; i++) {

      // for loop for wave length
      for (let j = 1; j <= wave_length; j++) {

        // intermediate spaces
        for (let k = 1; k <= os; k++)
          document.write("  ");
        document.write(String.fromCharCode(ch));

        for (let k = 1; k <= is; k++)
          document.write("  ");

        ch += inc;

        if (ch > 'Z'.charCodeAt(0))
          ch = ch - 26;
        document.write(String.fromCharCode(ch));

        for (let k = 1; k <= os; k++)
          document.write("  ");

        document.write("  ");
        ch += jump;
        if (ch > 'Z'.charCodeAt(0))
          ch = ch - 26;
      }

      // set value of os to 1 if i+1 is not
      // equal to wave height or 0 otherwise
      os = (i + 1 != wave_height) ? 1 : 0;

      // set value of is to 3 if i+1 is not
      // equal to wave height or 5 otherwise
      is = (i + 1 != wave_height) ? 3 : 5;

      ch = 'A'.charCodeAt(0) + wave_height - i - 1;
      inc = inc + 2;
      jump -= 2;

      document.write("<br>");
    }
  }
}
