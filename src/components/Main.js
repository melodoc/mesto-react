import avatar from '../images/loader.gif';

export function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onDeleteConfirmation
}) {
  return (
    <main className="main">
      <section className="profile">
        <a
          className="profile__wrapper"
          onClick={(event) => onEditAvatar(event)}
          href="."
        >
          <img className="profile__avatar" src={avatar} alt="Аватар" />
        </a>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__button profile__button_action_edit"
            onClick={onEditProfile}
            type="button"
            title="Редактировать"
          />
          <p className="profile__text">Исследователь океана</p>
        </div>
        <button
          className="profile__button profile__button_action_add"
          onClick={onAddPlace}
          type="button"
          title="Добавить"
        />
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__list" />
      </section>
    </main>
  );
}
