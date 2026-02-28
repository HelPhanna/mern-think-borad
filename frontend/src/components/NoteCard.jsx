import toast from "react-hot-toast";
import { PenSquare, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

import formatDate from "../lib/utils";
import api from "../lib/axios";

export const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // Prevent navigation to note detail page when delete button is clicked
    e.stopPropagation(); // Stop the click event from bubbling up to the Link component

    // Implement delete functionality here
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // Update the notes state to remove the deleted note
      toast.success("Note deleted successfully!");

      // Give toast ~1.5–2 seconds to be visible
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1600);
      // Reload the page to reflect the deletion
    } catch (error) {
      console.log("Error deleting note:", error);
      toast.error("Failed to delete note. Please try again.");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        <div className="card-action flex justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

          {/* Action buttons */}
          <div className="flex items-center gap-1">
            {/* update icon */}
            <PenSquare className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              {/* Delete button */}
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
