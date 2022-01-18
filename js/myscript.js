/* 
 * @author Svetlana Komarova, 2022
*/

var liked;

$(document).ready(function () {

  loadPhoto()
  getLike();

});  //end of doc ready;

function loadPhoto() {
  var apiURI = `https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY`; //replace YOUR_KEY with an actual key

  // ajax call
  $.ajax({
    type: "GET", url: apiURI,
    dataType: "json",
    success: function (response) {
      console.log(response);
       $(".photo").append(
         `
        <img src="${response.url}"/>
         <h3>${response.copyright} - ${response.date}</h3>
         <p>${response.explanation}</p>
         `
       )
    }    
  });
}

function getLike() {
  liked = localStorage.getItem("liked");

  if (liked === "true") {
    document.getElementById("chkLike").checked = true;
  } else {
    document.getElementById("chkLike").checked = false;
  }
}

function onLikeClicked(){
  if (document.getElementById("chkLike").checked === true) {
    liked = "false";
  } else {
    liked = "true";
  }

  localStorage.setItem("liked", liked);
}
