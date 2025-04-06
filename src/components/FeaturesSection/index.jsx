import React from 'react';

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden perspective-1000"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(225,43,62,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjI1LDQzLDYyLDAuMSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMTAgMTAiLz48L3N2Zz4=')] opacity-20 animate-[move_20s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 transform-gpu hover:scale-105 transition-transform duration-500">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6 animate-bounce">
            <i className="ri-flashlight-line"></i>
            <span>NEXT-GEN FEATURES</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-500 bg-clip-text text-transparent">
            One Platform, Endless Possibilities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Experience the future of inventory management with our AI-powered system. Transform your operations with cutting-edge features designed for the modern enterprise.
          </p>
        </div>

        {/* First Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Visual */}
          <div className="relative group perspective-1000">
            <div className="transform-gpu group-hover:rotate-y-12 transition-transform duration-1000">
              <img
                src="https://readdy.ai/api/search-image?query=futuristic holographic inventory management dashboard with 3D visualization, floating UI elements, and glowing data points in a clean modern interface&width=800&height=600&orientation=landscape&flag=0e8a6f6fe34b181ba5bd5a2ba3f4043e"
                alt="Inventory Dashboard"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl transform-gpu hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 animate-pulse"></div>
                  <i className="ri-stack-line text-primary ri-xl relative z-10"></i>
                </div>
                <div>
                  <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Total Items</div>
                  <div className="text-2xl font-bold text-primary">25,430</div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl transform-gpu hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <i className="ri-radar-line text-primary animate-spin-slow"></i>
                <span className="text-sm font-semibold">Live Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Description */}
          <div className="space-y-8 transform-gpu hover:translate-x-4 transition-transform duration-500">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Complete Inventory Control</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience next-level inventory management with our AI-powered solution that learns and adapts to your unique business requirements in real-time.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <FeatureCard
                    icon="ri-store-3-line"
                    title="Smart Stock Management"
                    description="AI-powered tracking across multiple locations with predictive analytics"
                  />
                  {/* Card 2 */}
                  <FeatureCard
                    icon="ri-qr-scan-line"
                    title="Advanced Scanning"
                    description="Multi-format code scanning with AR overlay and instant recognition"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Description */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-2xl font-bold mb-4">Streamlined Workflows</h3>
              <p className="text-gray-600 mb-6">
                Automate your business processes with integrated workflows for orders, invoicing, and delivery management.
              </p>
              <div className="space-y-4">
                <WorkflowItem icon="ri-file-list-3-line" title="Purchase Orders" subtitle="Create and track orders" />
                <WorkflowItem icon="ri-bill-line" title="Invoicing" subtitle="Automated billing system" />
                <WorkflowItem icon="ri-truck-line" title="Delivery Challans" subtitle="Streamlined shipping process" />
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 lg:order-2">
            <img
              src="https://readdy.ai/api/search-image?query=modern business workflow diagram showing purchase order process, invoicing, and delivery management with clean professional interface design&width=800&height=600&orientation=landscape&flag=39157fa107788429af2ccfdfc07f8c1a"
              alt="Workflow"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="ri-flow-chart text-primary ri-xl"></i>
                </div>
                <div>
                  <div className="font-semibold">Active Workflows</div>
                  <div className="text-2xl font-bold text-primary">1,240</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl blur-2xl"></div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-20 h-20 opacity-10">
              <i className="ri-database-2-line ri-3x text-primary"></i>
            </div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 opacity-10">
              <i className="ri-cloud-line ri-3x text-secondary"></i>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=modern business analytics dashboard showing financial reports, ledger entries, and user management interface with professional dark theme design&width=800&height=600&orientation=landscape&flag=cb43ee9851dd0fd09a44d1838620e905"
              alt="Analytics"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="ri-shield-user-line text-primary ri-xl"></i>
                </div>
                <div>
                  <div className="font-semibold">Active Users</div>
                  <div className="text-2xl font-bold text-primary">342</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Advanced Management Tools</h3>
              <p className="text-gray-600 mb-6">Take control of your business with comprehensive ledger management and role-based access control.</p>
              <div className="space-y-6">
                {/* Financial Ledger Card */}
                <FeatureDetails
                  icon="ri-book-2-line"
                  title="Financial Ledger"
                  rows={[
                    ["Today's Entries", "127"],
                    ["Monthly Balance", "+$45,230"]
                  ]}
                  highlight={true}
                />
                {/* User Management Card */}
                <FeatureDetails
                  icon="ri-team-line"
                  title="User Management"
                  rows={[
                    ["Total Roles", "8"],
                    ["Permission Sets", "15"]
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 transform-gpu scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    <div className="relative flex items-start gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 animate-pulse"></div>
        <i className={`${icon} text-primary ri-xl relative z-10`}></i>
      </div>
      <div>
        <div className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</div>
        <div className="text-gray-600 mt-1">{description}</div>
      </div>
    </div>
  </div>
);

const WorkflowItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
      <i className={`${icon} text-primary`}></i>
    </div>
    <div className="flex-1">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
    </div>
    <i className="ri-arrow-right-line text-gray-400"></i>
  </div>
);

const FeatureDetails = ({ icon, title, rows = [], highlight }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
        <i className={`${icon} text-primary`}></i>
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <div className="space-y-2">
      {rows.map(([label, value], index) => (
        <div className="flex items-center justify-between text-sm" key={index}>
          <span className="text-gray-600">{label}</span>
          <span className={`font-semibold ${highlight && index === 1 ? 'text-green-600' : ''}`}>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesSection;
