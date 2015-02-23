function generatePrimes(n) {
    var start = new Date();
    var primes = [2];
    var num = 3;
    while (primes.length < n) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return 'Time taken: ' + ((new Date()) - start) + 'ms <br/>' +  primes.join(', ');
}

function isPrime(num) {
    if (num < 2) return false;
    else {
        for (var i = 2, len = Math.sqrt(num); i <= len; i++) {
            if (num % i === 0) return false;
        }
    }
    return true;
}

self.addEventListener('message', function (event) {
   self.postMessage(generatePrimes(event.data));
});