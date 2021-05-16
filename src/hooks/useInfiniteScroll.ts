import { useCallback, useEffect } from 'react';

import { PagerTypes } from '../components/Images/enums';
import { PagerActions } from '../components/Images/types';

// infinite scrolling with intersection observer
export const useInfiniteScroll = (
  scrollRef: { current: unknown },
  dispatch: (arg0: PagerActions) => void,
) => {
  const scrollObserver = useCallback(
    (node: Element) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0.5) {
            dispatch({ type: PagerTypes.AdvancePage });
          }
        });
      }).observe(node);
    },
    [dispatch],
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current as Element);
    }
  }, [scrollObserver, scrollRef]);
};
