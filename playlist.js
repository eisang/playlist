
// console.log("it is working");

 let clrTrack = document.getElementById("clrTrack")
 let subTrack = document.getElementById("subTrack")
const albumCollector = document.querySelector(".albumCollector")
const parentDiv = document.querySelector("#parentDiv")
let albumUl = document.querySelector("Ul")

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then(function(response) {
return response.json();
})
.then(function(myJson) {
let myAlbum = myJson.results
let newDiv1 = document.createElement('div')
newDiv1.setAttribute("class", "divc");
parentDiv.appendChild(newDiv1)
   for (let i = 0; i < myAlbum.length; i++) {
          let newDiv2 = document.createElement('div')
          newDiv2.setAttribute("class", "diva");

          let albumCoverImg = document.createElement('img')
          albumCoverImg.src = `images/${myAlbum[i].cover_art}`;
          albumCoverImg.setAttribute("class", "musical");

           let anchor = document.createElement('a')
           anchor.setAttribute("class", "anch");
           anchor.href = "#";
           newDiv2.appendChild(albumCoverImg);
           anchor.appendChild(newDiv2)
           newDiv1.appendChild(anchor);

            let  musiqTitle = myAlbum[i].title;
            anchor.addEventListener("click", function(){
            let albumLi= document.createElement("li");
            albumLi.textContent = musiqTitle;
            albumLi.id=0;
            albumUl.appendChild(albumLi);
            albumCollector.appendChild(albumUl);
          

           clrTrack.addEventListener("click", function(event) {
           let binClicked = event.target;
           if(binClicked.id ==="clrTrack") {
                albumUl.removeChild(document.getElementById(0));
            }
         })
       })
      }
  })

  let title = "title.value";
  let body = "body.value";
  document.getElementById("subTrack").addEventListener("click", postData);
  function postData(event) {
    event.preventDefault();

    fetch("https://lit-fortress-6467.herokuapp.com/post", {
      method: "POST",
      headers: new Headers(),
      body: ["albumName", "albumName2"]
    })
      .then(response => response.text())
      .then(data => console.log(data))
  }
