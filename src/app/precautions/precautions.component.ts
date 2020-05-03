import { Component } from '@angular/core';

@Component({
    selector: 'app-precautions',
    templateUrl: './precautions.component.html',
    styleUrls:['./precautions.component.css']
  })
export class PrecautionsComponent{

    precautions:string[]=[];

    constructor()
    {
        this.initializePrecautions();
    }

    initializePrecautions()
    {
        this.precautions.push("1. Clean your hands often. Use soap and water, or an alcohol-based hand rub.");
        this.precautions.push("2. Maintain a safe distance from anyone who is coughing or sneezing.");
        this.precautions.push("3. Don’t touch your eyes, nose or mouth.");
        this.precautions.push("4. Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.");
        this.precautions.push("5. Stay home if you feel unwell.");
        this.precautions.push("6. If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.");
        this.precautions.push("7. Follow the directions of your local health authority.");
    }
}