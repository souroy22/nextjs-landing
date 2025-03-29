const InventorySolutions = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Browse Sortly’s inventory management solutions
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        No matter what you need to track, Sortly has you covered.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-purple-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🔶</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                A business toolkit.
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                You and your construction crew should be working—not searching
                for inventory. Stay organized and efficient.
              </p>
              <button className="mt-4 px-4 py-2 bg-red-100 text-red-600 font-semibold rounded-md hover:bg-red-200 transition-all">
                See Solutions
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default InventorySolutions;
