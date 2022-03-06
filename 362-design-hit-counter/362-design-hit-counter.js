
class HitCounter {
    constructor(n = 300){
        this.n = n;
        this.hits = new Array(this.n).fill(0);
        this.times = new Array(this.n).fill(0);
    }
    
    hit(timestamp){
        const index = timestamp % this.n;
        if (this.times[index] !== timestamp) {
            this.times[index] = timestamp;
            this.hits[index] = 1;
        } else {
           this.hits[index] += 1;
        }
    }
    
    getHits(timestamp) {
        let total = 0;
        for (let i =0; i < this.n; i++) {
            if (timestamp - this.times[i] < this.n) {
                total += this.hits[i];
            }
        }
        
        return total;
    }
}