import reducers from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {

  test('Retornar InitialState', () => {
    expect(reducers({}, '')).toEqual({});
    /*
    reducer(state, action) => {
      switch (action.type) {..... default: return state}
    Hacemos que action sea un string vacion, para que caiga en el
    case de default, y devuelva el state que le pasamos
    El cual es un objeto {}
    Por eso lo esperado lo igualamos a {}
    */
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducers(initialState, action)).toEqual(expected);
  });

  test('REMOVE_FROM_CART', () => {
    const initialState = {
      cart: [
        ProductMock,
      ],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: [],
    };
    expect(reducers(initialState, action)).toEqual(expected);
  });
});
