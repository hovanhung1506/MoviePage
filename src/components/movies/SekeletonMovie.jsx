const SekeletonMovie = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col h-full p-3 rounded-lg movie-card bg-slate-800 sekeleton"
          >
            <div className="w-full h-[200px] rounded-lg mb-5 is-loading"></div>
            <div className="flex flex-col flex-1">
              <div className="mb-3 text-xl font-bold rounded-lg h-14 title-movie is-loading"></div>
              <div className="flex items-center justify-between mb-10 text-sm">
                <span className="w-full rounded-lg h-7 is-loading"></span>
              </div>
              <button className="w-full h-12 mt-auto font-semibold capitalize rounded-lg is-loading"></button>
            </div>
          </div>
        ))}
    </div>
  )
}
export default SekeletonMovie
