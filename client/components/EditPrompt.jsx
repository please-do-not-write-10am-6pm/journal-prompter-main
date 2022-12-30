import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams, useNavigate} from 'react-router-dom'
import {editPrompt, fetchPrompt} from '../actions/prompts'

//TODO
//Default values are rendering on form
//Can you get the prompt selected for editing to render on the page instead?
//Need to make sure that the handlechange is being used to setInput - this might require the useEffect to set the input as defualt to prompt
//need to add the onSubmit which will dispatch the editPrompt action

function EditPrompt () {
  
  const prompt = useSelector(state => state.prompt)
  const [editPromptInput, setEditPromptInput] = useState({})
  const {id} = useParams() //gets the id number from the URL

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(id)
    dispatch(fetchPrompt(id))//gets the prompt data specific to the one selected to edit
    setEditPromptInput(prompt) //?I think this is beacause if not everything is edited you don't get blnk info
    console.log(prompt)
  }, [])


  function handleOnChange(e){
    console.log('target', e.target.name)
    console.log('val', e.target.value)
    setEditPromptInput({
      ...editPromptInput,
      [e.target.name]: e.target.value
    })
    console.log('edited prompt input', editPromptInput)
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(editPrompt(editPromptInput, id))
    //alert('Your update has been saved!')
    navigate(-1)
  }

  return ( 
    <>
    <form onSubmit={handleSubmit}>
      <h3>Edit prompt</h3>
      <label htmlFor="prompt"> Edit journal prompt:
        <textarea 
        id="prompt" 
        name="prompt" 
        type="text" 
        defaultValue={prompt.prompt}
        onChange={handleOnChange}>
        </textarea>
      </label>
      <label htmlFor="category"> Edit journal category:
        <input 
        id="category" 
        name="category" 
        type="text" 
        defaultValue={prompt.category}
        onChange={handleOnChange}>
        </input>
      </label>
      <button type="submit">Save changes</button>
    </form>
    </>
   );
}

export default EditPrompt ;