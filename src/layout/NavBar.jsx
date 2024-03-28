import CardWidget from "../CardWidget"


function NavBar() {
  return (
    <>
    <nav className="hidden md:block">
    <a href="#">Vuelos </a>
    <a href="#">Hoteles</a>
    <a href="#">Excursiones</a>
</nav>
<CardWidget nro = {1} />
        <CardWidget nro = {2}/>
        <CardWidget nro = {3}/>
        
    </>
  )
}

export default NavBar