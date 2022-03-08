/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(a) {
    let n = a.length, visit = Array(n).fill(0);
    
    for (let i = 0; i < n; ++i) {
        if (visit[i]) continue;
        visit[i] = true;
        let m = new Map();
        let cur = i;
        while (true) {
            let next = ((cur + a[cur]) % n + n) % n;
            if (next == cur || a[next] * a[cur] < 0) break;
            if (m.has(next)) return true;
            m.set(cur, next);
            cur = next;
            visit[next] = true;
        }
    }
    return false;
};