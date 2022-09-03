const addImages = () => {
  const picArea = document.querySelector(".pics");

  for (img of images) {
    const div = document.createElement("div");
    div.classList.add("pic");
    div.style.backgroundImage = `url('${img.src}')`;

    picArea.appendChild(div);
  }
};

const toggleButton = document.querySelector(".menu-mobile-area i");
toggleButton.addEventListener("click", () => menuMobile());

const menuMobile = () => {
  const menuMobile = document.querySelector(".menu-mobile");
  if (menuMobile.style.display == "none") {
    menuMobile.style.display = "flex";
  } else {
    menuMobile.style.display = "none";
  }
};

addImages();
