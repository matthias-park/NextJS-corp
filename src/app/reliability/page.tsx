import Hero from "@/components/hero";
import ReliabilityImg from "public/reliability.jpg";
export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgData={ReliabilityImg}
        imgAlt="welding"
        title="Super High Reliability Hosting"
      />
    </div>
  );
}
