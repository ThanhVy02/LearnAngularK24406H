import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hsa: number = 5;
  public hsb: number = 7;
  public result: string = 'kết quả ở đây';
  giaiPtb1(a: string, b:string):void{
    this.hsa = parseFloat(a)
    this.hsb = parseFloat(b)
    if(this.hsa ==0 && this.hsb ==0){
      this.result = "Vô số nghiệm"
    } else if (this.hsa === 0 && this.hsb !== 0) {
  this.result = "<font color='red'>Phương trình vô nghiệm</font>";
} else{
      let x = -this.hsb / this.hsa;
      this.result = `Nghiệm x = ${x}`; 
    }
  }
}
