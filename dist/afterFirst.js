import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **posteriores
 * à primeira ocorrência** do delimitador na sentença.
 * Caso o delimitador não seja encontrado, retorna
 * uma string vazia.
 *
 * @category String
 * @param  {string} str Senteça
 * @param  {string} separator Delimitador
 * @return {string}
 * @public
 *
 * @example
 * afterFirst("paralelepípedo", "le");
 *
 * // => "lepípedo"
 */
const afterFirst = (str, separator) => _sliceOnOccurrence("after", "first", str, separator);

export default afterFirst;
