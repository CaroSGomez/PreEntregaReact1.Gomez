import ItemListContainer from "../ItemListContainer";
import OffertList from "../OffertList";

import UserCard from "../UserCard";

function Main() {
  return (
    <main className="p-4 grow">
      <ItemListContainer greeting="Viajer@!" />
      <section className="grid users grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <UserCard destination="Bariloche" duration="7 dias" />
        <UserCard />
        <UserCard />
        <UserCard />   
      </section>
      <section>
       <OffertList />
      </section>
    </main>
  );
}

export default Main;
