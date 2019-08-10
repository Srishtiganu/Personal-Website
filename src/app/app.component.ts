import { Component, OnInit, VERSION, ViewChild, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// import {
//   MatDialog,
//   MatDialogConfig
// } from "@angular/material";
// export interface DialogData {
//   animal: string;
//   name: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myweb';

  scrollToElement($element): void {
      console.log($element);
      $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }


  // constructor(private dialog: MatDialog) {}
  //
  // openDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   this.dialog.open(DialogBodyComponent, dialogConfig);
  // }
}
export class DemoComponent implements OnInit {
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
// export class DialogOverviewExample {
//
//   animal: string;
//   name: string;
//
//   constructor(public dialog: MatDialog) {}
//
//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }
//
// }

// @Component({
//   selector: 'app.componentdialog',
//   templateUrl: 'app.componentdialog.html',
// })
// export class DialogOverviewExampleDialog {
//
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//
// }
