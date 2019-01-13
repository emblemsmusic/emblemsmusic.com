document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector('body');
  console.log(body);
  setTimeout(()=>{
    body.classList.add('active');
  }, 1000)

  console.log('Emblems Music');
});
