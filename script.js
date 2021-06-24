console.log("sup fam")
let squares = document.querySelectorAll('.square');
//console.log(squares[0].style.backgroundImage);
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.close');
let modTop = document.querySelector('.modTop');
//let modTop = document.querySelector('.modTop');
let modBtm = document.querySelector('.modBtm');
console.log(modBtm.innerText)

// for (let i = 0; i < squares.length; i++) {
//   squares[i].addEventListener('click', function () {
//     console.log(this.style)
//     modal.style.display = 'block';
//     modTop.style.background = this.style.background

//     //call func here to populate
//   })
// }

modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
})

//iterate onload, do for each square
let url = 'https://picsum.photos/v2/list?limit=15';
//let url = 'https://picsum.photos/800/400/v2/list?limit=15'
fetch(url)
  .then(response => response.json())
  .then(data => handleResponse(data))

let handleResponse = function (data) {
  console.log(data)
  for (let j = 0; j < data.length; j++) {
    //console.log(data[j].url);
    //console.log(squares[j].style)
    let url = data[j].download_url.toString()
    //console.log(typeof url)
    squares[j].style.background = `url(${url})`
    console.log(squares[j].style)
    }
  //create node for modal?
  //set node to desired stuff
  //console.log(data[0].url)
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      console.log(this.style)
      modal.style.display = 'block';
      modTop.style.background = this.style.background
      modTop.style.backgroundSize = 'cover'
      modBtm.innerText = "download me" + "   " + url
      //call func here to populate
    })
  }
}






