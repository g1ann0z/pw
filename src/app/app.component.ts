import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length = 0;
  includeSymbols = false;
  includeNumbers = false;
  includeLetters = false;
  password = '';
  lenght ='';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
  

  onChangeIncludeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
 
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuwyz';
    const symbols = '!@#$%&*()';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;


  }

}
