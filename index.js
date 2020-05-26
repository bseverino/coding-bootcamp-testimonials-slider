let slideIndex = 0

function next() {
  let slides = document.getElementsByClassName('slide')
  slides[slideIndex].classList.toggle('hidden')
  if (slideIndex === slides.length - 1) {
    slides[0].classList.toggle('hidden')
    slideIndex = 0
  } else {
    slides[slideIndex + 1].classList.toggle('hidden')
    slideIndex += 1
  }
}

function back() {
  let slides = document.getElementsByClassName('slide')
  slides[slideIndex].classList.toggle('hidden')
  if (slideIndex === 0) {
    slides[slides.length - 1].classList.toggle('hidden')
    slideIndex = slides.length - 1
  } else {
    slides[slideIndex - 1].classList.toggle('hidden')
    slideIndex -= 1
  }
}
