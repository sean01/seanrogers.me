$(function() {


	// warning on setting price below $1 when adding a product
	// give a class of "product" to your form tag on the product_form view
	$('form.prod-warn').on('submit', function(e) {
		var priceInput = $('input[name=price]');

		if (priceInput.val() < 1) {
			var success = confirm('You\'re setting price under $1.00 \nWould you like to continue?');
			if (!success) {
				e.preventDefault();
			}
		}
	});


	var notificationTimer = null;


	//make sure add to cart button has the add-to-cart class
	$('.add-to-cart').on('click', function(e) {
		// don't go anywhere
		e.preventDefault();

		var href = $(this).attr('href');

		$.ajax({
			method: 'get',
			dataType: 'json'
		})
			url: href,
			.done(function(data) {

				console.log(data);

				$('.cart-count').text(data.count);

				//AJAX stuff here?
				// $('.notification-cart').data()
				$('.productName').text(data.name);
				$('.productImg').attr('src', '/pokecart/' + data.image);
				$('.productLink').attr('href', '/pokecart/product/' + data.id + '/view');
				$('.productRemove').attr('href', '/pokecart/cart/remove/' + data.id + '/notification');
				$('.productPrice').text('Price: $' + data.price);
				$('.productSub').text('Cart Subtotal: $' + data.sub);
				$('.productQty').text(' (' + data.qty + ')');




				//animate css with hide
				$('.notification-cart')
					.removeClass('hide')
					.removeClass('slideOutUp')
					.addClass('slideInDown')

				clearTimeout(notificationTimer);


				//sleep 5s
				notificationTimer = setTimeout(function() {

					$('.notification-cart')
						.removeClass('slideInDown')
						.addClass('slideOutUp')
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
							if ($(this).hasClass('slideOutUp')) {
								$(this).addClass('hide');
							}
						});



				}, 5 * 1000)


			});

	});




	
	$('.remove-from-cart').on('click', function(e) {
		// don't go anywhere
		e.preventDefault();

		var href = $(this).attr('href');

		$.ajax({
			method: 'get',
			url: href,
			dataType: 'json'
		})
			.done(function(data) {

				console.log(data);

				$('.cart-count').text(data.count);
				$('.productName').text(data.name);
				$('.productImg').attr('src', '/pokecart/' + data.image);
				$('.productLink').attr('href', '/pokecart/product/' + data.id + '/view');
				$('.productRemove').attr('href', '/pokecart/cart/remove/' + data.id + '/notification');
				$('.productPrice').text('Price: $' + data.price);
				$('.productSub').text('Cart Subtotal: $' + data.sub);
				$('.productQty').text(' (' + data.qty + ')');

			});

	});


	 $('[data-toggle="tooltip"]').tooltip();

	function initialize() {
		var myLatlng = new google.maps.LatLng(-36.848460, 174.763332);

		var mapProp = {
			center: new google.maps.LatLng(-36.848460, 174.763332),
			zoom: 20,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};



		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Saffron City, Route 8'
		});
	}

	if (document.getElementById("googleMap")) {
		google.maps.event.addDomListener(window, 'load', initialize);
	};


	tinymce.init({
		selector: 'textarea'
	});


	jQuery.validator.setDefaults({
		debug: false,
		success: "valid"
	});

	$("#change-password-form").validate({
		rules: {
			password: "required",
			old_password: "required",
			repeat_password: {
				equalTo: "#password"
			}
		}
	});



	$("#login-form").validate({
		rules: {
			username: "required",
			password: "required"
		}
	});



	$("#register-form").validate({
		rules: {
			username: {
				required: true,
				minlength: 4,
				maxlength: 14
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 8
			}


		}
		
		
	});

		
   




});

