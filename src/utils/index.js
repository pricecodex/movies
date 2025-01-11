export function getPoster(poster) {
  return poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";
}

export function formatNumber(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
