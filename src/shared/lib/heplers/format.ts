export const formatCurrency = (value: string | number) => {
  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) {
    return "$0.00";
  }

  return "$" + num.toFixed(2);
};

const getNumberRange = (num: number): string => {
  if (num >= 1_000_000_000) {
    return "billion";
  }
  if (num >= 1_000_000) {
    return "million";
  }
  return "thousand";
};

export const formatLargeNumber = (value: string) => {
  const num = Number(value);

  if (isNaN(num)) {
    return "0";
  }

  const range = getNumberRange(num);

  switch (range) {
    case "billion":
      return (num / 1_000_000_000).toFixed(1) + " млрд";
    case "million":
      return (num / 1_000_000).toFixed(1) + " млн";
    default:
      return num.toLocaleString("ru-RU");
  }
};

export const getDomain = (url: string) => new URL(url).hostname;
