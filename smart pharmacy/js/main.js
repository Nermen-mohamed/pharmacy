 
(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		$('.pro-features .get-pro').on( "click", function(){
			$('.pro-features').toggleClass('active');
		});
		
		/*====================================
			Search JS
		======================================*/ 
		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});
		
		/*===============================
			Hero Slider JS
		=================================*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/ 
		$('.testimonial-slider').owlCarousel({
			items:3,
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				1: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*===============================
			Portfolio Slider JS
		=================================*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			margin:15,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*=====================================
			Counter Up JS
		======================================*/
		$('.counter').counterUp({
			delay:20,
			time:2000
		});
		
		/*===============================
			Clients Slider JS
		=================================*/ 
		$('.clients-slider').owlCarousel({
			items:5,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*====================================
			Single Portfolio Slider JS
		======================================*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});
		
		/*===================
			Accordion JS
		=====================*/ 
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function(j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});
		
		/*====================================
			Nice Select JS
		======================================*/ 	
		$('select').niceSelect();
		
		/*=====================================
			Date Picker JS
		======================================*/ 
		$( function() {
			$( "#datepicker" ).datepicker();
		} );
		
		
		
		/*===============================
			Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*===============================
			Right Bar JS
		=================================*/ 
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
		
		/*=====================
			Video Popup JS
		=======================*/ 
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		/*================
			Wow JS
		==================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		/*====================
			Google Maps JS
		======================*/
		var map = new GMaps({
				el: '#map',
				lat: 23.011245,
				lng: 90.884780,
				scrollwheel: false,
			});
			map.addMarker({
				lat: 23.011245,
				lng: 90.884780,
				title: 'Marker with InfoWindow',
				infoWindow: {
				content: '<p>welcome to Medipro</p>'
			}
		
		});
	});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);
      // MESSAGE INPUT
	  const textarea = document.querySelector('.chatbox-message-input');
	  const chatboxForm = document.querySelector('.chatbox-message-form');

	  textarea.addEventListener('input', function () {
		  let line = textarea.value.split('\n').length;

		  if (textarea.rows < 6 || line < 6) {
			  textarea.rows = line;
		  }

		  if (textarea.rows > 1) {
			  chatboxForm.style.alignItems = 'flex-end';
		  } else {
			  chatboxForm.style.alignItems = 'center';
		  }
	  });

	  // TOGGLE CHATBOX
	  const chatboxToggle = document.querySelector('.chatbox-toggle');
	  const chatboxMessage = document.querySelector('.chatbox-message-wrapper');

	  chatboxToggle.addEventListener('click', function () {
		  chatboxMessage.classList.toggle('show');
	  });

	  // DROPDOWN TOGGLE
	  const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle');
	  const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu');

	  dropdownToggle.addEventListener('click', function () {
		  dropdownMenu.classList.toggle('show');
	  });

	  document.addEventListener('click', function (e) {
		  if (!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
			  dropdownMenu.classList.remove('show');
		  }
	  });

	  // CHATBOX MESSAGE
	  const chatboxMessageWrapper = document.querySelector('.chatbox-message-content');
	  const chatboxNoMessage = document.querySelector('.chatbox-message-no-message');

	  chatboxForm.addEventListener('submit', function (e) {
		  e.preventDefault();

		  if (isValid(textarea.value)) {
			  sendMessage(textarea.value.trim().replace(/\n/g, '<br>\n'));
			  textarea.value = '';
		  }
	  });

	  function addZero(num) {
		  return num < 10 ? '0' + num : num;
	  }

	  function writeMessage(message) {
		  const today = new Date();
		  let messageElement = `
			  <div class="chatbox-message-item sent">
				  <span class="chatbox-message-item-text">
					  ${message}
				  </span>
				  <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
			  </div>
		  `;
		  chatboxMessageWrapper.insertAdjacentHTML('beforeend', messageElement);
		  chatboxForm.style.alignItems = 'center';
		  textarea.rows = 1;
		  chatboxNoMessage.style.display = 'none';
		  scrollBottom();
	  }

	  function scrollBottom() {
		  chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
	  }

	  function isValid(value) {
		  let text = value.replace(/\n/g, '');
		  text = text.replace(/\s/g, '');
		  return text.length > 0;
	  }

	  const imageInput = document.getElementById('imageInput');
	  const chatboxUploadIcon = document.querySelector('.chatbox-upload-icon');

	  chatboxUploadIcon.addEventListener('click', function() {
		  imageInput.click();
	  });

	  imageInput.addEventListener('change', function() {
		  const file = this.files[0];
		  if (file) {
			  uploadImage(file);
		  }
	  });

	  function uploadImage(file) {
		  const reader = new FileReader();
		  reader.onload = function(e) {
			  const imageData = e.target.result;
			  sendMessage('<img src="' + imageData + '">');
		  }
		  reader.readAsDataURL(file);
	  }

	  function sendMessage(message) {
		  textarea.value = ''; // هذا سيمسح محتوى مربع النص بعد الإرسال
		  writeMessage(message);
		  setTimeout(autoReply, 1000);
	  }