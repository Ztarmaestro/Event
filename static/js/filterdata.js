
function filterEvent(data){

	console.log(data);
	
	Event_name = document.getElementById('Event_name');
	Address = document.getElementById('Address');
	Zipcode = document.getElementById('Zipcode');
	date = document.getElementById('Date');
	Info = document.getElementById('Info');
	Preview = document.getElementById('Preview');


	Event_name.innerHTML = printDiv.innerHTML + data.Event_ID;
	Address.innerHTML = printDiv.innerHTML + data.Address;
	Zipcode.innerHTML = printDiv.innerHTML + data.Zipcode;
	date.innerHTML = printDiv.innerHTML + data.date;
	Info.innerHTML = printDiv.innerHTML + data.Info;
	Preview.innerHTML = printDiv.innerHTML + data.Preview;

/*	
	Event_name = document.getElementById('Event_name');
	Address = document.getElementById('Address');
	Zipcode = document.getElementById('Zipcode');
	date = document.getElementById('Date');
	Info = document.getElementById('Info');
	User = document.getElementById('User');
	Event_id = document.getElementById('Event_ID');
	Preview = document.getElementById('Preview');
	

	Event_name.innerHTML = data.Event_name;
	Address.innerHTML = data.Address;
	Zipcode.innerHTML = data.Zipcode;
	date.innerHTML = data.date;
	Info.innerHTML = data.Info;
	User.innerHTML = data.User;
	Event_id.innerHTML = data.Event_ID;
	Preview.innerHTML = data.Preview;

	console.log(data.Event_ID);
	console.log(data.Event_name);
	*/

}