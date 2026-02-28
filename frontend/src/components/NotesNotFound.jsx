import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 rounded-full bg-primary/10 p-6">
        <NotebookIcon className="h-16 w-16 text-primary" />
      </div>

      <h3 className="mb-4 text-3xl font-bold tracking-tight">No notes yet</h3>

      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        Ready to organize your thoughts? Create your first note and start your
        journey of capturing ideas.
      </p>

      <Link
        to="/create"
        className="
          inline-flex items-center justify-center 
          rounded-lg bg-primary px-6 py-3 
          text-base font-medium text-primary-foreground 
          shadow-sm transition-colors 
          hover:bg-primary/90 focus:outline-none focus:ring-2 
          focus:ring-primary focus:ring-offset-2
        "
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
