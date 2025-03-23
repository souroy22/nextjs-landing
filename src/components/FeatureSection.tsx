 const FeatureSection = () => {
    return (
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto">
          <div className="p-8 shadow-lg rounded-2xl bg-white text-center">
            <h3 className="text-2xl font-semibold">Feature 1</h3>
            <p className="text-gray-600 mt-4">Detailed description of feature 1.</p>
          </div>
          <div className="p-8 shadow-lg rounded-2xl bg-white text-center">
            <h3 className="text-2xl font-semibold">Feature 2</h3>
            <p className="text-gray-600 mt-4">Detailed description of feature 2.</p>
          </div>
          <div className="p-8 shadow-lg rounded-2xl bg-white text-center">
            <h3 className="text-2xl font-semibold">Feature 3</h3>
            <p className="text-gray-600 mt-4">Detailed description of feature 3.</p>
          </div>
        </div>
      </section>
    );
  };

  export default FeatureSection;