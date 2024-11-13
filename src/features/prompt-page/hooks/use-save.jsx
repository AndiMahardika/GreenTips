import { useEffect } from "react";
import { useState } from "react";
import { saveToCollection } from "../api/api-tips.jsx";
import useUser from "../../../store/userStore.js";

export default function useSave(resultTips) {
  const { user } = useUser()

  const [title, setTitle] = useState("");
  const [tools, setTools] = useState("");
  const [processSteps, setProcessSteps] = useState("");
  const [notes, setNotes] = useState("");
  const [loadingSave, setLoadingSave] = useState(false);

  useEffect(() => {
    if (resultTips) {
      setTitle(resultTips.title || "");
      setTools(resultTips.tools || "");
      setProcessSteps(resultTips.ProcessStep || "");
      setNotes(resultTips.notes || "");
    }
  }, [resultTips]);

  function handleSaveToCollection(event) {
    event.preventDefault();

    const data = {
      title,
      tools,
      processSteps,
      notes,
      email: user.email
    };

    saveToCollection(data, setLoadingSave);
  }

  return {title, tools, processSteps, notes, loadingSave, setTitle, setTools, setProcessSteps, setNotes,handleSaveToCollection};
}
