import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteAddComponent } from './components/note-add/note-add.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

const routes: Routes = [
  {
    path: '', component: NotesListComponent
  },
  {
    path: 'add', component: NoteAddComponent
  },
  {
    path: 'edit/:id', component: NoteEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
