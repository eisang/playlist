//let test = document.querySelector("body")
// let test = document.getElementsByTagName("body")
// console.log(test)
    const track2 = document.querySelector("#track2")
    // var newDiv1 = document.createElement('div1')
    // newDiv1.setAttribute("class", "musical")
    // newDiv1.appendChild(newDiv);



   fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var myAlbum = myJson.results
    // console.log(myAlbum)
     for (var i = 0; i < myAlbum.length-2; i++) {
          // console.log(myAlbum[i])
          var newDiv1 = document.createElement('div')
          newDiv1.setAttribute("class", "musical")
          // newDiv1.appendChild(newDiv);

          var newDiv2 = document.createElement('div')
          newDiv2.setAttribute("class", "musiq")

          var albumImg = document.createElement('img')
          albumImg.src = `images/${myAlbum[i].cover_art}`;

          newDiv1.appendChild(newDiv2)
          newDiv2.appendChild(albumImg);
          track2.appendChild(newDiv1)
       }


  })



var trackBtn = document.getElementById("trackBtn")
