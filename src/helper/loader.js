const preloader = document.getElementById("preloader");

export const showLoader = () => {
  if (preloader) {
    preloader.style.display = "flex";
  }
};

export const hideLoader = () => {
  if (preloader) {
    preloader.style.display = "none";
  }
};

export const isLoaderShowing = preloader?.style.display === "flex";
