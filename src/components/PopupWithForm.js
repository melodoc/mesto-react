import { buttonType } from '../constants';

const getButtonName = (button) => {
  return button === buttonType.SAVE ? 'Сохранить' : 'Да';
};

export function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  button
}) {
  const buttonName = getButtonName(button);

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id={name}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__button popup__button_action_close"
          type="button"
          title="Закрыть"
        />
        <form className="popup__form" name={`${name}-form`}>
          <div className="popup__wrapper">
            <h3 className="popup__heading">{title}</h3>
            {children}
            <button
              value={buttonName}
              className="popup__button popup__button_action_submit"
              type="submit"
              title={buttonName}
            >
              {buttonName}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
