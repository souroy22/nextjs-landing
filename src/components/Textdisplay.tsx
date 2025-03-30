import React from "react";

interface TextDisplayProps {
  title: string;
  subtitle: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-12">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-2xl">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-3xl leading-relaxed">
        {subtitle}
      </p>
    </section>
  );
};

export default TextDisplay;
