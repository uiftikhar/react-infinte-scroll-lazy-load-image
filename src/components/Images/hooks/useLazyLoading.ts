import { useCallback, useEffect, useRef } from 'react';

import { ImagesState } from '../types';

export const useLazyLoading = (imgSelector: string, items: ImagesState) => {
  const imgObserver = useCallback((node: Element) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const currentImg = en.target as HTMLImageElement;
          const newImgSrc = currentImg.dataset.src;
          if (!newImgSrc) {
            // eslint-disable-next-line no-console
            console.error('Image source is invalid');
          } else {
            currentImg.src = newImgSrc;
          }
          intObs.unobserve(node);
        }
      });
    });
    intObs.observe(node);
  }, []);

  const imagesRef = useRef<unknown>(null);
  useEffect(() => {
    imagesRef.current = document.querySelectorAll(imgSelector);
    if (imagesRef.current) {
      (imagesRef.current as Element[]).forEach((img: Element) =>
        imgObserver(img),
      );
    }
  }, [imgObserver, imagesRef, imgSelector, items]);
};
