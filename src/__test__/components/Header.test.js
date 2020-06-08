import React from 'react';
import { mount, shallow } from 'enzyme';
/* shallow nos permite traer elmentos como una unidad,
es decir solo necesitamos algo particular del componente,
no necesitamos toda la estructura ni los elementos del dom de este*/

import { create } from 'react-test-renderer';

import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';

describe('<Header />', () => {

  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });

});

// SNAPSHOT

describe('Header Snapshot', () => {
  test('Comprobar el Snapshot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});

