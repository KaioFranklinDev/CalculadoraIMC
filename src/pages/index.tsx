import { Inter } from "next/font/google";
import CalcIMC from "./CalcIMC/CalcIMC";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gray-600">
      <CalcIMC/>
      <Footer/>
    </div>
  );
}
