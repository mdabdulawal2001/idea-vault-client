"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

import MyIdeaCard from "./MyIdeaCard";
import EditIdeaModal from "./EditIdeaModal";
import DeleteIdeaModal from "./DeleteIdeaModal";

const MyIdeaGrid = ({ ideas: initialIdeas = [], onDelete }) => {
  const [ideas, setIdeas] = useState(initialIdeas);

  const [selectedIdea, setSelectedIdea] = useState(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  // ==========================================
  // OPEN EDIT MODAL
  // ==========================================

  const handleEdit = (idea) => {
    setSelectedIdea(idea);
    setIsEditModalOpen(true);
  };



  // UPDATE IDEA IN UI


  const handleIdeaUpdated = (updatedIdea) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        String(idea._id) === String(updatedIdea._id)
          ? {
              ...idea,
              ...updatedIdea,
            }
          : idea,
      ),
    );
  };


    // DELETE MODAL HANDLERS
  const handleDeleteClick = (idea) => {
    setSelectedIdea(idea);
    setIsDeleteModalOpen(true);
  };


  const handleIdeaDeleted = (deletedId) => {
    setIdeas((prev) => prev.filter((item) => String(item._id) !== String(deletedId)));

    onDelete?.(deletedId);
  };

  return (
    <section className="mx-auto w-[90%] md:w-full">
      {/* ================= SECTION HEADER ================= */}

      <div className="mb-7 sm:mb-8">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <div className="my-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
            <Lightbulb className="w-14 h-14  text-blue-600 dark:text-blue-400" />
          </div>

          <div className="mt-3 sm:ml-3 sm:mt-0">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              My Ideas
            </h2>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Manage the startup ideas you have shared with the IdeaVault
              community.
            </p>
          </div>
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}

      {ideas.length === 0 ? (
        <div className="flex min-h-70 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
            <Lightbulb className="h-6 w-6" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white sm:text-lg">
            You haven't added any ideas yet
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
            Start by sharing your first startup idea with the IdeaVault
            community.
          </p>
        </div>
      ) : (
        /* ================= IDEA GRID ================= */

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <MyIdeaCard
              key={idea._id}
              idea={idea}
              index={index}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      {/* ================= EDIT MODAL ================= */}

      {selectedIdea && (
        <EditIdeaModal
          key={selectedIdea._id}
          idea={selectedIdea}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUpdated={handleIdeaUpdated}
        />
      )}

      {selectedIdea && (
        <DeleteIdeaModal
          key={`delete-${selectedIdea._id}`}
          idea={selectedIdea}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleted={handleIdeaDeleted}
        />
      )}
    </section>
  );
};

export default MyIdeaGrid;
