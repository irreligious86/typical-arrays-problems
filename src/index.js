
exports.min = function min (array) {
    if (!array) return 0;
    if (!array.length) return 0;
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (!array) return 0;
    if (!array.length) return 0;
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (!array) return 0;
    if (!array.length) return 0;
    return array.reduce( (acc, prev) => acc+prev, 0 ) /array.length ;

}
