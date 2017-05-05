import _getCoords from "./_getCoords";

const _getCoordsFromElementOrObjectOrWindow = arg => _getCoords(arg, false);

export default _getCoordsFromElementOrObjectOrWindow;
