import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **anteriores
 * à última ocorrência** do delimitador na sentença.
 * Caso o delimitador não seja encontrado, retorna
 * uma string vazia.
 * 
 * @param  {string} str
 * @param  {string} delimiter
 * @return {string}
 * @public
 *
 * @example
 * beforeLast("paralelepípedo", "le");
 * // => "parale"
 */
const beforeLast = (str, delimiter) => _sliceOnOccurrence("before", "last", delimiter, str);

export default beforeLast;
