module.exports = {
    array: (...options) => {
        options.pop();
        return options;
    },
    isSame: (value1, value2) => {
        return value1 === value2;
    },
    logger: (label, obj) => {
        console.log(`\nlogger[${label}]`, obj, '\n');
        return;
    },
    isHome: view => {
        if (view == 'home') {
            return true;
        }
        return false;
    },
    isDashboard: view => {
        if (view == 'dashboard') {
            return true;
        }
        return false;
    },
    isHomeOrDashboard: view => {
        if (view == 'home' || view == 'dashboard') {
            return true;
        }
        return false;
    },
    upperCase: string => {
        return string.toUpperCase();
    },
    anchorEl: (text, href, attr) => {
        if (text && href) {
            let html = `<a href="${href}"`;
            if (attr) {
                html += ` ${attr}`;
            }
            html += `>${text}</a>`;
            return html;
        }
        return false;
    },
    ternaryOp: (condition, pass, fail) => {
        return condition ? pass : fail;
    },
    relativePath: (string) => {
        return `/${string}`;
    },
    eachWith: (array, options) => {
        let contentString = "";
        let eachArray = [];

        // iterate over array and push to eachArray
        for (const object of array) {
            eachArray.push(object);
        };

        if ( eachArray && eachArray.length > 0 ) {
            // iterate over eachArray
            for (const [i, obj] in eachArray) {

                // add option to object and add to return string
                for (const [k, v] of Object.entries(options.hash)) {
                    // set options to data object
                    eachArray[i][k] = v;
                    // add options to contentString
                    contentString = contentString + options.fn(eachArray[i]);
                }
            }
        } else {
            contentString = options.inverse(this);
        }

        return contentString;
    },
    setContext: (options) => {
        let contentString = "";
        let eachArray = [];

        // iterate over array and push to eachArray
        for (const object of array) {
            eachArray.push(object);
        };

        if ( eachArray && eachArray.length > 0 ) {
            // iterate over eachArray
            for (const [i, obj] in eachArray) {

                // add option to object and add to return string
                for (const [k, v] of Object.entries(options.hash)) {
                    // set options to data object
                    eachArray[i][k] = v;
                    // add options to contentString
                    contentString = contentString + options.fn(eachArray[i]);
                }
            }
        } else {
            contentString = options.inverse(this);
        }

        return contentString;
    },
    isCurrentUser: (currentUserId, id) => {
        if (currentUserId == id) {
            return true;
        }
        return false;
    },
    isUsers: (user_id, id) => {
        if (user_id == id && user_id != undefined) {
            return true;
        }
        return false;
    }

};