// console.time('Duration');

(function ($) {

    var App = {
        init: function () {
            this.cacheElements();
            this.bindEvents();
        },
        cacheElements: function () {
            this.foo = $('#foo');
        },
        bindEvents: function () {
            this.foo.click(this.clickMe);
        },
        clickMe: function (event) {
            event.preventDefault();
            console.log("click me!");
        }
    };

    App.init();

})(jQuery);

// console.timeEnd('Duration');