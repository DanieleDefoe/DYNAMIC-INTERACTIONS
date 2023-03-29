/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const imageData = [
  {
    link: './images/image-1.jpg',
  },
  {
    link: './images/image-2.jpg',
  },
  {
    link: './images/image-3.jpg',
  },
  {
    link: './images/image-4.jpg',
  },
  {
    link: './images/image-5.jpg',
  },
  {
    link: './images/image-6.jpg',
  },
  {
    link: './images/image-7.jpg',
  },
]

const previousImageBtn = document.querySelector('.image-previous-btn')
const nextImageBtn = document.querySelector('.image-next-btn')

const navigationBtns = [...document.querySelectorAll('.slider-nav-btn')]

const allImagesContainer = document.querySelector('.slider-images-inner-container')

const fillImageContainer = (() => {
  imageData.forEach(({ link }) => {
    const newImage = new Image()
    newImage.src = link
    newImage.className = 'slider-image'
    allImagesContainer.append(newImage)
  })
})()

const removeActiveStateFromPrevBtn = () => {
  const activeBtn = document.querySelector('.slider-nav-btn.active')
  activeBtn.style.background = '#fff'
  activeBtn.classList.remove('active')
}

const moveToNextImage = () => {
  let currentPosition = parseInt(allImagesContainer.style.right, 10) || 0
  if (String(currentPosition)[0] == imageData.length - 1) currentPosition = -100
  allImagesContainer.style.right = `${currentPosition + 100}%`
  const currentNavBtn = navigationBtns.find((btn) => btn.getAttribute('data-count-number') == (parseInt(String(currentPosition)[0], 10) + 2 || 1))
  removeActiveStateFromPrevBtn()
  currentNavBtn.classList.add('active')
  currentNavBtn.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

const moveToPreviousImage = () => {
  let currentPosition = parseInt(allImagesContainer.style.right, 10) || 0
  if (String(currentPosition)[0] == 0) currentPosition = parseInt(`${imageData.length}00`, 10)
  allImagesContainer.style.right = `${currentPosition - 100}%`
  const currentNavBtn = navigationBtns.find((btn) => btn.getAttribute('data-count-number') == String(currentPosition)[0])
  removeActiveStateFromPrevBtn()
  currentNavBtn.classList.add('active')
  currentNavBtn.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

const changeImageByClickingOnNavBtn = (navBtn) => {
  const numberToMove = navBtn.getAttribute('data-count-number')
  allImagesContainer.style.right = `${(numberToMove - 1) * 100}%`
}

const changeNavButtonState = (e) => {
  if (e.target.classList.contains('active')) return
  removeActiveStateFromPrevBtn()
  e.target.classList.add('active')
  e.target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  changeImageByClickingOnNavBtn(e.target)
}

navigationBtns.forEach((btn) => btn.addEventListener('click', changeNavButtonState))
navigationBtns[0].style.background = '#000'
nextImageBtn.addEventListener('click', moveToNextImage)
previousImageBtn.addEventListener('click', moveToPreviousImage)

setInterval(() => {
  moveToNextImage()
}, 5000)
