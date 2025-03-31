function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully");
    }, 1000);
}

module.exports = { fetchData };