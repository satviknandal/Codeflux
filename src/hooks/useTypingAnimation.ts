import { useEffect, useState } from 'react';

interface UseTypingAnimationOptions {
  text: string;
  typingSpeed?: number;
  pauseAfterTyping?: number;
  startDelay?: number;
}

interface UseTypingAnimationReturn {
  displayedText: string;
  isTyping: boolean;
  isComplete: boolean;
  showCursor: boolean;
}

export function useTypingAnimation({
  text,
  typingSpeed = 55,
  pauseAfterTyping = 500,
  startDelay = 300,
}: UseTypingAnimationOptions): UseTypingAnimationReturn {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let typingTimeout: ReturnType<typeof setTimeout>;
    let startTimeout: ReturnType<typeof setTimeout>;
    let cursorTimeout: ReturnType<typeof setTimeout>;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      setShowCursor(false);
      return;
    }

    // Reset when text changes
    setDisplayedText('');
    setIsTyping(false);
    setIsComplete(false);
    setShowCursor(true);

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        currentIndex++;

        setDisplayedText(text.slice(0, currentIndex));
        setIsTyping(true);

        const variance = Math.random() * 30 - 15;
        const nextDelay = Math.max(
          40,
          Math.min(70, typingSpeed + variance)
        );

        typingTimeout = setTimeout(typeNextCharacter, nextDelay);
      } else {
        setIsTyping(false);
        setIsComplete(true);

        cursorTimeout = setTimeout(() => {
          setShowCursor(false);
        }, pauseAfterTyping);
      }
    };

    startTimeout = setTimeout(() => {
      typeNextCharacter();
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(typingTimeout);
      clearTimeout(cursorTimeout);
    };
  }, [text, typingSpeed, pauseAfterTyping, startDelay]);

  return {
    displayedText,
    isTyping,
    isComplete,
    showCursor,
  };
}