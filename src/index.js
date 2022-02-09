// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix == "undefined") {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        // matrix[i].sort((a, b) => {
        //     return a-b;
        // })
        if (i % 2 !== 0) {
            matrix[i] = matrix[i].reverse();
        }
    }
    let towelSortMatrix = [];
    for (i = 0; i < matrix.length; i++) {
        towelSortMatrix = towelSortMatrix.concat(matrix[i]);
    }
    return towelSortMatrix;
};
