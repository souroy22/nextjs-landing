import React from "react";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background radial gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,43,62,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Transparent Pricing for Every Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your business needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {/* Blurred background effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl blur-xl pointer-events-none"></div>

          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 relative z-10">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-4">
              $49
              <span className="text-lg text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>Up to 1,000 items</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>2 user accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>Basic reporting</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg whitespace-nowrap">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-primary/5 p-8 rounded-xl border-2 border-primary relative z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <div className="text-3xl font-bold mb-4">
              $99
              <span className="text-lg text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>Up to 10,000 items</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>5 user accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>API access</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-primary text-white hover:bg-primary/90 rounded-lg whitespace-nowrap">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 relative z-10">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">Custom</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>Unlimited items</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>Custom integration</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500"></i>
                <span>24/7 support</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg whitespace-nowrap">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
