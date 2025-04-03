import { createContext, useState, useContext } from "react";

const CardContext = createContext();

export const Context = ({ children }) => {

  const [cards, setCards] = useState([]);
  const [imput, setImput] = useState("")

  const addCard = () => {
    const newCard = {
      title: imput,
      description: 'Descripción de la tarjeta',
    };
    setCards([...cards, newCard]);
    setImput('')
  };

  return (

    <div>
        <input type="text"         
        value={imput}
        onChange={(e) => setImput(e.target.value)}
        placeholder='nombre usuario' />


      <button onClick={addCard}>Agregar tarjeta</button>

      <div>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

