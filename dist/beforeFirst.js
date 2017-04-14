import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **anteriores
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
 * beforeFirst("paralelepípedo", "le");
 * // => "para"
 */
const beforeFirst = (str, delimiter) => _sliceOnOccurrence("before", "first", delimiter, str);

export default beforeFirst;
