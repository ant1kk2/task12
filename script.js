const imagesLinks = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
];

const body = document.body;

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
body.prepend(wrapper);

const imgContainer = document.createElement("div");
imgContainer.className = "image_container";
wrapper.prepend(imgContainer);

const img = document.createElement("img");
img.className = "image";
imgContainer.prepend(img);

const btn = document.createElement("button");
btn.className = "button";
btn.innerHTML = "Обрати випадкову картинку";
wrapper.append(btn);

btn.addEventListener("click", () => {
  const imagesCount = imagesLinks.length;
  const randomNumberOfImage = Math.floor(Math.random() * imagesCount);
  img.src = imagesLinks[randomNumberOfImage];
});
