import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  constructor() { }
  
  offset:any = 0;

  @Output() pageEvent  :  EventEmitter<string> = new EventEmitter<string>();
  

  ngOnInit() {
  }
  
 pageNext(){   
    
      this.offset +=  10;
      this.pageEvent.emit(this.offset);            
    }
  
 pagePrev(){
      this.offset -=  10;
      this.pageEvent.emit(this.offset);  
 } 
}
