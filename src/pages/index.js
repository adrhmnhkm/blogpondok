import Image from "next/image";
import Link from "next/link";
import { ColorPicker, useColor  } from "react-color-palette";
import "react-color-palette/lib/css/styles.css"

export default function Home() {
  return (
    <>
      <header>
        <nav className="fixed w-full bg-[#0a8243] text-white font-inter font-light text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div>
              <a href="#" className="px-1 py-2">About us</a>
              <a href="#" className="px-1 py-2">Contact</a>
              <a href="#" className="px-1 py-2">Disclaimer</a>
              <a href="#" className="px-1 py-2">Copyright</a>
              <a href="#" className="px-1 py-2">Donation</a>
            </div>
            <div className="flex items-center">
              <a href="https://www.instagram.com" className="p-2">
                <Image src="/ig-icon.png" alt="icon" width={16} height={16}/>
              </a>
              <a href="https://www.youtube.com" className="p-2">
                <Image src="/yt-icon.png" alt="icon" width={16} height={16}/> 
              </a>
              <div className="bg-transparent">
                <form>
                  <input type="text" placeholder="Search" style={{backgroundColor: '#0a8243'}} className="w-full px-4 py-2 rounded-md focus:outline-none hover:outline-none" />
                </form>
              </div>
              
            </div>  
          </div>  
        </div> 
        </nav>
        <div className="">
          <div className="max-w-7xl mx-auto py-16">
            <div className="flex justify-between">
              <Link legacyBehavior href="https://www.google.com">
                <a>
                  <img src="/logo.png" alt="logo" className="w-96 h-40"/>
                </a>
              </Link>
              <div className="py-12">
                <div className="bg-black h-20 w-64"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
