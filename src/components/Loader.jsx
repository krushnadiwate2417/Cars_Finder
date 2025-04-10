

const Loader = ({ text }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white p-6 rounded-2xl shadow-2xl w-80 flex flex-col items-center space-y-4 animate-fade-in">
        <h1 className="text-lg font-semibold tracking-wide">{text || "Loading..."}</h1>
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
