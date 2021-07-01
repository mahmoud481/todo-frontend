import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NoteAddComponent } from './components/note-add/note-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteEditComponent,
    NoteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
