const articleContainer = document.getElementById("articleContainer");
const articleFooterEle = document.getElementById("articleFooter");
const shareBtn = document.getElementById("shareBtn");
const authorEle = document.getElementById("author");
const shareIconPath = document.getElementById("shareIconPath");

const shareOptionsEle = document.getElementById("shareOptions");
const shareOptionsWrapperEle = document.getElementById("shareOptionsWrapper");

const closeShareOptions = () => {
  authorEle.style.display = "flex";
  shareOptionsWrapperEle.style.display = "none";
  articleFooterEle.style.backgroundColor = "unset";
  shareBtn.classList.remove("active");
  shareBtn.classList.remove("show-after");
};

const clickHandler = (event) => {
  event.stopPropagation();

  const display = window
    .getComputedStyle(shareOptionsWrapperEle)
    .getPropertyValue("display");

  if (display === "none") {
    if (window.matchMedia("(max-width: 1439px)").matches) {
      authorEle.style.display = "none";
      shareOptionsWrapperEle.style.display = "block";
      articleFooterEle.style.backgroundColor = "hsl(217, 19%, 35%)";
      shareBtn.classList.add("active");
    } else {
      shareOptionsWrapperEle.style.display = "flex";
      shareBtn.classList.add("show-after");
    }
  } else {
    closeShareOptions();
  }
};

articleContainer.addEventListener("click", closeShareOptions);
shareBtn.addEventListener("click", clickHandler);

if (window.matchMedia("(max-width: 1439px)").matches) {
  articleFooterEle.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
  });
}
