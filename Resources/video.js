Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.createWindow({
    title : 'Test',
    backgroundColor : '#fff',
    exitOnClose : true
});

// Change to a valid URL
var contentURL = "http://www.ticr.com/videowhisperstreamsave/sample.mp4";

var openButton = Ti.UI.createButton({
    title : "Start Video",
    top : "10dp",
    height : "40dp",
    width: 50
});

openButton.addEventListener('click', function() {
    var activeMovie = Titanium.Media.createVideoPlayer({
        url : contentURL,
        backgroundColor : 'blue',
        movieControlMode : Titanium.Media.VIDEO_CONTROL_DEFAULT,
        scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
        fullscreen : true,
        autoplay : true
    });

    var closeButton = Ti.UI.createButton({
        title : "Exit Video",
        top : "0dp",
        height : "40dp",
        width: 60
    });

    closeButton.addEventListener('click', function() {
        activeMovie.hide();
        activeMovie.release();
        activeMovie = null;
    });
    
    activeMovie.add(closeButton);
});

var btn = Titanium.UI.createButton({
			title: 'Back',
			top : "60dp",
    		height : "40dp",
    		width: 50
			
	});
	
	btn.addEventListener('click', function(){
		var win1 = Ti.UI.createWindow({
						title: 'Home',
						url: 'app.js',
					});
		win1.open();
	});
	

win.add(btn);
win.add(openButton);
win.open();