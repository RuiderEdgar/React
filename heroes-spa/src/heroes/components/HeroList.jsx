import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  
  //se puede usar un useMemo para optimizar
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3">
      {
        heroes.map((heroe) => { 
          return <HeroCard key={heroe.id} {...heroe} />;
        })
      }
    </div>
  )
}

