import { buttonType } from '../constants';
import avatar from '../images/loader.gif';
import { PopupWithForm } from './PopupWithForm';

export function Main() {
  const addClassToElementBySelector = ({ selector, className = 'popup_opened' }) => {
    const element = document.querySelector(selector);
    element.classList.add(className);
  };

  const handleEditProfileClick = () => {
    addClassToElementBySelector({ selector: '#profile' });
  };

  const handleEditAvatarClick = (event) => {
    event.preventDefault();
    addClassToElementBySelector({ selector: '#update-avatar' });
  };

  const handleAddPlaceClick = () => {
    addClassToElementBySelector({ selector: '#add-card' });
  };

  return (
    <main className="main">
      <section className="profile">
        <a className="profile__wrapper" onClick={(event) => handleEditAvatarClick(event)} href=".">
          <img className="profile__avatar" src={avatar} alt="Аватар" />
        </a>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__button profile__button_action_edit"
            onClick={handleEditProfileClick}
            type="button"
            title="Редактировать"
          />
          <p className="profile__text">Исследователь океана</p>
        </div>
        <button
          className="profile__button profile__button_action_add"
          onClick={handleAddPlaceClick}
          type="button"
          title="Добавить"
        />
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__list" />
      </section>
      <PopupWithForm title="Редактировать профиль" name="profile">
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
      <PopupWithForm title="Новое место" name="add-card">
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
      <PopupWithForm title="Обновить аватар" name="update-avatar">
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
      <PopupWithForm title="Вы уверены?" name="delete-confirmation" button={buttonType.YES}></PopupWithForm>
      <div className="popup popup_zoom_image" id="zoom-img">
        <div className="popup__container popup__container_zoom_image">
          <button
            className="popup__button popup__button_action_close popup__button_action_zoom-out"
            type="button"
            title="Закрыть"
          />
          <div>
            <img className="popup__image" alt="Попап" />
            <p className="popup__description" />
          </div>
        </div>
      </div>
    </main>
  );
}
