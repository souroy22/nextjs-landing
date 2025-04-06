import FeaturesSection from "@/components/FeaturesSection";
import InventoryManagement from "@/components/InventoryManagement";
import PricingSection from "@/components/PricingSection";
import InventoryControl from "@/components/InventoryControl";
import CommonCta from "@/components/CommonCta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(225,43,62,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 opacity-10">
              <i className="ri-box-3-line ri-4x text-primary"></i>
            </div>
            <div className="absolute top-40 right-40 w-24 h-24 opacity-10">
              <i className="ri-truck-line ri-3x text-secondary"></i>
            </div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 opacity-10">
              <i className="ri-store-3-line ri-5x text-primary"></i>
            </div>
            <div className="absolute top-1/3 right-1/4 w-36 h-36 opacity-10">
              <i className="ri-bar-chart-box-line ri-4x text-secondary"></i>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 py-32 relative">
          <div className="max-w-7xl mx-auto">
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
              <div className="text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#80808017] rounded-full text-primary font-medium">
                  <i className="ri-flashlight-line animate-pulse"></i>
                  <span>Revolutionary AI Technology</span>
                </div>
                <h1 className="text-7xl font-bold leading-tight bg-gradient-to-r from-primary via-purple-600 to-pink-500 text-transparent bg-clip-text">
                  Redefining <br />
                  <span className="relative inline-block">
                    Inventory
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="10"
                      viewBox="0 0 400 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5 Q100 0, 200 5 T400 5"
                        fill="none"
                        stroke="rgba(225,43,62,0.3)"
                        strokeWidth="4"
                      ></path>
                    </svg>
                  </span>{" "}
                  <br />
                  Management
                </h1>
                <p className="text-xl text-gray-600">
                  Experience the next generation of AI-powered inventory control
                  that learns, adapts, and evolves with your business in
                  real-time.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="group px-8 py-4 bg-primary text-white hover:bg-primary/90 rounded-full whitespace-nowrap flex items-center gap-3 text-lg relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <i className="ri-rocket-line ri-lg transition-transform group-hover:translate-x-1"></i>
                      Start Free Trial
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                  <button className="group px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-primary/5 rounded-full whitespace-nowrap flex items-center gap-3 text-lg">
                    <i className="ri-play-circle-line ri-lg transition-transform group-hover:translate-x-1"></i>
                    Watch Demo
                  </button>
                </div>
                <div className="flex items-center gap-8 mt-12">
                  <div className="flex -space-x-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional headshot of diverse business person with confident smile&width=100&height=100&orientation=squarish&flag=df0beae063934d993f21a72e608821d6"
                      className="w-12 h-12 rounded-full border-2 border-white"
                      alt="User" />
                    <img
                      src="https://readdy.ai/api/search-image?query=professional headshot of diverse business person with confident smile&width=100&height=100&orientation=squarish&seed=1&flag=afa00a2dccffd885f7df6b9d4776504f"
                      className="w-12 h-12 rounded-full border-2 border-white"
                      alt="User" />
                    <img
                      src="https://readdy.ai/api/search-image?query=professional headshot of diverse business person with confident smile&width=100&height=100&orientation=squarish&seed=2&flag=19f2bd4b8f3694b90510d8f73b268f6d"
                      className="w-12 h-12 rounded-full border-2 border-white"
                      alt="User" />
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-primary font-medium">
                      +5k
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">
                      Trusted by 5,000+ companies
                    </div>
                    <div className="text-gray-500">across 150+ countries</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        98%
                      </div>
                      <div className="text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        2.5x
                      </div>
                      <div className="text-gray-600">Faster Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        24/7
                      </div>
                      <div className="text-gray-600">Real-time Monitoring</div>
                    </div>
                  </div>
                  <div id="dashboardChart" className="w-full h-[400px]"></div>
                  <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <i className="ri-line-chart-line text-green-500 ri-xl"></i>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Growth Rate</div>
                        <div className="text-xl font-bold text-green-500">
                          +147%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-gray-50">
        <InventoryManagement />
      </section>
      <CommonCta text="INNOVATE • OPTIMIZE • GROW" />
      <section className=" bg-gray-50">
        <FeaturesSection />
      </section>
      <CommonCta text="SCALE • SAVE • SIMPLIFY" />
      <section className=" bg-gray-50">
        <PricingSection />
      </section>
      <CommonCta text="TRUST • DELIVER • EXCEL" />
      <section className=" bg-gray-50">
        <InventoryControl />
      </section>
      
    </main>
   
  );
}
