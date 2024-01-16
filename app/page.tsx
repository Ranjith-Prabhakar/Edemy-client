import Image from "next/image";
import Navbar from "../components/Navbar";
import Carousal from "../components/Carousal";
export default function Home() {
  return (
    <>
      <h1>
        <Navbar />
        <Carousal />
      </h1>
    </>
  );
}
