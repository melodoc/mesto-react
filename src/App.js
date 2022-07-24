import { useState } from 'react';
import { Header, Main, Footer, PopupWithForm, ImagePopup } from './components';
import { buttonType } from './constants';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteConfirmationPopupOpen, setIsDeleteConfirmationPopupOpen] = useState(false);

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
    setIsDeleteConfirmationPopupOpen(!isDeleteConfirmationPopupOpen);
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
        />
        <Footer />
        <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen}>
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
      <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen}>
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
      <PopupWithForm title="Обновить аватар" name="update-avatar" isOpen={isEditAvatarPopupOpen}>
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
      <PopupWithForm title="Вы уверены?" name="delete-confirmation" isOpen={isDeleteConfirmationPopupOpen} button={buttonType.YES}></PopupWithForm>
      <ImagePopup />
        <template id="card">
          <li className="card">
            <button className="card__trash-button" type="button" title="Удалить" />
            <img className="card__image" alt="Карточка" />
            <div className="card__description">
              <h2 className="card__header"> </h2>
              <div>
                <button className="card__like-button" type="button" title="Нравится" />
                <p className="card__like-counter">2</p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </>
  );
}

export default App;
