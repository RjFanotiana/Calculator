function insert(num){
			
			let txt = document.forms[0].textview

			txt.value= txt.value + num

		}

function equal(){
	let inp = document.forms[0].textview.value 
	document.forms[0].textview.value = eval(inp)
}


function c(){
	document.forms[0].textview.value = ""

}

function supr(){
	let txt = document.forms[0].textview.value
	let l = txt.length
	document.forms[0].textview.value = txt.substr( 0 , l-1)
}