class NotesController < ApplicationController
  def index
    # define instance variable
   @notes = Note.all

   #ssr (serverside render)
   render component: "Notes", props: {notes: @notes}
  end

  #
  def show
    @note = Note.find(params[:id])

    render component: "Notes", props: {notes: @notes}
  end

  def new
    # need to return a form
    render component: "NoteNew"
  end

  def create 
    puts "here"
    puts params
    title = params[:note][:title]
    author = params[:note][:author]
    body = params[:note][:body]

    Note.create(title: title, author: author, body: body)
    redirect_to notes_path
  end

end