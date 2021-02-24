class NotesController < ApplicationController
  def index
    # define instance variable
   notes = Note.all

   #ssr (serverside render)
   render component: "Notes", props: {notes: notes}
  end

  #GET /things/:id
  def show
    note = Note.find(params[:id])
    render component: "Note", props: {note: note}
  end

  def new
    # need to return a form
    render component: "NoteNew"
  end

  def create 
    title = params[:note][:title]
    author = params[:note][:author]
    body = params[:note][:body]

    Note.create(title: title, author: author, body: body)
    # if note.save
    #  redirect_to notes_path
    # else
    #   render component: "NoteNew"
    # end
    redirect_to notes_path
  end

  #edit a note, GET notes/:id/edit
  def edit
    note = Note.find(params[:id])
    render component: "NoteEdit", props: {note: note}
  end

  def update
    note = Note.find(params[:id])
    if note.update(title: params[:note][:title], author: params[:note][:author], body: params[:note][:body])
      redirect_to notes_path
    else 
      render component: "NoteEdit", props: {note: note}
    end 

  end

  def destroy
    # render component: "NoteDelete"
    note = Note.find(params[:id])
    note.destroy

    redirect_to notes_path
  end

end