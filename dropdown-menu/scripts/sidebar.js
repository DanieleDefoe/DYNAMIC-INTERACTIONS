async function addSidebar(link) {
  const response = await fetch(link)
  const sidebar = await response.text()
  document.body.insertAdjacentHTML('afterbegin', sidebar)
}

addSidebar('../components/sidebar.html').then(() => {
  const sidebarButton = document.querySelector('.sidebar__logo-container')
  const sidebarDropdown = document.querySelector('.sidebar__section-wrapper')

  const toggleDropdownState = () => {
    sidebarButton.classList.toggle('active')
    sidebarDropdown.classList.toggle('active')
  }

  sidebarButton.addEventListener('click', toggleDropdownState)
})
