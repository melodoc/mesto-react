import { buttonType } from '../constants';

const getButtonName = (button) => {
  return button === buttonType.SAVE ? 'Сохранить' : 'Да';
};

const addClassToElementBySelector = ({ selector, className = 'popup_opened' }) => {
  const element = document.querySelector(selector);
  element.classList.add(className);
};

export function PopupWithForm({ title, name, children, isOpen, button }) {
  const buttonName = getButtonName(button);

  if (isOpen) {
    addClassToElementBySelector({ selector: `#${name}` });
  }

  return (
    <div className="popup" id={name}>
      <div className="popup__container">
        <button className="popup__button popup__button_action_close" type="button" title="Закрыть" />
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
