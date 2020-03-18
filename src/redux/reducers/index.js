import { combineReducers } from 'redux';

import products from './products';
import category from './category';
import account from './account';
import province from './province';
import city from './city';
import subCity from './subCity'

export default combineReducers({
    products,
    category,
    account,
    province,
    city,
    subCity
});