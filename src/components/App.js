import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { buttonType } from '../constants';
import { apiClient } from '../utils/Api';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { EditProfilePopup } from './EditProfilePopup';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(null);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(null);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    apiClient
      .getUserInformation()
      .then((userInformation) => {
        setCurrentUser(userInformation ?? {});
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
  };

  const handleUpdateUser = ({ name, about }) => {
    console.info(name, about);
    apiClient
      .setUserInfo(name, about)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          title="Новое место"
          name="add-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonName={buttonType.SAVE}
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
          buttonName={buttonType.SAVE}
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
          buttonName={buttonType.YES}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
