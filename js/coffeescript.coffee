# console.time('Duration')

do ($ = jQuery) ->
    App =
        init: ->
            this.cacheElement()
            this.bindEvents()
            return

        cacheElement: ->
            this.foo = $('#foo')
            return

        bindEvents: ->
            this.foo.click(this.clickMe)
            return

        clickMe: (event) ->
            event.preventDefault()
            alert "Click me!"
            return


    App.init()
    return

# console.timeEnd('Duration')