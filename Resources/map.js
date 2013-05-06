var win = Titanium.UI.createWindow({
	title: 'Map',
	backgroundColor: '#333',
	
});

var mapview = Titanium.Map.createView({
	top:40,
	height:300,
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{ 
		latitude:-1.6734849, 
		longitude:-78.647992, 
		latitudeDelta:0.5, 
		longitudeDelta:0.5
		},
	animate:true,
	regionFit:true,
	userLocation:true	
});

var anotation = Titanium.Map.createAnnotation({
		latitude: -1.6610631603680994,
		longitude: -78.65212082862854,
		title:"Riobamba Ec.",
		subtitle:'Fabian Villa\nIng. en Sistemas',
		animate:true,
		leftButton:'../images/xenn/user.png',
		rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
		pincolor:Titanium.Map.ANNOTATION_RED,
		myid:3 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	});
	
	mapview.addAnnotation(anotation);

var closeButton = Ti.UI.createButton({
        title : "Back",
        top : "10dp",
        height : "40dp",
        width: 60
    });

    closeButton.addEventListener('click', function() {
    	win.close();    	
        var win1 = Ti.UI.createWindow({
						title: 'Home',
						url: 'app.js',
					});
		win1.open();
    });

mapview.addEventListener('click', function(evt) {

    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);

    // Check for all of the possible names that clicksouce
    // can report for the left button/view.
    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||
        evt.clicksource == 'leftView') {
        Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
    
   
});

win.add(mapview);
win.add(closeButton);
win.open();
