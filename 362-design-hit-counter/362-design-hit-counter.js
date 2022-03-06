
class HitCounter {
    constructor(n = 300){
        this.n = n;
        this.hits = new Array(this.n).fill(0);
        this.times = new Array(this.n).fill(0);
        //this.hit = this.hit.bind(this);
        //this.getHits = this.getHits.bind(this);
    }
    
    
    /**
     * Record a hit.
            @param timestamp - The current timestamp (in seconds granularity). 
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp){
        const index = timestamp % this.n;
        
        if (this.times[index] !== timestamp) {
            // in case we are handling next (n > 1) 5 minute span
            this.times[index] = timestamp;
            this.hits[index] = 1;
        } else {
            // this is same 5 minute span
           this.hits[index] += 1;
        }
    }
    /**
     * Return the number of hits in the past 5 minutes.
            @param timestamp - The current timestamp (in seconds granularity). 
     * @param {number} timestamp
     * @return {number}
     */
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