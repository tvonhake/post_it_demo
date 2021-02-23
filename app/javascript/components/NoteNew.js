import React from 'react'

const NoteNew = (props) =>{
  return(
    <div id="main">
      <h1>Create a New Note</h1>
      <a href='/notes'>Return to notes</a>
      <div class="noteForm">
        <form action="/notes" method='post'>
          <h2>Note title</h2>
          <input type="text" name='note[title]'placeholder="Title"/>

          <h2>Author</h2>
          <input type="text" name='note[author]'placeholder="Author"/>

          <h2>Body</h2>
          <textarea name='note[body]' placeholder="Write your note here" ></textarea>

          <button type='submit'>Add Note</button>
          <button type='reset'>Reset Form</button>

        </form>
      </div>
    </div>
  )
}

export default NoteNew

{/* <div class="container">
        <form action="action_page.php">
      
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="First name">
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Last name">
      
          <label for="cMethod">Preferred Contact Method</label>
          <select id="cMethod" name="Contact Method">
            <option value="" disabled selected>Choose one</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>

          <label for="lname">Contact Information</label>
          <input type="text" id="cInfo" name="contactinfo" placeholder="Phone Number/Email">
      
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write message here" style="height:130px"></textarea>
      
          <input type="button" value="Submit">

          <input type="reset" value="Reset">
      
        </form>
      </div> */}