/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var arr = tweet.split (' ');
    var arrWords = [];

 for (var i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('#') ) {
arrWords.push(arr[i].slice(1));

    }
 }
 return arrWords;
}