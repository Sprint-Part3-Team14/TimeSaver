function animationClosing({
  isAnimationClose,
  animationClose,
  handleDeletePortal,
}: {
  isAnimationClose: boolean;
  animationClose: () => void;
  handleDeletePortal: () => void;
}) {
  function handleClosing() {
    animationClose();
  }

  function handleAnimationEnd() {
    if (isAnimationClose) {
      handleDeletePortal();
    }
  }

  return { handleAnimationEnd, handleClosing };
}

export default animationClosing;
