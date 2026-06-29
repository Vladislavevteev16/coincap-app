export const formatPrice = (price: number): string => {
  switch (true) {
    case price >= 1000000:
      return (price / 1000000).toFixed(2) + "M";
    case price >= 1000:
      return price.toFixed(2);
    default:
      return price.toFixed(2);
  }
};
