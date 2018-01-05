// as seen on https://github.com/kangax/html-minifier/issues/63/#issuecomment-37772698

const _isBooleanAttribute = (attr) => {
  const booleanAttrRegExp = '^(?:allowfullscreen|async|' +
    'autofocus|autoplay|checked|compact|controls|declare|default|' +
    'defaultchecked|defaultmuted|defaultselected|defer|disabled|' +
    'draggable|enabled|formnovalidate|hidden|indeterminate|inert|' +
    'ismap|itemscope|loop|multiple|muted|nohref|noresize|noshade|' +
    'novalidate|nowrap|open|pauseonexit|readonly|required|reversed|' +
    'scoped|seamless|selected|sortable|spellcheck|translate|' +
    'truespeed|typemustmatch|visible)$';

  return (new RegExp(booleanAttrRegExp)).test(attr);
};

export default _isBooleanAttribute;
