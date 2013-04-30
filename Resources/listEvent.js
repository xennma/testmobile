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
	var url = 'http://www.xenn.com/mobile/test.php';
	client.open('POST',url);
	
	client.onload = function(){
		var json = this.responseText;
		var responses = JSON.parse(json);
		table.setData([]);
		
		for (var i=0; i < responses.length; i++) {
			var row = Ti.UI.createTableViewRow({
			 	height: '60dp',
			 });
			 
			var nameLabel = Ti.UI.createLabel({
            text:responses[i].name,
            font:{
                fontSize:'24dp',
            	fontWeight:'bold'
	        	},
	        height:'auto',
	        left:'10dp',
	        top:'5dp',
	        color:'#000',
	        });
	        
	        var catLabel = Ti.UI.createLabel({
	        text:'"' + responses[i].category + '"',
	        font:{
	            fontSize:'16dp'
	        },
	        height:'auto',
	        left:'15dp',
	        bottom:'5dp',
	        color:'#000',
	        touchEnabled:false
	        });
        
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


win.add(table);
win.add(btn);
win.add(btn1);

win.open();
