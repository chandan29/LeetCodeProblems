/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var area1 = (C-A)*(D-B);
    var area2 = (G-E)*(H-F);
    var sharedWidth = Math.min(C, G) - Math.max(A, E);
    var sharedHeight = Math.min(D, H) - Math.max(B, F);
    var sharedArea = Math.max(0, sharedWidth) *
                        Math.max(0, sharedHeight);
    return area1 + area2 - sharedArea;
};