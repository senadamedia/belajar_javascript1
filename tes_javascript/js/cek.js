function isiKosong1() {
	//tangkap id form
	var f = document.getElementById('formulir');
	f.username.value = "";
}

function isiKosong2() {
	//tangkap id form
	var f = document.getElementById('formulir');
	f.password.value = "";
}

function authentication() {
	//tangkap id form
	var f = document.getElementById('formulir');
	var uname = f.username.value;
	var pass = f.password.value;
	//cek username dan password

	if (uname == 'admin' && pass == 'admin') {
		alert ('Hello ' + uname + ', selamat datang');
	}
	else if (uname == '123456' && pass == '123456') {
		alert ('Hello ' + uname + ', selamat datang');
	}
	else {
		alert ('Maaf login anda gagal, silahkan coba lagi');
	}
}