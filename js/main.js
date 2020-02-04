(() => {
  const mySpan = document.querySelector('main span'),
        myObject = document.querySelector('.svg-img');


  function toggleSelection() {

    this.classList.toggle("selected");
    console.log(this.id);
  }


  mySpan.addEventListener('click', toggleSelection);
  myObject.addEventListener('click', toggleSelection);
})()
