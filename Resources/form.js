Ti.UI.backgroundColor = '#ddd';

var forms = require('forms');
var fields = [
	{ title:'Name', type:'text', id:'name' },
	{ title:'Email', type:'email', id:'email' },
	{ title:'Address', type:'text', id:'address' },
	{ title:'City', type:'text', id:'city' },
	{ title:'State', type:'picker', id:'state', data: [
		'Alabama', 'Alaska', 'Arizona',	'Arkansas',
		'California', 'Colorado', 'Connecticut', 'Delaware',
		'Florida', 'Georgia', 'Hawaii',	'Idaho',
		'Illinois',	'Indiana', 'Iowa', 'Kansas',
		'Kentucky',	'Louisiana', 'Maine', 'Maryland',
		'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
		'Missouri',	'Montana', 'Nebraska', 'Nevada',
		'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
		'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
		'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
		'South Dakota', 'Tennessee', 'Texas', 'Utah',
		'Vermont', 'Virginia', 'Washington', 'West Virginia' 
	] },
	{ title:'Zip Code', type:'number', id:'zip' },
	{ title:'Phone', type:'phone', id:'phone' },
	{ title:'Password', type:'password', id:'password' },
	{ title:'Birthday', type:'date', id:'birthday' },
	{ title:'Submit', type:'submit', id:'registerUser' }
];

var win = Ti.UI.createWindow({
	title: 'Hello World!',
	backgroundColor: 'white',
});
var form = forms.createForm({
	style: forms.STYLE_LABEL,
	fields: fields
});
form.addEventListener('registerUser', function(e) {
	
	var client = Ti.Network.createHTTPClient();
	var domain = 'http://www.ticr.com/';
	var url = domain + 'index.php?option=com_mobile&task=email';
	client.open('POST',url);
	
	client.onload = function(){
		var json = this.responseText;
		var responses = JSON.parse(json);
		
		alert (responses.message);
		
		var win1 = Ti.UI.createWindow({
						title: 'Home',
						url: 'app.js',
					});
			win1.open();
	}
	client.onerror = function(e){alert('Transmission error: ' + e.error);};
	client.send({
		'name': e.values.name,
		'email': e.values.email,
		'address': e.values.address,
		'city': e.values.city,
		'state': e.values.state,
		'zip': e.values.zip,
		'phone': e.values.phone,
		'password': e.values.password,
		'birthday': e.values.birthday,
	});
	
});
win.add(form);
win.open();