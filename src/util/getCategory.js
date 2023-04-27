export function getCategory(arr, type) {
    let cate = [];
    let result = [];
    for (let items of arr) {
        for (let [key, value] of Object.entries(items)) {
            if (key === type) {
                cate.push(value);
            }
        }
    };
    for (let i = 0; i < cate.length; i++) {
        if (cate[i] !== cate[i + 1]) {
            result.push(cate[i]);
        }
    }
    return getUniqTags(result);
}

function getUniqTags(tags) {
    var results = [];

    tags.forEach(function (value) {
        value = value.trim();

        if (results.indexOf(value) === -1) {
            results.push(value);
        }
    });

    return results; 
}