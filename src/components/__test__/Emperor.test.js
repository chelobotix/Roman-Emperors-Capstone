import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Emperor from '../Emperor/Emperor';

const emperorsArray = {
  records: [
    {
      fields:
      {
        name: 'Augustus',
        mission_name: 'Mission test',
        description: 'Description Test',
        reserved: false,
      },
    }
  ]
};

const mockStore = configureStore([]);
const initialState = {
  emperors: {
    emperorsArray: emperorsArray,
  },
};

const store = mockStore(initialState);

jest.mock('react-router-dom', () => ({
  useParams: () => ({ name: 'Augustus' }),
}));

describe('Emperor', () => {
  test('Check if render', () => {
    render(
      <Provider store={store}>
        <Emperor />
      </Provider>,
    );
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });

  test('Home Tree', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Emperor />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
