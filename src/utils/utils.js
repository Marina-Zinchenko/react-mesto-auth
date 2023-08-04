export default function loadingText(popup, text) {
	const buttonSave = popup.querySelector('.popup__button')
	buttonSave.textContent = text;
}