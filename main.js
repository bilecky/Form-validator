function registration() {
	let name = document.getElementById('t1').value
	let email = document.getElementById('t2').value
	let uname = document.getElementById('t3').value
	let pwd = document.getElementById('t4').value
	let cpwd = document.getElementById('t5').value
	let gender = document.getElementById('gender').value
	let phone = document.getElementById('t7').value
	let country = document.getElementById('country').value

	//regexp
	let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
	let letters = /^[A-Za-z]+$/
	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
	let pNumb = /[0-9]{9}/

	if (name == '') {
		alert('Podaj imię')
	} else if (!letters.test(name)) {
		alert('Imię może składać się tylko z liter')
	} else if (email == '') {
		alert('Podaj adres e-mail')
	} else if (!filter.test(email)) {
		alert('Nieprawidłowy adres e-mail')
	} else if (!pNumb.test(phone)) {
		alert('Nieprawidłowy numer telefonu')
	} else if (uname == '') {
		alert('Please enter the user name.')
	} else if (!letters.test(uname)) {
		alert('User name field required only alphabet characters')
	} else if (pwd == '') {
		alert('Please enter Password')
	} else if (cpwd == '') {
		alert('Enter Confirm Password')
	} else if (!pwd_expression.test(pwd)) {
		alert('Hasło powinno składać się z conajmniej jednej małej i dużej litery, cyfry oraz znaku specjalnego')
	} else if (pwd != cpwd) {
		alert('Hasła się nie zgadzają')
	} else if (document.getElementById('t5').value.length < 6) {
		alert('Hasło powinno mieć min 6 znaków')
	} else if (document.getElementById('t5').value.length > 12) {
		alert('Maksymalna długość hasła powinna mieć maksymalnie 12 znaków')
	} else if (country == '') {
		alert('Podaj nazwę kraju!')
	} else if (gender == '') {
		alert('Wybierz płeć!')
	} else {
		alert('Twój formularz został poprawnie wysłany')
		window.location.reload()
	}
}
function clearFunc() {
	document.getElementById('t1').value = ''
	document.getElementById('t2').value = ''
	document.getElementById('t3').value = ''
	document.getElementById('t4').value = ''
	document.getElementById('gender').value = ''
	document.getElementById('t7').value = ''
	document.getElementById('country').value = ''
}
