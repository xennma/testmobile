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
			top: 60,
	});
	
	btn1.addEventListener('click', function(){
		var win2 = Ti.UI.createWindow({
						title: 'List Event',
						url: 'listEvent.js',
					});
		win2.open();
	});
	
		
	win.add(btn);
	win.add(btn1);
	win.open();
	
}
