export const caculateDiscount = ({
  price,
  price_before_discount,
}: {
  price: number;
  price_before_discount: number;
}) => {
  const percent = 100 - (price / price_before_discount) * 100;

  return Math.abs(Math.round(percent));
};
