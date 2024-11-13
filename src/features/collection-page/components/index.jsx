import Layout from "../../prompt-page/components/layout.jsx";
import CollectionCard from "./collection.card.jsx";
import { useEffect } from "react";
import useDeleteCollection from "../hooks/useDeleteCollection.jsx";
import useGetCollection from "../hooks/useGetCollection.jsx";

export default function CollectionPage() {
  const { collections, isLoading, error, getCollections } = useGetCollection();
  const { handleDelete, isLoadingDelete } = useDeleteCollection(getCollections);

  useEffect(() => {
    getCollections();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <main className="p-0 md:p-3 h-screen overflow-scroll space-y-4 mdspace-y-2">
      {isLoading ? (
          <p className="text-center text-white text-4xl font-bold">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-2xl font-bold">{error}</p>
        ) : collections.length > 0 ? (
          collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              id={collection.id}
              title={collection.title}
              tools={collection.tools}
              processSteps={collection.processSteps}
              notes={collection.notes}
              onDelete={handleDelete}
              isLoadingDelete={isLoadingDelete}
            />
          ))
        ) : (
          <p className="text-center text-white text-4xl font-bold">No collections found.</p>
      )}
      </main>
    </Layout>
  )
}