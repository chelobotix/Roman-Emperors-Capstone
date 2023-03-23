import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';

const dynasty = [
  {
    name: 'Augustus',
    mission_name: 'Mission test',
    description: 'Description Test',
    reserved: false,
  },
];

const mockStore = configureStore([]);
const initialState = {
  emperors: {
    dynasty,
  },
};

const store = mockStore(initialState);

describe('Home', () => {
  test('Check if render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });

  test('Home Tree', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
