 const Testimonials = () => {
    return (
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-12 max-w-6xl mx-auto">
          <div className="p-8 shadow-lg rounded-2xl bg-white max-w-sm text-gray-700">
            <p className="italic">“This product changed our business!”</p>
            <h3 className="mt-4 font-bold">- Client Name</h3>
          </div>
          <div className="p-8 shadow-lg rounded-2xl bg-white max-w-sm text-gray-700">
            <p className="italic">“An amazing experience overall.”</p>
            <h3 className="mt-4 font-bold">- Client Name</h3>
          </div>
          <div className="p-8 shadow-lg rounded-2xl bg-white max-w-sm text-gray-700">
            <p className="italic">“Highly recommended for professionals.”</p>
            <h3 className="mt-4 font-bold">- Client Name</h3>
          </div>
        </div>
      </section>
    );
  };

  export default Testimonials;