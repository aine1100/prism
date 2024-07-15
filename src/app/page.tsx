import Image from "next/image";
import Navbarone from "./components/navbarone";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">
        <Navbarone/>

      </div>
      
    </main>
  );
}
