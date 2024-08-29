import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "./ui/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b md:border-none border-white/20 sticky top-0 z-20 ">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container sticky top-0 z-10  ">
        <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur  ">
          <div>
            <div
              className="border w-10 h-10 
              rounded-lg border-white/20 inline-flex
              items-center justify-center bg-black"
            >
              <a href="#" >
                <LogoIcon className="size-8 " />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className=" flex gap-8 text-sm ">
              <a className="nav-foot-links" href="#">
                Features
              </a>
              <a className="nav-foot-links" href="#">
                Developers
              </a>
              <a className="nav-foot-links" href="#">
                Pricing
              </a>
              <a className="nav-foot-links" href="#">
                Change log
              </a>
            </nav>
          </div>

          <div className="flex gap-4  items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="h-8 w-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
