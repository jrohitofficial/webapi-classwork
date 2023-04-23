function primeFactors(num) {
  let factors = [];

  let divisor = 2;

  while (num >= 2) {
    if (num % divisor == 0) {
      factors.push(divisor);

      num /= divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}
