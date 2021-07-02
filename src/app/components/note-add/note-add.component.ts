import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean;

  constructor(private _NoteService: NoteService,
    private _ToastrService: ToastrService,
    private fb: FormBuilder,
    private _Router: Router) { }

  ngOnInit(): void {
    this.buildAddForm();
  }
  // On Submit
  onSubmit() {
    // Stop if Form is invalid
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this._NoteService.addNote(this.addForm.value).subscribe(res => {
      this._ToastrService.success("Note Added Successfully", "Success", { timeOut: 2000, closeButton: true, progressBar: true });
      this._Router.navigate(["/"]);
    }, err => {
      this._ToastrService.error("Can't Add Note", "Error");
    })
  }

  // getter to return the controllers of the Form
  get f() { return this.addForm.controls; }
  //Add New Note
  buildAddForm() {
    this.addForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    })
  }
}
