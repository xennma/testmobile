/*
 * HTML Application Template:
 * A basic starting point for your application.  Mostly a blank canvas with a web view.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later'); 
} else {
	//require and open top level UI component
	//var ApplicationWindow = require('ui/ApplicationWindow');
	//new ApplicationWindow().open();
	var win = Titanium.UI.createWindow({
		title: 'Mi app',
		backgroundColor: '#223344',
	});
	
	var btn = Titanium.UI.createButton({
			title: 'Hello World',
			width: 100,
			top: 10,
	});
	
	btn.addEventListener('click', function(){
		var win1 = Ti.UI.createWindow({
						title: 'Hello World',
						url: 'hello.js',
					});
		win1.open();
	});
	
	var btn1 = Titanium.UI.createButton({
			title: 'List Event',
			width: 100,
			top: 50,
	});
	
	btn1.addEventListener('click', function(){
		var win2 = Ti.UI.createWindow({
						title: 'List Event',
						url: 'listEvent.js',
					});
		win2.open();
	});
	
	var btn2 = Ti.UI.createButton({
		title: 'Form',
		width: '100',
		top: 90,
	}); 
	btn2.addEventListener('click', function(){
	var win3 = Ti.UI.createWindow({
						title: 'Form',
						url: 'form.js',
					});
		win3.open();
	});
	
	var btn3 = Ti.UI.createButton({
		title: 'Video',
		width: '100',
		top: 130,
	}); 
	btn3.addEventListener('click', function(){
	var win4 = Ti.UI.createWindow({
						title: 'Video',
						url: 'video.js',
					});
		win4.open();
	});
	
	var btn4 = Ti.UI.createButton({
		title: 'Camera',
		width: '100',
		top: 170,
	}); 
	btn4.addEventListener('click', function(){
	var win5 = Ti.UI.createWindow({
						title: 'Camera',
						url: 'camera.js',
					});
		win5.open();
	});
	
	var btn5 = Ti.UI.createButton({
		title: 'Map',
		width: '100',
		top: 210,
	}); 
	btn5.addEventListener('click', function(){
	var win5 = Ti.UI.createWindow({
						title: 'Map',
						url: 'map.js',
					});
		win5.open();
	});
		
	win.add(btn);
	win.add(btn1);
	win.add(btn2);
	win.add(btn3);
	win.add(btn4);
	win.add(btn5);
	win.open();
	
}
