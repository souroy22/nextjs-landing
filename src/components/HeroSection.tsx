const HeroSection = () => {
  return (
    <section className="relative text-center py-16 px-4 sm:px-6 lg:px-12 bg-white">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
        The Best Construction Inventory Software
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-2">
        You and your construction crew should be working—not searching for
        supplies or hunting down missing materials. With Sortly’s construction
        inventory software.
      </p>

      {/* Video Section */}
      <div className="mt-12 flex justify-center items-center relative w-full">
        {/* Background Curve */}
        <div className="absolute -bottom-10 left-0 w-full h-52 sm:h-64 md:h-80 bg-red-100 rounded-t-full"></div>

        {/* Responsive YouTube Video */}
        <div className="relative w-full max-w-3xl aspect-video shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
