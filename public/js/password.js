updateFeedback = (isLower, isUpper, isNumeric, isSpecial, isLong) => {

    const ids = ['#req-lower', '#req-upper', '#req-number', '#req-special', '#req-length'];
    const feedback = [isLower, isUpper, isNumeric, isSpecial, isLong];

    feedback.forEach(function (state, i) {
        if (state) {
            // is state?
            $(ids[i]).addClass('custom-green');
        } else {
            // is not state?
            $(ids[i]).removeClass('custom-green');
        }
    });
}

$(document).on('input', '#user-password', function (e) {

    const currentPassword = $(this).val().trim();

    // check for lower
    const isLower = /[a-z]/.test(currentPassword);

    // check for upper
    const isUpper = /[A-Z]/.test(currentPassword);

    // check for numeric
    const isNumeric = /\d/.test(currentPassword);

    // make sure its lit
    const isSpecial = /[!@#$%^&*()+=?\]{}:;.]/.test(currentPassword);

    // check for length
    const isLong = /.{8,16}/.test(currentPassword);

    updateFeedback(isLower, isUpper, isNumeric, isSpecial, isLong);

})