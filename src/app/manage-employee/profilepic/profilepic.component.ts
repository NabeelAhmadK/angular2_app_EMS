import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {

  constructor() { }
  
  filePath:string;
  profilepicture:any = "./assets/images/photo.png";
  @Input() profile:string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }


  onFileChange(fileInput: any){
    this.profilepicture = fileInput.target.files[0];
    
    let reader = new FileReader();

    reader.onload = (e: any) => {
        this.profilepicture = e.target.result;
        this.notify.emit(this.profilepicture);
    }
    this.filePath = fileInput.value;
    console.log(this.filePath);

    reader.readAsDataURL(fileInput.target.files[0]);
   // console.log(fileInput.target.files[0]);
    
}

}
