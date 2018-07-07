/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    var arrOfUniqueHashtag = [];

    for (var i = 0; i < hashtags.length; i++) {
        var a = hashtags[i].toLowerCase();

        function isEqual (b) {
            return b == a;
        }

        if (!arrOfUniqueHashtag.some (isEqual)) {
            arrOfUniqueHashtag.push(a);  
         }

    }
return arrOfUniqueHashtag.join (', ') ;

};

