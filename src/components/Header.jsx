import Link from "next/link";

export const Header = () => {
    return (

        <div>
        <div className="">
          <div className="max-w-7xl mx-auto py-2 md:py-16">
            <div className="lg:flex hidden lg:justify-between">
              <Link legacyBehavior href="https://www.google.com">
                <a className="">
                  <img src="/logo.png" alt="logo" className="w-96 h-40 md:mx-auto"/>
                </a>
              </Link>
              <div className="py-12 hidden md:flex">
                <div className=" bg-slate-400 h-20 w-96">
                  <h3 className="text-center py-7 text-2xl">SPACE IKLAN</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        
          <div className="mx-auto sm:py-6 md:-mt-16">
            <div className="lg:hidden flex items-center justify-between md:flex md:justify-end md:gap-48 md:items-center">
              <Link legacyBehavior href="https://www.google.com">
                <a>
                  <img src="/logo.png" alt="logo" className="w-60 h-24 mt-4 lg:w-96 lg:h-40"/>
                </a>
              </Link>
              <div className="flex items-center">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
              </div>
            </div>
          </div>
        </div>
    )
};