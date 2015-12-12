
function filterEvent(data){

	console.log(data);
	
	Event_name = document.getElementById('Event_name2');
	Address = document.getElementById('Address2');
	Zipcode = document.getElementById('Zipcode2');
	date = document.getElementById('Date2');
	Info = document.getElementById('Description2');
	Photo= document.getElementById('Photo2');
	//Preview = document.getElementById('Preview');

	if(document.getElementById("Event_name2") != null){
    	Event_name.innerHTML = Event_name.innerHTML + data.Event_name;
	}
	if(document.getElementById("Address2") != null){
    	Address.innerHTML = Address.innerHTML + data.Address;
	}
	if(document.getElementById("Zipcode2") != null){
    	Zipcode.innerHTML = Zipcode.innerHTML + data.Zipcode;
	}
	if(document.getElementById("Date2") != null){
    	date.innerHTML = date.innerHTML + data.Date;
	}
	if(document.getElementById("Description2") != null){
    	Info.innerHTML = Info.innerHTML + data.Info;
	}
	if(document.getElementById("Photo2") != null){
    	Photo.src = data.Photo;
	}

	//Preview.innerHTML = Preview.innerHTML + data.Preview;

}

function filterAllEvent(data){

	console.log(data);
	createEventlist(data);

	Event_name = document.getElementById('Event_name2');
	Address = document.getElementById('Address2');
	Zipcode = document.getElementById('Zipcode2');
	date = document.getElementById('Date2');
	Info = document.getElementById('Description2');
	Photo= document.getElementById('Photo2');
	//Preview = document.getElementById('Preview');

	for( var i=0, l=data.length; i<l; i++ ) {

		var idstr = document.getElementById(i).id;
		console.log(idstr);

    	var head = document.createElement("h1");
    	head.id = Event_name+[i];
    	document.getElementById("linkevent").appendChild(head);
    	console.log(head.id);

    	var para = document.createElement("p");
    	para.id = Date+[i];
    	document.getElementById("linkevent").appendChild(para);
    	console.log(para.id);

    	var pic = document.createElement("img");
    	pic.id = Photo+[i];
    	pic.src = "";
    	document.getElementById("linkevent").appendChild(pic);
    	console.log(pic.id);
    	console.log(pic.src);


		if(document.getElementById("Event_name2") != null){
	    	Event_name.innerHTML = Event_name.innerHTML + data[i].Event_name;
		}
		if(document.getElementById("Address"+i) != null){
	    	Address.innerHTML = Address.innerHTML + data[i].Address;
		}
		if(document.getElementById("Zipcode2") != null){
	    	Zipcode.innerHTML = Zipcode.innerHTML + data[i].Zipcode;
		}
		if(document.getElementById("Date2") != null){
	    	date.innerHTML = date.innerHTML + data[i].Date;
		}
		if(document.getElementById("Description2") != null){
	    	Info.innerHTML = Info.innerHTML + data[i].Info;
		}
		if(document.getElementById("Photo2") != null){
	    	Photo.src = data[i].Photo;
		}

		//Preview.innerHTML = Preview.innerHTML + data.Preview;
	}
	
}

function createEventlist(data){

	for( var i=0, l=data.length; i<l; i++ ) {

		var a = document.createElement("a");
		a.id = i
		a.href = "/show_event"
    	document.getElementById("flow").appendChild(a);

	}

}
