import { Component } from "@angular/core";

const input = document.querySelector(".form-control")

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html'
})

export class InputComponent {
    userName = ''
    inputValue = ''
    isAvailable = false
    
    inputEvent(event){
        this.userName = event.target.value
        if (event){
            this.isAvailable = true
        } 
        
    }

    clearInput(){
        if (this.userName) {
            this.userName = ''
            this.isAvailable = false
        }
    }
}

