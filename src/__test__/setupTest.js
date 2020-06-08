/* eslint-disable import/no-extraneous-dependencies */
// Adapter de enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
/*
Va a permitir capturar las peticiones
y ejecutarlas sin necesidad de ejecutar
el fetch que utilizamos dentro del navegador
*/
