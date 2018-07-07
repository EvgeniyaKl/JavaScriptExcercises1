
 var types = ['years', 'months', 'days', 'hours', 'minutes'];

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
 var dateValue = new Date(date); // приводим входную строку к формату date 

 var createdObject =  {

    sourceDate: dateValue,

    add: function (number, type) {
        this.checkInput(number, type);
        return this.changeDate(number, type);
    },
    
    subtract: function (number, type) {
        this.checkInput(number, type);
        return this.changeDate(-1 * number, type);
    },

    checkInput: function (number, type) {
        if (number < 0 || types.indexOf(type) === -1) {
            throw new TypeError('передано неверное значение');
        }
    },

    changeDate: function (number, type) {
        if (type == 'years') {
            this.sourceDate.setFullYear(this.sourceDate.getFullYear() + number);
        } else if (type == 'months') {
            this.sourceDate.setMonth(this.sourceDate.getMonth() + number);
        } else if (type == 'days') {
            this.sourceDate.setDate(this.sourceDate.getDate() + number);
        } else if (type == 'hours') {
            this.sourceDate.setHours(this.sourceDate.getHours() + number);
        } else if (type == 'minutes') {
            this.sourceDate.setMinutes(this.sourceDate.getMinutes() + number);
        }

        this.value = this.formatedDate(this.sourceDate);
        return this;
    },

    formatedDate: function (formatDate) { //функция для приведения даты к формату, который требуется вернуть
            // Вернуть надо в формате YYYY‒MM‒DD HH:SS
            var year = formatDate.getFullYear();
            var month = this.formatNumber(formatDate.getMonth() + 1);
            var day = this.formatNumber(formatDate.getDate());
            var hour = this.formatNumber(formatDate.getHours());
            var minutes = this.formatNumber(formatDate.getMinutes());

           return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
    },

    formatNumber: function(sourceNumber){
        return sourceNumber < 10 ? '0' + sourceNumber : sourceNumber;
    }
  };

  createdObject.value = createdObject.formatedDate(createdObject.sourceDate);

  return createdObject;
};
