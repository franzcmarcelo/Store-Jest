import getData from '../../utils/getData';

/*
Para trabajar con fetch, necesitamos un mock (mas complejo)
Por eso nos ayudaremos de esta herramienta, que nos permitirá simular las peticiones.
npm install jest-fetch-mock --save-dev
*/

describe('Fetch', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    // El link simplemente lo ponemos porque es un parametro obligatorio
    // Igual el mock-fetch lo simulara, y la respuesta que retorna
    // sera el definido en fetch.mockResponseOnce()

    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    // Para asegurar que la llamada a google si este siendo ejecutada
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');

  });
});
