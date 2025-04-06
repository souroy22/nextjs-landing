import React from "react";

const InventoryControl = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(225,43,62,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-white/80 text-lg">
                <i className="ri-sparkling-2-line animate-pulse" />
                <span>Think Different, Manage Better</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Transform Your{" "}
                <span className="relative">
                  Business
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
                </span>{" "}
                with Smart Inventory Control
              </h2>

              <div className="space-y-6 text-gray-600">
                {[
                  {
                    title: "Real-time Analytics",
                    text: "Get instant insights into your inventory performance",
                  },
                  {
                    title: "Smart Predictions",
                    text: "AI-powered forecasting for optimal stock levels",
                  },
                  {
                    title: "Seamless Integration",
                    text: "Works with your existing business tools",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <i className="ri-rocket-line ri-2x text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Join 12M+ Users
                  </h3>
                  <p className="text-gray-600">
                    Start your journey to better inventory management
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2">
                    <div className="relative w-12 h-24">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/20" />
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 border-t-2 border-r-2 border-white/40 rotate-45" />
                    </div>
                  </div>

                  <button className="w-full px-6 py-4 bg-primary text-white hover:bg-primary/90 rounded-full text-lg font-semibold group relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Join Now
                      <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-8 text-gray-500">
                  <div className="flex items-center gap-2">
                    <i className="ri-shield-check-line" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-24-hours-line" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryControl;
