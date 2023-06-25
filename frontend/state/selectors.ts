import { selector } from 'recoil';
import { cartState } from './atoms';

export const cartItemsSelector = selector({
  key: 'cartItemsSelector',
  get: ({ get }) => {
    return get(cartState);
  },
});

export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cartItems = get(cartItemsSelector);
    return cartItems.reduce((total, item) => total + ((item.quantity) * item.price), 0);
  },
});
export const totalTaxesSelector = selector({
  key: 'totalTaxesSelector',
  get: ({ get }) => {
    const totalPrice = get(totalPriceSelector);
    return (totalPrice*0.15).toFixed(2);
  },
});
export const shippingCostSelector = selector({
  key: 'shippingCostSelector',
  get: ({ get }) => {
    const totalPrice = get(totalPriceSelector);
    return totalPrice >= 100 ? 20 : 0;
  },
});