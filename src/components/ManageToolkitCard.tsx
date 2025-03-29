const ManageToolkit = () => {
  return (
    <section className="py-16 px-6 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-40 bg-red-100 rounded-bl-full opacity-50 -z-10"></div>

      {/* Title */}
      <div className="text-left max-w-3xl mx-auto">
        <h3 className="text-red-500 font-bold text-lg">Manage</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">
          A business toolkit.
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          You and your construction crew should be working—not searching for.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="bg-gray-200 h-40 flex items-center justify-center rounded-md mb-4">
                <img
                  src="/placeholder-image.png"
                  alt="Item"
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-md font-bold text-gray-900">Item</h3>
              <p className="text-gray-700 text-sm mt-1">
                We'll add content here, we'll keep it short and simple. And
                smile :)
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ManageToolkit;
