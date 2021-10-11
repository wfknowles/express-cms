// on page load
$( document ).ready(function() {

    // get browser height
    const docHeight = $(document).height();

    // get content height
    const contentHeight = $('html').height();

    // if browser is larger than the content
    if (docHeight > contentHeight) {

        // get header height
        const headerHeight = $('header').height();
        const footerHeight = $('footer').height();
        const mainHeight = docHeight - headerHeight - footerHeight;

        // resize main content
        $('main').height(mainHeight);
    }
});