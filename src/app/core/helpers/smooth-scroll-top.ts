export const smoothScrollTop = (): void => {
  const scrollToTop = window.setInterval(() => {
    const pos: number = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 30); // how far to scroll on each step
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 2);
}
