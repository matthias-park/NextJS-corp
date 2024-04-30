import Hero from "@/components/hero";
import PerformanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={PerformanceImg}
        imgAlt="welding"
        title="We Serve High Performance Applications"
      />
    </div>
  );
}
