import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import DynastyCard from '../DynastyCard/DynastyCard';

const dynasty = [
  {
    name: "Gordian",
    count: 22,
  },
];

const mockStore = configureStore([]);
const initialState = {
  emperors: {
    dynasty: dynasty,
  },
};

const store = mockStore(initialState);

describe('Home Rome Dynasty', () => {
  test('Get Dynasty Name', () => {
    render(
      <Provider store={store}>
        <ul>
          <li>
            <DynastyCard
              name={dynasty.name}
              count={dynasty.count}
              img={'emperor.jpg'}
            />
          </li>
        </ul>
      </Provider>,
    );
    const h3 = screen.getByRole('heading', { level: 3 });
    expect(h3).toHaveTextContent('Mission test');
  });

  // test('Mission Tree', () => {
  //   const tree = renderer.create(
  //     <Provider store={store}>
  //       <table>
  //         <tbody>
  //           <tr>
  //             <Mission
  //               id={missionsArray[0].mission_id}
  //               name={missionsArray[0].mission_name}
  //               description={missionsArray[0].description}
  //               reserved={missionsArray[0].reserved}
  //             />
  //           </tr>
  //         </tbody>
  //       </table>
  //     </Provider>,
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // test('Click button text', () => {
  //   render(
  //     <Provider store={store}>
  //       <table>
  //         <tbody>
  //           <tr>
  //             <Mission
  //               id={missionsArray[0].mission_id}
  //               name={missionsArray[0].mission_name}
  //               description={missionsArray[0].description}
  //               reserved={missionsArray[0].reserved}
  //             />
  //           </tr>
  //         </tbody>
  //       </table>
  //     </Provider>,
  //   );
  //   const button = screen.getByRole('button');
  //   fireEvent.click(button);
  //   expect(button.textContent).toBe('Join Mission');
  // });

  // test('Click button listener', () => {
  //   const handleJoinMission = jest.fn();
  //   handleJoinMission.mockReturnValue(store.missionsArray);
  //   handleJoinMission();
  //   render(
  //     <Provider store={store}>
  //       <table>
  //         <tbody>
  //           <tr>
  //             <Mission
  //               id={missionsArray[0].mission_id}
  //               name={missionsArray[0].mission_name}
  //               description={missionsArray[0].description}
  //               reserved={missionsArray[0].reserved}
  //             />
  //           </tr>
  //         </tbody>
  //       </table>
  //     </Provider>,
  //   );
  //   const button = screen.getByRole('button');
  //   fireEvent.click(button);
  //   expect(handleJoinMission).toHaveBeenCalled();
  // });
});
