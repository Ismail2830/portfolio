import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="items-center justify-items-centerp-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Banner />
      <Projects />
    </div>
  );
}
