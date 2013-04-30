	var win = Titanium.UI.createWindow({
		title: 'Hello World!',
		backgroundColor: '#223344',
	});
	
	var text = Titanium.UI.createLabel({
		text: 'Hello world!',
		font: {fontSize: 48}
	});
	
	var imagen = Titanium.UI.createImageView({
		image: 'http://www.ticr.com/images/logo.png',
		top: 0,
		
	});
	imagen.addEventListener('click',function(){
		alert('Hello from Ticr');		
		});
		
	var btn = Titanium.UI.createButton({
			title: 'Back',
			width: 50,
			top: 250,
	});
	
	btn.addEventListener('click', function(){
		var win1 = Ti.UI.createWindow({
						title: 'Home',
						url: 'app.js',
					});
		win1.open();
	});
	
	win.add(btn);

	win.add(imagen);
	win.add(text);
	win.open();