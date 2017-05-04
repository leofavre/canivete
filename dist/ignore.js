import _reactToEvent from "./internal/event/_reactToEvent";

const ignore = (eventStr, domNodes, callback, isCapture = false) => _reactToEvent("removeEventListener", eventStr, domNodes, callback, isCapture);

export default ignore;
