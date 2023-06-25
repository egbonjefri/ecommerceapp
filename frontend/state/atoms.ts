import { atom } from 'recoil';
import { Product} from '@/utils/products';



export const cartState = atom<Product[]>({
  key: 'cartState',
  default: [],

});

export const loadingState = atom({
  key: 'loading',
  default: true,
});


export const timeState = atom({
  key: 'fetchTime',
  default: 0
});

export const userState = atom<any>({
  key: 'userState',
  default: []
})
