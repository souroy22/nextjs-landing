import InventoryControl from "../../components/InventoryControl";
import Solutions from "../../components/Solutions";
import InventoryHeader from "../../components/InventoryHeader";
import Blogs from "@/components/blogs/index";

const Industry = () => {
  return (
    <main className="min-h-screen"> 
      <section className="c">
        <InventoryHeader/>
      </section>
      
      <section className=" bg-gray-50">
        <Solutions/>
      </section>
      <section className=" bg-gray-50">
        <Blogs/>
      </section>
      <section className=" bg-gray-50">
        <InventoryControl/>
      </section>
    </main>
  );
};

export default Industry;
