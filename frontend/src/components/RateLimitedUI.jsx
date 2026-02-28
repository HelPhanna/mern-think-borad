import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-row items-center p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full md:mr-6 mr-10">
            <ZapIcon className="size-8 md:size-10 text-primary" />
          </div>

          <div className="flex-1 md:text-left">
            <h3 className="md:text-xl text-lg font-bold mb-2">
              Rate Limit Reached
            </h3>

            <p className="text-base content mb-1">
              You've made too many requests in a short period. Please wait a
              moment.
            </p>

            <p className="text-sm text-base-content/70">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
