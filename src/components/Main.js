import { useState, useEffect } from 'react';
import { apiClient } from '../utils/Api';
import { Card } from '../components';
import avatar from '../images/loader.gif';

export function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onDeleteConfirmation,
  onCardClick
}) {
  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    Promise.all([apiClient.getUserInformation(), apiClient.getCards()])
      .then(([userInformation, cards]) => {
        setUserName(userInformation.name);
        setUserDescription(userInformation.about);
        setUserAvatar(userInformation.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <a
          className="profile__wrapper"
          onClick={(event) => onEditAvatar(event)}
          href="."
        >
          <img
            className="profile__avatar"
            src={userAvatar ? userAvatar : avatar}
            alt="Аватар"
          />
        </a>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__button profile__button_action_edit"
            onClick={onEditProfile}
            type="button"
            title="Редактировать"
          />
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          className="profile__button profile__button_action_add"
          onClick={onAddPlace}
          type="button"
          title="Добавить"
        />
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards
            ? cards.map((card) => {
                return (
                  <Card card={card} key={card._id} onClick={onCardClick} />
                );
              })
            : 'Загрузка...'}
        </ul>
      </section>
    </main>
  );
}
