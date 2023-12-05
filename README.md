# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: https://github.com/JimTK16/Article-Preview-Component
- Live Site URL:

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This is a challenging project for me as a beginner. I continued to learn about position elements, using Grid and Flexbox.

I learned to use window.matchMedia to perform event handler according to the window width.

```
if (window.matchMedia("(max-width: 1439px)").matches) {
      authorEle.style.display = "none";
      shareOptionsWrapperEle.style.display = "block";
      articleFooterEle.style.backgroundColor = "hsl(217, 19%, 35%)";
      shareBtn.classList.add("active");
    } else {
      shareOptionsWrapperEle.style.display = "flex";
      shareBtn.classList.add("show-after");
    }
```
