
  //var tag = document.createElement('script');
	//tag.src = "//player.vimeo.com/api/player.js";
	//var firstScriptTag = document.getElementsByTagName('script')[0];
	//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 
	var player;
  var muteStatusvid;
  
	//$( document ).ready(function() { 
	

      
       var voptions = {
        id: 732927849,
        width: 760,
      	height: 427,
        loop: false,
      	autoplay: 0,
      	title: 0,
      	byline: 0,
      	portrait: 0,
      	muted: 0,
		controls: 0 
		
    };
    
    player = new Vimeo.Player('player', voptions);     
    
/*	

    player.ready().then(function() {
      console.log("the player is ready");
		}); 
    
    player.on('play', function(data) {
      //console.log("the video is played");
      $("#loadingVideo").hide();
		});
     
*/	 
	 
	 
	 
    function mutevideo() { 
      player.setVolume(0);
      muteStatusvid = 1;
  	}

    function unmutevideo() { 
        player.setVolume(1);
        muteStatusvid = 0;
    }

    function resetvideo() {
        /*$("#loadingVideo").hide();*/
        $(".cov").show();
        player.pause();
        unmutevideo();
        player.seekTo(0);
    }
    
    $(".cov").click(function() {
    	player.play();
    	$(".cov").hide(); 
		});
		
    $(".covall").click(function() {
    	player.pause();
    	$("#cfs").hide();
    	$(".cov").show();
		});
    
		$("#cfs").click(function() {
    	player.play();
    	$("#cfs").hide();
      
  	});


   player.on('ended', function() {
   player.destroy();  
    $(".covend").show();
     
});

   
   
   
   
   
    
//});
