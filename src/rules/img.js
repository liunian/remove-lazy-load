
const commonImgLazyAttrs = [
  'data-ks-lazyload',
  'data-original'
];

export function commonImgRule() {
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
