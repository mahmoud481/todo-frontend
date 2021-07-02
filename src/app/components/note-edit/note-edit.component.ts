import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  submitted = false;
  noteId;
  loaded = false;
  noteData;
  editForm: FormGroup;
  errArr:any;
  constructor(
    private _NoteService: NoteService,
    private fb: FormBuilder,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _ToastrService: ToastrService,
  ) { }
  ngOnInit(): void {
    this.buildEditForm();
    this._ActivatedRoute.params.subscribe(params => {
      this.noteId = params.id;
    })
    this.getnoteDetails();
  }

  getnoteDetails() {
    this._NoteService.getNoteById(this.noteId).subscribe(res => {
      this.noteData = res;
      this.noteData = this.noteData.data;
      
      this.loaded = true;   // to render form after recieving data
    });
  }

  onSubmit(): void {
    // Stop if Form is invalid
    this.submitted = true;
    if (this.editForm.invalid) {
      console.log(this.submitted);
      return;
    }
    this._NoteService.updateNote(this.editForm.value, this.noteId).subscribe(res => {
      this._ToastrService.success("note Updated Successfully", "Success", { timeOut: 2000, closeButton: true, progressBar: true });
      this._Router.navigate(["/"])
    }, err => {
      this.errArr = Object.keys(err.error.errors).map(e=>{
        return err.error.errors[e][0];
      });
      this._ToastrService.error(this.errArr.map(err =>err), "Error");
    })
  }
  // getter to return the controllers of the Form
  get f() { return this.editForm.controls; }
  buildEditForm() {
    this.editForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    })
  }

}
