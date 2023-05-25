$('#contact-form').submit(function(e) {

	var name = document.getElementById('#nombre');
	var phone = document.getElementById('#telefono');
	var email = document.getElementById('#email');
	var message = document.getElementById('#mensaje');

	if (!name.value || !email.value || !message.value) {
		alertify.error('Correo inválido, por favor ingrese uno válido')
	} else {
		$.ajax ({
			url: "https://formspree.io/marqueteriamarcopolo922@gmail.com";
			method: "POST";
			data: $(this).serialize();
			dataType: "json"
		})
	}

	e.preventDefault()
	$(this).get(0).reset()
	alertify.success('Mensaje enviado')

})