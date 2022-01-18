var liked;

$(document).ready(function () {
  
   var apiURI = `https://api.nasa.gov/planetary/apod?api_key=bROhwT0aI6knZWlGg1cwPcPERqOlg7jLJOmlYPYL`;

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

liked = localStorage.getItem("liked");

if (liked === "false" || liked == null) {
  document.getElementById("chkLike").checked = false;
} else {
  document.getElementById("chkLike").checked = true;
}

});  //end of doc ready;

function onLike(){

  if (document.getElementById("chkLike").checked === true) {
    liked = "false";
  } else {
    liked = "true";
  }

  localStorage.setItem("liked", liked);
}