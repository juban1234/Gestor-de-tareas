import { useState } from "react";

export const Prueva = () => {
  // Estado para almacenar las tarjetas creadas
  const [cards, setCards] = useState([]);
  const [imput, setImput] = useState("")

  // Función que agrega una nueva tarjeta
  const addCard = () => {
    const newCard = {
      title: imput,
      description: 'Descripción de la tarjeta',
    };
    setCards([...cards, newCard]); // Agrega la nueva tarjeta al estado
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
