import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProyects from "@/components/RecentProyects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
          <h1 className=" text-white">GuilletDev</h1>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProyects />
      </div>
       
    </main>
  );
}
