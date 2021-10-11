module.exports = {
    array: (...options) => {
        options.pop();
        return options;
    },
    isSame: (value1, value2) => {
        return value1 === value2;
    },
    serverLog: (label, obj) => {
        console.log(`\nserverLog[ ${label} ]:`, obj, '\n');
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
    setSession: (context, options) => {
        // create @session object
        const session = {
            loggedIn: options.hash.session.loggedIn,
            currentUser: options.hash.session.currentUser
        }

        // add to template data
        options.data['session'] = session;

        // return html string
        return options.fn(context);

    },
    eachWithSession: (context, options) => {

        // initialize html string
        let htmlString = "";

        // create @session object
        const session = {
            loggedIn: options.hash.session.loggedIn,
            currentUser: options.hash.session.currentUser
        }

        // add to template data
        options.data['session'] = session;

        // build htmlString
        for (const object of context) {
            htmlString += options.fn(object);
        }

        return htmlString;
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
    },
    isEmpty: obj => {
        if (obj.length > 0) {
            return true;
        }
        return false;
    },
    getExcerpt: text => { 
        return `${text.replace(/(<([^>]+)>)/gi, "").substring(0, 296)} ...`;
    },
    getCount: obj => {
        return obj.length;
    },
    pluralize: obj => {
        if (obj.length > 1) {
            return 's';
        }
        return '';
    },
    inspect: obj => {
        console.log('serverLog[ inspect ]', obj);
        return obj;
    }

};