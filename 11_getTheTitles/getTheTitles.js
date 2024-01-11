const getTheTitles = function(books) {
    const titles = books.reduce((title, item) => {
        title.push(item.title);
        return title;
    }, []); // initializes title as a blank array
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
