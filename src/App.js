import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <a className="header__link" href=".">
          <img className="header__logo" src="<%=require('./images/icon/logo.svg')%>" alt="Сайт Mesto" />
        </a>
      </header>
      <main className="main">
        <section className="profile">
          <a className="profile__wrapper" href=".">
            <img className="profile__avatar" src="<%=require('./images/loader.gif')%>" alt="Аватар" />
          </a>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button profile__button_action_edit" type="button" title="Редактировать" />
            <p className="profile__text">Исследователь океана</p>
          </div>
          <button className="profile__button profile__button_action_add" type="button" title="Добавить" />
        </section>
        <section className="photo-grid">
          <ul className="photo-grid__list" />
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2022. melodoc</p>
      </footer>
      <div className="popup" id="profile">
        <div className="popup__container">
          <button className="popup__button popup__button_action_close" type="button" title="Закрыть" />
          <form className="popup__form" name="profile-form">
            <div className="popup__wrapper">
              <h3 className="popup__heading">Редактировать профиль</h3>
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
              <button
                value="Сохранить"
                className="popup__button popup__button_action_submit"
                type="submit"
                title="Сохранить"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="popup" id="add-card">
        <div className="popup__container">
          <button className="popup__button popup__button_action_close" type="button" title="Закрыть" />
          <form className="popup__form" name="add-place-form">
            <div className="popup__wrapper">
              <h3 className="popup__heading">Новое место</h3>
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
              <button
                value="Сохранить"
                className="popup__button popup__button_action_submit"
                type="submit"
                title="Сохранить"
              >
                Создать
              </button>
            </div>
          </form>
        </div>
      </div>
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
      <div className="popup" id="delete-confirmation">
        <div className="popup__container">
          <button className="popup__button popup__button_action_close" type="button" title="Закрыть" />
          <form className="popup__form" name="confirm-card-form">
            <div className="popup__wrapper popup__wrapper_type_confirmation">
              <h3 className="popup__heading">Вы уверены?</h3>
              <button value="Да" className="popup__button popup__button_action_submit" type="submit" title="Да">
                Да
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="popup" id="update-avatar">
        <div className="popup__container">
          <button className="popup__button popup__button_action_close" type="button" title="Закрыть" />
          <form className="popup__form" name="update-avatar-form">
            <div className="popup__wrapper popup__wrapper_type_confirmation">
              <h3 className="popup__heading">Обновить аватар</h3>
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
              <button
                value="Сохранить"
                className="popup__button popup__button_action_submit"
                type="submit"
                title="Сохранить"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
      <template id="card" />
    </>
  );
}

export default App;
