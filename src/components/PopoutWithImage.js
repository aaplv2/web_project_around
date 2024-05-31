import Popout from "./Popout";

export default class PopoutWithImage extends Popout {
  constructor(popoutSelector) {
    super(popoutSelector);
  }
  open(title, link) {
    super.open();

    const imagePopout = document.querySelector(".popout-image");
    const imagePopoutTitle = imagePopout.querySelector(".popout-image__title");
    const imagePopoutImage = imagePopout.querySelector(".popout-image__image");

    imagePopoutTitle.textContent = title;
    imagePopoutImage.src = link;
    imagePopoutImage.alt = title;
  }
}
