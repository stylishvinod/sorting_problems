// https://leetcode.com/problems/k-closest-points-to-origin/
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    if (points.length <= K) return points;

    let result = points.map(([x, y]) => {
        const dist = x * x + y * y;
        return [dist, x, y];
    });
    const kpoints = quickSelect(result, 0, points.length - 1, K);

    kpoints.forEach(a => a.shift());
    return kpoints;

};

function quickSelect(arr, start, end, K) {

    let pivot = getRandomNumber(start, end);

    const pivotIndex = getPartitionIndex(arr, start, end);

    if (pivotIndex + 1 === K) {

        return arr.slice(0, K);
    } else if (pivotIndex + 1 < K) {
        return quickSelect(arr, pivotIndex + 1, end, K);
    } else {
        return quickSelect(arr, start, pivotIndex - 1, K);
    }
}

function getPartitionIndex(arr, start, end) {
    // conside pivot as start element;

    let i = start + 1;
    let j = end;
    let pivot = arr[start][0];

    while (i <= j) {
        if (arr[i][0] <= pivot) {
            i++;
        } else if (arr[j][0] > pivot) {
            j--;
        } else {
            swapEle(arr, i, j);
        }
    }

    swapEle(arr, start, i - 1);
    return i - 1;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}

function swapEle(arr, start, end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
}