const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('.textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
	// createemaillist(e.target.value);

	// createemaillist(this);
	createemaillist(this.value);

});

function createemaillist(inputtext){
	// console.log(inputtext);

	// split by (",")
	// const eitems = inputtext.split(',');
	// console.log(eitems);

	// remove empty,empty(space)
	// const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
	// console.log(eitems);

	// remove space/empty
	const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '').map(rmempty=>rmempty.trim());
	// console.log(eitems);

	getemcontainer.innerHTML = "";

	eitems.forEach(function(eitem){
		// console.log(eitem);

		const setnewspn= document.createElement('span');
		setnewspn.textContent=eitem;
		setnewspn.classList.add('email-item');
		// console.log(setnewspn);

		getemcontainer.appendChild(setnewspn);
	});

}

getbtn.addEventListener('click',function(e){
	sendemail();
	e.preventDefault();
});

function sendemail(){
	// console.log('i am working');

	const gettxtvalue = gettextarea.value;
	const getaddress = document.querySelectorAll('.email-item');
	// console.log(gettxtvalue);
	// console.log(getaddress);

	var persons =[];

	if(getaddress.length > 0 && gettxtvalue){
		getaddress.forEach(function(getaddress){
			persons.push({
				email:getaddress.textContent,
				message:gettxtvalue
			});
		});

		console.log(persons);
	}else{
		window.alert('Enter Message');
		gettextarea.focus();
	}
}