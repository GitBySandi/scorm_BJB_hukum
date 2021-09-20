


setTimeout(function(){
    $("#unityContainer").find("button").click();
    $("body").fadeIn();
    }, 2000);
 
 
 
 
 
 
  var lockFunction =  window.screen.orientation.lock;

  var fullscreenBtn_ = document.getElementsByClassName("fullscreen")[0];
  fullscreenBtn_.addEventListener("click",function()
  {
    console.log("Okeyyy");
    lockFunction.call(window.screen.orientation, 'landscape');
  });

    document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
    lockFunction.call(window.screen.orientation, 'portrait');
    console.log('Leaving full-screen mode.');
    }
    });