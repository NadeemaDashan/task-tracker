import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() text="";
  @Input() color="";
  @Output() btnClick=new EventEmitter();


  constructor(){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    onClick() {
    this.btnClick.emit();
  }

}
