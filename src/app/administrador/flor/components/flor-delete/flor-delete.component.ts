import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-flor-delete',
  templateUrl: './flor-delete.component.html',
  styleUrls: ['./flor-delete.component.css'],
  imports: [MatButtonModule, MatDialogModule],
  standalone: true,
})

export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
export class FlorDeleteComponent {}


