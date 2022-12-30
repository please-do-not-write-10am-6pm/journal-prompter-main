import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { savePrompt } from "../actions/prompts";
import styles from "../styles/Addprompt.module.scss"



const initialForm = {
  id: '',
  prompt: '',
  category: '',
}

function AddPrompt () {

  //create local state to control form input
  const [newPrompt, setNewPrompt] = useState(initialForm) 

  const dispatch = useDispatch()
  // const prompts = useSelector(state => state.prompts)
  // console.log(prompts)

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(savePrompt(newPrompt))
    // clear all fields
    setNewPrompt(initialForm)
  }

  function handleChange(evt) {
    // this comes from name="fieldName" in the input
    console.log(evt.target.name)
    // this comes from what the user typed
    console.log(evt.target.value)

    setNewPrompt({
      // copy the rest of the fields
      ...newPrompt,
      // overwrite just the one getting input
      [evt.target.name]: evt.target.value,
    })
  }

  return ( 
    <form className={styles.Addprompt} onSubmit={handleSubmit}>
      <h2>Add a new journal prompt</h2>
      <div>
        <label htmlFor="promptInput">Journal prompt</label>
        <input id="promptInput" type="text" name="prompt" value={newPrompt.prompt} onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input id="category" type="text" name="category" value={newPrompt.category} onChange={handleChange}></input>
      </div>
      <input type='submit' value='Create' />
    </form>
   );
}

export default AddPrompt ;