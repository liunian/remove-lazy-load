import { commonImgRule } from './rules/img';

function removeLazyLoad() {
  commonImgRule();
}

document.addEventListener('load', removeLazyLoad);
document.addEventListener('DOMContentLoaded', removeLazyLoad);
