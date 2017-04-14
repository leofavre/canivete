/**
 * Atrasa o encadeamento de uma Promise por um tempo
 * determinado.
 * 
 * @category Promise
 * @param  {number} delay Tempo do atraso em milisegundos
 * @return {Promise}
 * @public
 *
 * @example
 * Promise.resolve("aguardando")
 * 	.then(waitInPromise(500))
 * 	.then(console.log);
 *
 * // => "aguardando"
 * // mostrado depois de 500 milisegundos.
 */
function waitInPromise(delay) {
	return function(arg) {
		if (delay != null && delay > 0) {
			return new Promise(resolve => {
				setTimeout(() => resolve(arg), delay);
			});
		}
		return Promise.resolve(arg);
	};
}

export default waitInPromise;
