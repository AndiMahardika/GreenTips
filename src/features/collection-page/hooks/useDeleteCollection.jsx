import { useState } from 'react';
import { deleteCollection } from '../api/api-collectons.js';

export default function useDeleteCollection(getCollections) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  // const { getCollections } = useCollection();

  async function handleDelete(id, title) {
    const confirmation = confirm(`Are you sure you want to delete "${title}" ?`);
    if (!confirmation) return;
    setIsLoadingDelete(true);
    try {
      await deleteCollection(id, title);
      getCollections();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return { handleDelete, isLoadingDelete };
}
