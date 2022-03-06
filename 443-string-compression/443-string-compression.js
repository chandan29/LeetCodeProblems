/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let updateInd = 0;
    let cnt = 1;
    for(let i=1;i<chars.length;i++){
        if(chars[i]===chars[i-1]){
            cnt++;
        }
        else{
            chars[updateInd++] = chars[i-1];
            if(cnt===1){
                continue;
            }
            let cntStr = cnt.toString();
            for(let j=0;j<cntStr.length;j++){
                chars[updateInd++] = cntStr[j];
            }
            cnt = 1;
        }
    }
    chars[updateInd++]=chars[chars.length-1];
    if(cnt>1){
        let cntStr = cnt.toString();
        for(let j=0;j<cntStr.length;j++){
            chars[updateInd++] = cntStr[j];
        }
    }
    return updateInd;
};