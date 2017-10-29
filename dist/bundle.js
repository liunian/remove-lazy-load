'use strict';

const commonImgLazyAttrs = [
  'data-ks-lazyload',
  'data-original'
];

function commonImgRule() {
  const selectors = commonImgLazyAttrs.map(i => `img[${i}]`).join(',');
  const imgs = document.querySelectorAll(selectors);
  [].slice.call(imgs, 0).forEach(img => {
    commonImgLazyAttrs.forEach(i => {
      const original = img.getAttribute(i);
      if (original && original !== img.src) {
        img.src = original;
      }
    });
  });
}

function removeLazyLoad() {
  commonImgRule();
}

document.addEventListener('load', removeLazyLoad);
document.addEventListener('DOMContentLoaded', removeLazyLoad);
//# sourceMappingURL=bundle.js.map
