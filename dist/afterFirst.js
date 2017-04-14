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
 * @param  {string} delimiter Delimitador
 * @return {string}
 * @public
 *
 * @example
 * afterFirst("paralelepípedo", "le");
 * // => "lepípedo"
 */
const afterFirst = (str, delimiter) => _sliceOnOccurrence("after", "first", delimiter, str);

export default afterFirst;
