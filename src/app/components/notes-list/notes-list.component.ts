import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from './../../services/note.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(
    private _NoteService: NoteService,
    private _NgbModal: NgbModal,
    private _ToastrService: ToastrService
  ) { }

  allNotes: any;
  ngOnInit(): void {
    this.getAll() // call one time in the component initialization
  }
  // Get All Posts
  getAll(): any {
    this._NoteService.getAll().subscribe(res => {
      this.allNotes = res;
      this.allNotes = this.allNotes.data;
    }, err => {
      alert(err);
    });
  }
  // Delete Note
  deleteItem(model: any, id: any): any {
    this._NgbModal.open(model).result.then(result => {
      this._NoteService.deleteNote(id).subscribe(res => {
        this._ToastrService.success("Deleted Successfully", "Succes", { timeOut: 1500, closeButton: true, progressBar: true });
        this.getAll(); // To re-render Page
      }, err => {
        this._ToastrService.error(err.statusText, "Error");
      });
    }, err => {
      console.log(err);
    })
  }

}
