const burger = () => {
    var q = document.getElementsByClassName("heads");
    if (q.style.display === "block") {
      q.style.display = "none";
    } else {
      q.style.display = "block";
    }
  }
 
  let link = document.querySelector('.icon')
  link.addEventListener('click', function(event) {
    event.preventDefault(); burger()
  });