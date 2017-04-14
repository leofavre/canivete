import _sliceOnOccurrence from "./internal/string/_sliceOnOccurrence";

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **posteriores
 * à última ocorrência** do delimitador na sentença.
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
 * afterLast("paralelepípedo", "le");
 *
 * // => "pípedo"
 */
const afterLast = (str, separator) => _sliceOnOccurrence("after", "last", str, separator);

export default afterLast;
