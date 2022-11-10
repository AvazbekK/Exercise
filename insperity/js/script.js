window.addEventListener('DOMContentLoaded', () => {
	const dropdownBtn = document.querySelector('.dropdown'),
		menu = document.querySelector('.menu'),
		hamburger = document.querySelector('.hamburger'),
		hamburgerMobile = document.querySelector('.hamburger-mobile'),
		sidebar = document.querySelector('.sidebar'),
		sidebarMobile = document.querySelector('.sidebar-mobile'),
		content = document.querySelector('.content')

	function toggleItemHandler(_, item, toggleClass) {
		item.classList.toggle(toggleClass)
	}

	dropdownBtn.addEventListener('click', e => toggleItemHandler(e, menu, 'toggle-menu'))

	hamburger.addEventListener('click', e => {
		toggleItemHandler(e, sidebar, 'toggle-sidebar')
		toggleItemHandler(e, content, 'toggle-content')
	})

	hamburgerMobile.addEventListener('click', e =>
		toggleItemHandler(e, sidebarMobile, 'toggle-sidebar')
	)
})
