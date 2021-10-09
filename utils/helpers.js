module.exports = {
    isSame: (value1, value2) => {
        return value1 === value2;
    },
    serverLog: obj => {
        console.log('serverLog', obj);
        return;
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
    }

};