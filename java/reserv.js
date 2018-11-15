const $ = x => document.querySelector(x);

var adder = []
/*-shows the result-*/
function display(){
	$('.list-wrapper').innerHTML= '';
	adder.forEach((x,i)=>{
		$('.list-wrapper').innerHTML += '<li class="list-item"><div class="list-item-content"><h3>'+x.name+'</h3><p>'+x.phone+'</p><p>'+x.person+'</p><p>'+x.order+'</p></div><div class="delete-wrapper"><button class="delete" onclick="del('+i+')">x</button></div></li>';
	})
}
/*- submition of information -*/
function submit(){
	var name = $('#fullname').value;
	var phone = $('#phone').value;
	var person = $('#person').value;
	var order = $('#order').value;

	if(name.length !==0 && phone.length !== 0 && person.length !== 0 && order.length !== 0){
		adder.push({name:name, phone:phone, person:person, order: order});
		display();
		clear();  
	}else{
		alert("Please, fill in the form")
	}
}

function clear(){
	$('#fullname').value='';
	$('#phone').value='';
	$('#person').value='';
	$('#order').value='';
}

function del(i){
	adder = adder.filter(function(x,index){
		if (i === index){
			return false;
		}else{
			return true;
		}
	});

	display();
}

