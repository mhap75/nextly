import Script from "next/script";
import {AddSchedule} from "@/components";

export default function Home() {
  return (
    <section className="h-[600px]">
      <AddSchedule />
    </section>
  );
}
