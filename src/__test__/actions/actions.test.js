import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {

  test('addToCart', () => {
    /*  const addToCart = payload => ({
          type: 'ADD_TO_CART',
          payload,
        });
    */
    const payload = ProductMock; //item de producto
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart', () => {
    /*  const removeFromCart = payload => ({
          type: 'REMOVE_FROM_CART',
          payload,
        });
    */
    const payload = ProductMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });

});
