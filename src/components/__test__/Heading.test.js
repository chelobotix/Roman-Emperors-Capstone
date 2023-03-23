import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Heading from '../Heading/Heading';

describe('Header', () => {
  test('Header Tree', () => {
    const tree = renderer.create(
      <Heading />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
