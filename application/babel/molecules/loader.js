$(document).ready(function() {
  Identity.work()

  //  JPRELOADER INIT
  $('body').jpreLoader({
    showSplash: false,
    showPercentage: false,
    loaderVPos: 0,
    splashVPos: 0
  }, function() {
    Router.route(undefined, function() {

      //  CALLBACK
      Router.listen()
      setTimeout(function() {
        $('#signature').removeAttr('class')
      }, 500)
    })
  })
})
