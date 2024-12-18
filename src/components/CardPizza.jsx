const CardPizza = ({ name, price, ingredients, img, addToCart }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p><strong>Precio:</strong> ${price}</p>

      {/* Lista desordenada de ingredientes */}
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <button>Ver más</button>
      <button onClick={() => addToCart({ name, price, img })}>Añadir</button>
    </div>
  );
};

export default CardPizza;
