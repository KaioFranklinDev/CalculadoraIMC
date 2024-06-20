import { Inter } from "next/font/google";
import CalcIMC from "./CalcIMC/CalcIMC";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center bg-slate-200 h-full min-h-screen">
      <CalcIMC/>
      <Footer/>
    </div>
  );
}
