/**
 * @typedef {Object} clippingObject
 * @property {boolean} isOffTop Above and off the mask.
 * @property {boolean} isOffBottom Below and off the mask.
 * @property {boolean} isOffLeft On the left and off the mask.
 * @property {boolean} isOffRight On the right and off the mask.
 * @property {boolean} isOff Off the mask.
 * @property {boolean} isClippedTop Above and intersecting with the mask.
 * @property {boolean} isClippedBottom Below and intersecting with the mask.
 * @property {boolean} isClippedLeft On the left and intersecting with the mask.
 * @property {boolean} isClippedRight On the right and intersecting with the mask.
 * @property {boolean} isClipped Element intersects with the mask.
 * @property {boolean} isFullyVisible Fully visible inside the mask.
 * @property {boolean} isPartiallyVisible Alias for `isClipped`.
 * @property {boolean} isInvisible Alias for `isOff`.
 * @property {boolean} isAsVisibleAsPossible As visible as possible (element bigger than mask).
 * @property {boolean} isNotAsVisibleAsPossible Not as visible as possible (element bigger than mask).
 */

/**
 * @typedef {Object} bemObject
 * @property {Object} name An object which key is a BEM block or element, e.g. `menu` ou `landing__area`.
 * @property {Object} name.modifier An object representing a modifier and it's value, e.g. `{active: false}` or `{level: 42}`.
 */