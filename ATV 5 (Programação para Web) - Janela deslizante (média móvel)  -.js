function mediaMovel(arr, k) {
  if (k > arr.length) return [];

  let resultado = [];
  let soma = 0;

  for (let i = 0; i < k; i++) {
    soma += arr[i];
  }
  resultado.push(soma / k);

  for (let i = k; i < arr.length; i++) {
    soma += arr[i] - arr[i - k];
    resultado.push(soma / k);
  }

  return resultado;
}

console.log(mediaMovel([1,2,3,4,5], 3));
