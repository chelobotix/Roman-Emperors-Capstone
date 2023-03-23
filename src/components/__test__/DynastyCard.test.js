import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import DynastyCard from '../DynastyCard/DynastyCard';

const dynasty = {
  name: "Gordian",
  count: 22,
};


describe('Home Rome Dynasty', () => {
  test('Get Dynasty Name', () => {
    console.log(dynasty.name)
    render(
      <BrowserRouter>
        <DynastyCard
          name={dynasty.name}
          count={dynasty.count}
          img='emperor.jpg'
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
          img='emperor.jpg'
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

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
