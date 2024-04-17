import NavBar from "./components/NavBar";

function Header() {
  return (
    <header className="flex justify-between p-4 shadow-md bg-slate-400">
      <img src="/icono.png" alt="icono" className="w-10" />
      <h1 className="text-xl">Turismo Gasolero</h1>

      <NavBar />
    </header>
  );
}

export default Header;
