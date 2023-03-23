import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DynastyCard from '../DynastyCard/DynastyCard';

const dynasty = {
  name: 'Gordian',
  count: 22,
};

describe('Home Rome Dynasty', () => {
  test('Get Dynasty Name', () => {
    render(
      <BrowserRouter>
        <DynastyCard
          name={dynasty.name}
          count={dynasty.count}
          img="emperor.jpg"
        />
      </BrowserRouter>,
    );
    const h3 = screen.getByRole('heading', { level: 3 });
    expect(h3).toHaveTextContent('Gordian');
  });

  test('Dynasty Card Tree', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <DynastyCard
          name={dynasty.name}
          count={dynasty.count}
          img="emperor.jpg"
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
