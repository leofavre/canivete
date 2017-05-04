import _reactToEvent from "./internal/event/_reactToEvent";

const listen = (eventStr, domEls, callback, isCapture = false) => _reactToEvent("addEventListener", eventStr, domEls, callback, isCapture);

export default listen;
