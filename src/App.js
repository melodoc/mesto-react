import { useState } from 'react';
import { Header, Main, Footer, PopupWithForm, ImagePopup } from './components';
import { buttonType } from './constants';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(null);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(null);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleEditAvatarClick = (event) => {
    event.preventDefault();
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleDeleteConfirmationClick = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onDeleteConfirmation={handleDeleteConfirmationClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              id="name"
              name="name"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              autoComplete="off"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span className="name-error" />
          </label>
          <label className="popup__field">
            <input
              id="about"
              name="about"
              className="popup__input popup__input_type_about"
              placeholder="О себе"
              autoComplete="off"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span className="about-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="add-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              id="title"
              name="title"
              type="text"
              required=""
              className="popup__input popup__input_type_title"
              placeholder="Название"
              autoComplete="off"
              minLength={2}
              maxLength={30}
            />
            <span className="title-error" />
          </label>
          <label className="popup__field">
            <input
              id="url"
              name="url"
              type="url"
              required=""
              className="popup__input popup__input_type_url"
              placeholder="Ссылка на картинку"
              autoComplete="off"
            />
            <span className="url-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="update-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              id="avatar"
              name="avatar"
              type="url"
              required=""
              className="popup__input popup__input_type_title"
              placeholder="Ссылка"
              autoComplete="off"
              minLength={2}
            />
            <span className="avatar-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Вы уверены?"
          name="delete-confirmation"
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          button={buttonType.YES}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
