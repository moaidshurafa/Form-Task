const Loading = ({SKELETON_COUNT}) => {
  return Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
    <div
      key={idx}
      className="rounded-xl border border-blue-800 bg-blue-950 p-6 text-center shadow-lg animate-pulse"
    >
      <div className="h-6 bg-blue-700 rounded mb-4 mx-auto w-3/4"></div>
      <div className="h-4 bg-blue-700 rounded mb-2 mx-auto w-5/6"></div>
      <div className="h-4 bg-sky-700 rounded mx-auto w-1/2"></div>
    </div>
  ));
};
export default Loading
