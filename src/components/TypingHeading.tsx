import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { cn } from '../lib/utils';

interface TypingHeadingProps {
  className?: string;
  data: string
}
export function TypingHeading({
  className, data
}: TypingHeadingProps) {
  const fullText = data;
  const {
    displayedText,
    showCursor,
    isComplete
  } = useTypingAnimation({
    text: fullText,
    typingSpeed: 55,
    pauseAfterTyping: 500,
    startDelay: 400
  });

  // Find where to split for the second line
  const line1Length = data.length -  23;
  const displayedLine1 = displayedText.slice(0, line1Length);
  const displayedLine2 = displayedText.slice(line1Length + 1); // +1 for the space

  return <h1 className={cn("font-normal", className)} aria-label={fullText}>
      <span className="inline">
        {displayedLine1}
        {/* Show cursor on line 1 if still typing line 1 */}
        {showCursor && displayedText.length <= line1Length && <span className={cn("inline-block w-[3px] h-[0.9em] bg-white ml-1 align-middle", !isComplete && "animate-pulse")} aria-hidden="true" />}
      </span>
      <span className="block mt-2">
        {displayedLine2}
        {showCursor && displayedText.length > line1Length && <span className={cn("inline-block w-[3px] h-[0.9em] bg-white ml-1 align-middle", !isComplete && "animate-pulse")} aria-hidden="true" />}
      </span>
      {/* Hidden text for screen readers */}
      <span className="sr-only">{fullText}</span>
    </h1>;
}