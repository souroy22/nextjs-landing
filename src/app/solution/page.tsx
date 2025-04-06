import InventoryControl from "@/components/InventoryControl";
import SolutionHeader from "@/components/SolutionHeader";
import OurBlogs from "@/components/blogs";
import BussinessToolkit from "@/components/BussinessToolkit";

const Solution = () => {

  return (
    <main className="min-h-screen">  
      <section className="c">
        <SolutionHeader/>
      </section>
      
      <section className=" bg-gray-50">
        <BussinessToolkit/>
      </section>
      <section className=" bg-gray-50">
        <OurBlogs/>
      </section>
      <section className=" bg-gray-50">
        <InventoryControl/>
      </section>
      
    </main>
  );
};

export default Solution;
