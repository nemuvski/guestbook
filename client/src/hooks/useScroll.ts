import { useEffect, useRef, useState } from 'react';

export const useScroll = (thresholdY: number) => {
  const [overThreshold, setOverThreshold] = useState(false);
  // スクロール処理の間引き用フラグ
  const isProcessing = useRef(false);

  useEffect(() => {
    const handler = () => {
      // 処理中の場合はスキップ
      if (isProcessing.current) {
        return;
      }
      isProcessing.current = true;
      requestAnimationFrame(() => {
        setOverThreshold(window.scrollY > thresholdY);
        isProcessing.current = false;
      });
    };

    document.addEventListener('scroll', handler, { passive: true });

    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, [thresholdY]);

  return overThreshold;
};
