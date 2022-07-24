export function Card(item) {
  const card = item.card;

  return (
    <li className="card">
      <button className="card__trash-button" type="button" title="Удалить" />
      <img className="card__image" alt={card.name} src={card.link} />
      <div className="card__description">
        <h2 className="card__header">{card.name}</h2>
        <div>
          <button
            className="card__like-button"
            type="button"
            title="Нравится"
          />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
