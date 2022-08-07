import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { apiClient } from '../utils/Api';
import avatar from '../images/loader.gif';
import { Card } from './Card';

export function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onDeleteConfirmation,
  onCardClick
}) {
  const [cards, setCards] = useState(null);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    apiClient
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    apiClient.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    }).catch((err) => {
      console.error(err);
    });;
  };

  const handleCardDelete = (card) => {
    apiClient.deleteCardById(card._id).then(() => {
      setCards((state) => state.filter((c) => (c._id !== card._id)));
    }).catch((err) => {
      console.error(err);
    });;
  }

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
            src={currentUser?.avatar ? currentUser.avatar : avatar}
            alt="Аватар"
          />
        </a>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser?.name}</h1>
          <button
            className="profile__button profile__button_action_edit"
            onClick={onEditProfile}
            type="button"
            title="Редактировать"
          />
          <p className="profile__text">{currentUser?.about}</p>
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
                  <Card
                    key={card._id}
                    card={card}
                    onClick={onCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                  />
                );
              })
            : 'Загрузка...'}
        </ul>
      </section>
    </main>
  );
}
