export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', (err) => {
      reject(err);
    });

    reader.readAsDataURL(file);
  });
};

export const currencyFormatRUB = (num) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol',
  }).format(num);
