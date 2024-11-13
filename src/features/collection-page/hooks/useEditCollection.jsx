import axios from 'axios'
import { useState } from 'react'
import { BASE_URL_PROMPT_API } from '../../../constant/BASE_URL.js'
import { updateCollection } from '../api/api-collectons.js'

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

    const confirmation = window.confirm("Are you sure you want to update this data?");
    if (!confirmation) {
      return;
    }
    
    setLoadingUpdate(true);
    try {
      await updateCollection(id, data);
    } catch (error) {
      console.error("Error updating data:", error);
    } finally {
      setLoadingUpdate(false);
    }
  }  

  return { title, isLoadingUpdate, setTitle, setTools, setProcessSteps, setNotes, handleEditTitle, handleEditTools, handleEditProcessSteps, handleEditNotes, handleSaveEdit }
}
