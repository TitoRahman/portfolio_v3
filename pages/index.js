import InformationSection from "@/pages/Section/InformationSection";
import GlowEffect from "@/effect/GlowEffect";
import DetailSection from "@/pages/Section/DetailSection"; // Adjust the path as needed

export default function Home() {
  return (
    <div className="cursor-default  bg-gradient-to-br from-slate-900 to-gray-900 grid grid-cols-2 gap-16 ">
      <InformationSection />
      <DetailSection />
      <GlowEffect />
    </div>
  );
}
