import React from 'react';
import { mount } from 'enzyme';
/* Permite trabajar con este elemento, poderlo montar sobre el Dom
Tambien poder trabajar sobre la busqueda de algun elmento
o trabajar con cada uno de esos items
que pueda tener la presentacion de este compoenente */

import { create } from 'react-test-renderer';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });

});

// SNAPSHOTS
// Para utilizar los snapshots debemos de convertir nuestro componente a un objeto json
// npm install react-test-renderer --save-dev

describe('Footer Snapshot', () => {

  // Si no existe el Snapshot, lo crea y despues lo comprueba
  // Y cuando volvemos a correr nuestra prueba
  // (ya existe este Snapshot) los compara
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(
      <Footer />,
      // Como footer no esta conectado con redux
      // no requiere el provider
    );
    expect(footer.toJSON()).toMatchSnapshot();
  });

});
