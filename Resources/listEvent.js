var win = Ti.UI.createWindow({
	title: 'List Event',
	backgroundColor: '#333'
});


var btn = Ti.UI.createButton({
	title: 'Lasted',
	width: 80,
	top: 10,
});

var table = Ti.UI.createTableView({
	top: 90,
	backgroundColor: '#ffffff',
});
var tableData = [];
btn.addEventListener('click', function(){	
	var client = Ti.Network.createHTTPClient();
	var domain = 'http://www.ticr.com/';
	var url = domain + 'index.php?option=com_mobile';
	client.open('POST',url);
	
	client.onload = function(){
		var json = this.responseText;
		var responses = JSON.parse(json);
		table.setData([]);
		
		for (var i=0; i < responses.length; i++) {
			var row = Ti.UI.createTableViewRow({
			 	height: '60dp',
			 	touchEnabled: true,
			 	rowIndex:i,
			 	link: domain + responses[i].streamer,
			 });
			 
			var nameLabel = Ti.UI.createLabel({
            text:responses[i].title,
            font:{
                fontSize:'14dp',
            	fontWeight:'bold'
	        	},
	        height:'auto',
	        left:'70dp',
	        top:'5dp',
	        color:'#000',
	        link: domain + responses[i].streamer,
	        });
	        
	        var catLabel = Ti.UI.createLabel({
	        text:'"' + responses[i].category_title + '"',
	        font:{
	            fontSize:'12dp'
	        },
	        height:'auto',
	        left:'75dp',
	        bottom:'5dp',
	        color:'#000',
	        touchEnabled:false,
	        link: domain + responses[i].streamer,
	        });
        
        	var image = Ti.UI.createImageView({
        		image: domain + responses[i].thumbnail,
        		width: 40,
        		height: 30,
        		left: '8dp',
        		top: '10dp',
        		link: domain + responses[i].streamer,
        	});
                	
        	row.add(image);
	        row.add(nameLabel);
	        row.add(catLabel);        
	        tableData.push(row);
		};
		table.setData(tableData);
	//	textField.value = response.name;
	};
	client.onerror = function(e){alert('Transmission error: ' + e.error);};
	client.send();
	btn.enabled = false;
});

var btn1 = Ti.UI.createButton({
	title: 'Back',
	width: '50',
	top: 50,
});

btn1.addEventListener('click', function(){
	var win1 = Ti.UI.createWindow({
						title: 'Home',
						url: 'app.js',
					});
	win1.open();
});

table.addEventListener('click', function(e){
	alert(e.source.link);
});

win.add(table);
win.add(btn);
win.add(btn1);

win.open();
