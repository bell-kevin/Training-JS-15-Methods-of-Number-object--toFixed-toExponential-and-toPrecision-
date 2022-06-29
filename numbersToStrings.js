function howManySmaller(arr, n) {
    return arr.map(d => d.toFixed(2)).filter(d => d < n).length;
}
