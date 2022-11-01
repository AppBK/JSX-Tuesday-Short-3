import { moves } from './data.js';
import PokeMoveCard from './PokeMoveCard.js';

function PokeMoves () {
    return (
      <ul>
        {moves.map(item => (
            // <li key={item.id}>
            //     {item.id}. {item.move}
            // </li>
            <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>  
    );
}

export default PokeMoves;