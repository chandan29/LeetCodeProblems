/*Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.*/




/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.replace(/\s\s+/g, ' ');
    s=s.replace(/\s+$/, '');
    s=s.replace(/^\s+/, '');
    if(s==" "){
        return 0;
    }
    if(s==""){
        return 0;
    }
    var arr=s.split(" ");
    return arr.length;
};
