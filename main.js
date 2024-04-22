const marke = document.querySelector("#mark");
const notReadElement = document.querySelectorAll(".not-read");
const number = document.querySelector("#number");
const posts = document.querySelectorAll(".post")
marke.addEventListener("click", () => {
  notReadElement.forEach((noreadelemtr) => {
    noreadelemtr.classList.remove("not-read");
    const notReadElement = document.querySelectorAll(".not-read");
    const lengthConter = notReadElement.length;
    number.innerText = lengthConter;
  });
});
posts.forEach((post)=>{
    post.addEventListener("click",()=>{
      const norReacPost =  post.querySelector(".not-read")
      norReacPost.classList.remove("not-read")
      const notReadElement = document.querySelectorAll(".not-read");
    const lengthConter = notReadElement.length;
    number.innerText = lengthConter;
    })
})