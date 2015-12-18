
// Puts the data from the obj you get from the event in db, into the rigth place on page
function filterEvent(data){

	Event_name = document.getElementById('Event_name2');
	Address = document.getElementById('Address2');
	Zipcode = document.getElementById('Zipcode2');
	date = document.getElementById('Date2');
	Info = document.getElementById('Description2');
	Photo= document.getElementById('Photo2');

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
}

// Puts the data from the all obj you get from the all events in db, into the rigth place on page
function filterAllEvent(data){

	createEventlist(data);

	for( var i=0, l=data.length; i<l; i++ ) {

    	var head = document.createElement("h1");
    	head.id = "Event_name"+i;
    	document.getElementById("a"+i).appendChild(head);

    	var para = document.createElement("p");
    	para.id = "Date"+i;
    	document.getElementById("a"+i).appendChild(para);

    	var pic = document.createElement("IMG");
    	pic.className="top-imgbottom";
    	pic.id = "Photo"+i;
    	pic.src = "";
    	document.getElementById("a"+i).appendChild(pic);

    	Event_name = document.getElementById('Event_name'+[i]);
		date = document.getElementById('Date'+[i]);
		Photo= document.getElementById('Photo'+[i]);

		if(document.getElementById("Event_name"+[i]) != null){
	    	Event_name.innerHTML = Event_name.innerHTML + data[i].Event_name;
		}
		if(document.getElementById("Date"+[i]) != null){
	    	date.innerHTML = date.innerHTML + data[i].Date;
		}
		if(document.getElementById("Photo"+[i]) != null){
	    	Photo.src = data[i].Photo;
		}
	}
}

function createEventlist(data){

	// For every event you get from the db it creates a link to that event

	for( var i=0, x=1, l=data.length; i<l; i++, x++) {
		
		/*
		var div = document.createElement("div");
		div.id = flow2;
		div.className = "col-xs-10 col-sm-3 panel panel-default";
		document.getElementById("flow1").appendChild(div);
		*/

		var a = document.createElement("a");
		a.id = "a"+i;
		a.className=x;
		a.onclick=function(){redirect(this.className)};
		console.log(a);
    	document.getElementById("flow").appendChild(a);

	}

}

