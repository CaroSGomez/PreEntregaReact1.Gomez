import { MenuIcon } from "lucide-react";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <>
      <nav className="flex gap-4 items-center">
        <div className="items-center hidden md:flex md:gap-4">
          <a href="#">Vuelos </a>
          <a href="#">Hoteles</a>
          <a href="#">Contacto</a>
          <MenuIcon width={20} height={20} />
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
