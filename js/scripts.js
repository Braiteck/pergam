$(() => {
	WW = $(window).width()

	// Баннера
	if ($('.banners .swiper-container').length) {
		new Swiper('.banners .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Товары
	if ($('.products .swiper-container').length) {
		let sliders = []

		$('.products .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					simulateTouch: false,
					allowTouchMove: false,
					noSwiping: true,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						480: {
							spaceBetween: 12,
							slidesPerView: 2
						},
						768: {
							spaceBetween: 12,
							slidesPerView: 3
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 24,
							slidesPerView: 4
						},
						1440: {
							spaceBetween: 32,
							slidesPerView: 4
						},
						1528: {
							spaceBetween: 40,
							slidesPerView: 4
						}
					},
					on: {
						init: swiper => {
							setTimeout(() => {
								productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
							})
						},
						resize: swiper => {
							setTimeout(() => {
								productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
							})
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				options.simulateTouch = true
				options.allowTouchMove = true
				options.noSwiping = false

				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Производители
	if ($('.brands .swiper-container').length) {
		let sliders = []

		$('.brands .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					simulateTouch: false,
					allowTouchMove: false,
					noSwiping: true,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						480: {
							spaceBetween: 12,
							slidesPerView: 3
						},
						768: {
							spaceBetween: 20,
							slidesPerView: 4
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 5
						},
						1280: {
							spaceBetween: 24,
							slidesPerView: 6
						},
						1528: {
							spaceBetween: 30,
							slidesPerView: 8
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				options.simulateTouch = true
				options.allowTouchMove = true
				options.noSwiping = false

				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Наши партнеры
	if ($('.partners .swiper-container').length) {
		let sliders = []

		$('.partners .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					simulateTouch: false,
					allowTouchMove: false,
					noSwiping: true,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						480: {
							spaceBetween: 12,
							slidesPerView: 3
						},
						768: {
							spaceBetween: 20,
							slidesPerView: 4
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 5
						},
						1280: {
							spaceBetween: 24,
							slidesPerView: 6
						},
						1528: {
							spaceBetween: 30,
							slidesPerView: 8
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				options.simulateTouch = true
				options.allowTouchMove = true
				options.noSwiping = false

				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Сертификаты
	if ($('.certs .swiper-container').length) {
		let sliders = []

		$('.certs .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					simulateTouch: false,
					allowTouchMove: false,
					noSwiping: true,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						480: {
							spaceBetween: 12,
							slidesPerView: 2
						},
						768: {
							spaceBetween: 20,
							slidesPerView: 3
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 4
						},
						1280: {
							spaceBetween: 24,
							slidesPerView: 5
						},
						1528: {
							spaceBetween: 40,
							slidesPerView: 6
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				options.simulateTouch = true
				options.allowTouchMove = true
				options.noSwiping = false

				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Смена фона
	$('.first_section .services .service').mouseenter(function () {
		let newBg = $(this).data('bg')

		$('.first_section .bg').fadeOut(200)
		$('.first_section ' + newBg).fadeIn(200)
	})


	// Уведомление вверху
	$('.notice .close_btn').click((e) => {
		e.preventDefault()

		$('.notice').slideUp(300)
	})


	// География проектов
	$('.geography .map > img').click((e) => {
		e.preventDefault()

		$('.geography .item').fadeIn(300)
	})


	// Меню
	$('header .menu_btn').click((e) => {
		e.preventDefault()

		$('body').addClass('lock')
		$('#menu').fadeIn(300)
	})

	$('#menu .close_btn').click((e) => {
		e.preventDefault()

		$('body').removeClass('lock')
		$('#menu').fadeOut(300)
	})


	// Плавная прокрутка к якорю
	$('.scroll_btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 20

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Поиск
	setPlaceholder()

	$('header .search form .input').focus(() => {
		$('.notice').slideUp(200)
		$('body').addClass('search_open')

		setTimeout(() => {
			$('header .search .title').fadeIn(300)
		}, 350)
	})

	$('header .close_search_btn').click((e) => {
		e.preventDefault()

		$('header .search .title').hide()
		$('body').removeClass('search_open')
	})

	$(document).keyup(function (e) {
		if (e.key === "Escape") {
			$('header .search .title').hide()
			$('body').removeClass('search_open')
		}
	})


	// Преимущества товара
	$('.product_advantages .spoler_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.product_advantages .desc').toggleClass('show')
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs.swiper-container', {
			loop: false,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			direction: 'vertical',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				768: {
					slidesPerView: 5,
					spaceBetween: 16
				},
				1440: {
					slidesPerView: 5,
					spaceBetween: 20
				}
			}
		})

		const productSlider = new Swiper('.product_info .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: productThumbs
			}
		})
	}
})



$(window).resize(() => {
	setTimeout(() => {
		if ($(window).width() != WW) {
			// Поиск
			setPlaceholder()
		}
	})
})



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.name, .desc').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.name'))
		setHeight($products.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}


const setPlaceholder = () => {
	let input = $('header .search form .input')

	$(window).width() < 768
		? input.attr('placeholder', input.data('mob-placeholder'))
		: input.attr('placeholder', input.data('placeholder'))
}