const getimageboxes = document.querySelectorAll('.imgbox');
// console.log(getimageboxes);

getimageboxes.forEach(function(getimagebox,idx){
	// console.log(getimagebox,idx);

	getimagebox.addEventListener('click',function(){
		// console.log(idx);

		showbox(idx);
	});
});


function showbox(idx){
	console.log(idx);

	getimageboxes.forEach(function(getimagebox,curidx){
		// console.log(curidx);

		if (idx === curidx) {
			getimagebox.classList.add('show');

			getimagebox.addEventListener('click',function(e){
				if(e.target.className === 'btn-close'){
					getimagebox.classList.remove('show');
				}


				if (e.target.className === 'btn'){
					getimagebox.querySelector('.btn').textContent="Subscribed";
				}
			});
		}else{
			getimagebox.classList.remove('show');
		}
	});
}