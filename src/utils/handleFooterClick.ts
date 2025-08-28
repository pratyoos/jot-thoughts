export const handleFooterClick = (path: string) => {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};