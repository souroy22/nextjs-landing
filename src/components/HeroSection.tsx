const HeroSection = () => {
  return (
    <section className="relative text-center py-16 px-6 bg-white">
      <h1 className="text-3xl md:text-5xl font-bold text-black">The Best Construction Inventory Software</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        You and your construction crew should be working—not searching for supplies or hunting down missing
        materials. With Sortly’s construction inventory software.
      </p>
      
      <div className="mt-8 flex justify-center relative">
        <div className="absolute -bottom-10 left-0 w-full h-60 md:h-80 bg-red-100 rounded-t-full"></div>
        <iframe
          className="relative w-full max-w-2xl h-64 md:h-96 shadow-lg rounded-lg"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default HeroSection;
