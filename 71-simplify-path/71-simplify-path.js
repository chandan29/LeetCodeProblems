/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var st = [];
    path = path.split('/');
    for(var i=0;i<path.length;i++){
        if(path[i]==='' || path[i]==='.'){
            continue;
        }
        else if(path[i]==='..'){
            if(st.length){
                st.pop();
            }
        }
        else{
            st.push(path[i]);
        }
    }
    var op = '';
    for(var i=0;i<st.length;i++){
        op+='/'+st[i];
    }
    if(!op.length){
        op+='/';
    }
    return op;
};