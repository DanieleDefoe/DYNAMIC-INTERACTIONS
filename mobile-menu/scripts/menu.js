async function addMenu(link) {
  const response = await fetch(link)
  const menu = await response.text()
  document.body.insertAdjacentHTML('afterbegin', menu)
}

addMenu('../components/sidebar.html').then(() => {
  const menuButton = document.querySelector('.sidebar__header-button')
  const menuSection = document.querySelector('.sidebar__section-wrapper')

  const toggleMenuState = () => {
    menuSection.classList.toggle('active')
    menuButton.classList.toggle('sidebar__header-button_type_exit')
    menuButton.blur()
  }

  menuButton.addEventListener('click', toggleMenuState)
})
