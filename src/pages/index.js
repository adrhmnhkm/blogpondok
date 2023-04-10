import Image from "next/image";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { Navbar } from "../components/NavBar";
import { Header } from "@/components/Header";
import { Topnav } from "@/components/Topnav";
import { Mobilemenu } from "@/components/Mobilemenu";

export default function Home() {
  return (
    <>
    {/* Top Navigation */}
      <div>
        <Topnav />
      </div>
     {/* logo, spaceiklan */}
      <div>
        <Header />
       
      </div>
      {/* Menu */}
      <div>
        <div>
          <Navbar />
          <Mobilemenu />
        </div>
      </div>
    </>
  );
};
