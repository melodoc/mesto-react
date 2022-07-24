export function ImagePopup() {
  return (
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
  );
}
