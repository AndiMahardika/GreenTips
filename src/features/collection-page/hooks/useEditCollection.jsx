import axios from 'axios'
import { useState } from 'react'
import { BASE_URL_PROMPT_API } from '../../../constant/BASE_URL.js'

export default function useEditCollection() {
  const [title, setTitle] = useState("")
  const [tools, setTools] = useState("")
  const [processSteps, setProcessSteps] = useState("")
  const [notes, setNotes] = useState("")
  const [isLoadingUpdate, setLoadingUpdate] = useState(false)

  function handleEditTitle(event) {
    setTitle(event.target.value);
  }

  function handleEditTools(event) {
    const stringToArray = event.target.value.split(",").map(item => item.trim());
    setTools(stringToArray)
  }

  function handleEditProcessSteps(event) {
    const stringToArray = event.target.value.split(",").map(item => item.trim());
    setProcessSteps(stringToArray)
  }

  function handleEditNotes(event) {
    const stringToArray = event.target.value.split(",").map(item => item.trim());
    setNotes(stringToArray)
  }

  async function handleSaveEdit(event, id) {
    event.preventDefault();

    const data = {
      title,
      tools,
      processSteps,
      notes,
    };
    
    setLoadingUpdate(true);
    try {
      const confirmation = window.confirm("Are you sure you want to update this data?");
      if (!confirmation) {
        return;
      }

      const response = await axios.put(`${BASE_URL_PROMPT_API}/${id}`, data);
      if (response.status === 200) {
        alert("Data successfully updated.");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    } finally {
      setLoadingUpdate(false);
    }
  }  

  return { title, isLoadingUpdate, setTitle, setTools, setProcessSteps, setNotes, handleEditTitle, handleEditTools, handleEditProcessSteps, handleEditNotes, handleSaveEdit }
}
