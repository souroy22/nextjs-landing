import InventoryControl from "@/components/InventoryControl";
import Aboutbanner from "@/icons/about-banner.svg";
import UnlockPotential from "@/icons/unlock-potential.png";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Header Section */}
      <section className="py-12 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center ">
            {/* TEXT LEFT */}
            <div className="order-2 lg:order-1 px-8">
              <div className="space-y-4">
                <div className="heading-text">
                  <h2 className="text-[64px] w-[495px] leading-20 text-black font-bold mb-4">
                    About <span className="text-[#E12B3E]">Us</span>{" "}
                  </h2>
                  <p className="text-[32px]  text-[#666666] font-normal">
                    Sortly is a software solution designed for businesses to
                    streamline and modernize every aspect of managing inventory.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-start gap-4">
                <button className="px-5 py-2 text-sm bg-red-100 text-red-500 font-semibold rounded-full border border-red-500 hover:bg-red-500 hover:text-white transition">
                  See All Features
                </button>
                <button className="px-5 py-2 text-sm bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition">
                  Try Sortly Free
                </button>
              </div>
            </div>

            {/* IMAGE RIGHT */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl"></div>
              <img
                src={Aboutbanner}
                alt="Productivity Interface"
                className="relative mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white mx-auto py-20">
        <div className="container mx-auto px-6 lg:px-52">
          <div className="heading-text text-center">
            <h2 className="text-[48px] leading-20 text-black text-center font-bold mb-4">
              We help businesses unlock their potential.
            </h2>
            <p className="text-[32px]  text-[#666666] font-normal text-center">
              Sortly helps businesses of all sizes track the inventory and
              assets that make their company run- saving them time, money, ans
              stress.
            </p>
          </div>
        </div>
        <div className="main-image">
          <Image src={UnlockPotential} className="mt-8 w-full" alt="UnlockPotential" />
        </div>
      </section>
      <section className=" bg-gray-50">
        <InventoryControl />
      </section>
    </main>
  );
}
