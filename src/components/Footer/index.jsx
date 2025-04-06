import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 relative overflow-hidden">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.02),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 pt-20 pb-0 relative">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Logo & Intro */}
          <div className="md:col-span-2 space-y-8">
            <a
              href="#"
              className="text-3xl font-['Pacifico'] text-primary inline-block relative group"
            >
              logo
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
            <p className="text-base text-white leading-relaxed max-w-md">
              Transforming inventory management with intelligent solutions.
              Experience the future of business operations with our AI-powered
              platform.
            </p>

           
          </div>

          {/* Footer columns */}
          {[
            {
              title: "Product",
              links: ["Features", "Solutions", "Pricing", "Enterprise"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Support",
              links: ["Help Center", "Documentation", "API Status", "Community"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-white/20 group-hover:translate-x-1 transition-transform"></i>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
           
        {/* Bottom section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-wrap items-center gap-6">
              {["©2025 Sortly Inc. All rights reserved."].map(
                (item) => (
                  <React.Fragment key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors relative group"
                    >
                      {item}
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                    <span className="w-1.5 h-1.5 bg-white/10 rounded-full"></span>
                  </React.Fragment>
                )
              )}
            </div>

            <div className="flex items-center justify-start md:justify-end gap-6">
              {/* Language Selector */}
              {/* Social Links */}
           <div className="flex justify-end items-center gap-6 mt-20 mb-20">
              {["twitter-x", "linkedin", "facebook", "instagram"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-white/10 flex items-center justify-center group transition-all duration-300 hover:-translate-y-1"
                >
                  <i
                    className={`ri-${icon}-line ri-sm text-primary group-hover:text-white transition-colors`}
                  ></i>
                </a>
              ))}
            </div>
            </div>
          </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </footer>
  );
};

export default Footer;
