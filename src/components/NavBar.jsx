import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <>
      <section className="flex justify-between p-4 shadow-md bg-slate-400">
        <img src="/icono.png" alt="icono" />

        <h1 id="titulo" className="encabezado">
          Turismo Gasolero
        </h1>
        <nav className="hidden md:flex md:gap-4">
          <a href="#">Vuelos </a>
          <a href="#">Hoteles</a>
          <a href="#">Excursiones</a>
          <img src="/menu.png" alt="menu" />
        </nav>
        <CartWidget />
      </section>
    </>
  );
}

export default NavBar;
