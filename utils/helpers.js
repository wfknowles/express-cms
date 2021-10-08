module.exports = {
    isSame: (value1, value2) => {
        return value1 === value2;
    }
    // format_date: date => {
    //   return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
    //     date
    //   ).getFullYear()}`;
    // },
    // format_url: url => {
    //   return url
    //     .replace('http://', '')
    //     .replace('https://', '')
    //     .replace('www.', '')
    //     .split('/')[0]
    //     .split('?')[0];
    // },
    // format_plural: (word, amount) => {
    //   if (amount !== 1) {
    //     return `${word}s`;
    //   }
  
    //   return word;
    // }
};

// // iterate over array and mix in variables
// hbs.handlebars.registerHelper('eachWith', function ( array, options ) {
//     let contentString = "";
//     let eachArray = [];

//     // iterate over array and push to eachArray
//     for (const object of array) {
//         eachArray.push(object);
//     };

//     if ( eachArray && eachArray.length > 0 ) {
//         // iterate over eachArray
//         for (const [i, obj] in eachArray) {

//             // add option to object and add to return string
//             for (const [k, v] of Object.entries(options.hash)) {
//                 // set options to data object
//                 eachArray[i][k] = v;
//                 // add options to contentString
//                 contentString = contentString + options.fn(eachArray[i]);
//             }
//         }
//     } else {
//         contentString = options.inverse(this);
//     }

//     return contentString;
// });