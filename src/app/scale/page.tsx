import Hero from "@/components/hero";
import ScaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imgData={ScaleImg}
        imgAlt="steel factory"
        title="Scale Your App to Infinity"
      />
    </div>
  );
}
