var calcEquation = function(equations, values, queries) {
    const obj = {};
    for(let i=0; i<equations.length; i++) {
        const arr = equations[i];
        const a = arr[0];
        const b = arr[1];
        const val = values[i];
        
        if(!obj[a]) obj[a] = {};
        obj[a][b] = val;
        
        if(!obj[b]) obj[b] = {};
        obj[b][a] = 1/val;
    }
    
    const result = [];
    queries.forEach(query => {
        result.push(dfs(query[0], query[1], obj));
    });
    
    return result;
};

function dfs(a, z, obj, visited = new Set()){
    if(!obj[a]) return -1.0;
    
    if(a===z) {
        return 1;
    }
    
    visited.add(a);
    
    const bv = obj[a];
    const bs = Object.keys(bv);
    for(let b of bs) {
        if(!visited.has(b)) {
            const res = dfs(b, z, obj, visited);
            if(res > 0) {
                return res * bv[b];
            }
        }
    }
    
    return -1.0
}