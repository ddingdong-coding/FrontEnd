$(document).ready(function () {
  renderReels()

});
//retrieve images from api
function renderReels() {
  fetch("https://picsum.photos/v2/list")
    .then(res => res.json()).then((data) => {
      for (let i = 2; i < 9; i++) {
        let img = data[i]['download_url']
        let temp_html = `<img src="${img}">`
        $(`.reelsImg-${i - 1}`).append(temp_html);

      }

    })

}

//reels photo slides function
const container = document.querySelector(".reels-1");
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

(function addEvent() {
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction) {
  const selectedBtn = (direction === 1) ? 'slide_prev_button' : 'slide_next_button';
  container.style.transitionDuration = '600ms';
  container.style.transform = `translateX(${direction * (100 / 7)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  (selectedBtn === 'slide_prev_button') ? container.insertBefore(container.lastElementChild, container.firstElementChild) : container.appendChild(container.firstElementChild);
}
