class PrimeFactorization {
    constructor(number) {
        this.number = number;
        this.factorization = this.primeFactors(number);
        this.primeFactorsCount = this.countPrimeFactors();
    }

    primeFactors(aNum) {
        const factors = [];
        if (aNum == 1) {
            factors.push(1);
        } else {
            let divisor = 2;
            let n = aNum;
            while (n >= 2) {
                if (n % divisor === 0) {
                    factors.push(divisor);
                    n = n / divisor;
                } else {
                    divisor++;
                }
            }
        }
        return factors;
    }

    countPrimeFactors() {
        const counts = {};
        for (const factor of this.factorization) {
            counts[factor] = (counts[factor] || 0) + 1;
        }
        return counts;
    }

    toMathJax() {
        let result = "";
        for (const factor in this.primeFactorsCount) {
            result += factor + "^{" + this.primeFactorsCount[factor] + "} \\times ";
        }
        return result.slice(0, -8); // delete " \\times " at the end of the string
    }
}
