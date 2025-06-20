import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('');

  return (
  <main className = "section container" >
    <h1 className="title is-flex is-align-items-center">
      {value ? `${value} is selected` : 'No goods selected'}
      {value && <button data-cy="ClearButton" type="button" className="delete ml-3" onClick={() => setValue('')}/>}
    </h1>

    <table className="table">
      {goods.map(good => (
        <tbody>
          <tr key={good} data-cy="Good" className={good === value ? 'has-background-success-light' : ''}>
            <td>
              <button
              data-cy={good === value ? 'AddButton' : 'RemoveButton'}
              type="button"
              className={good === value ? 'button is-info' : 'button'}
                onClick={() => {
                  if (good === value) {
                    setValue('');
                  } else {
                    setValue(good);
                  }}}>
                {good === value ? '-' : '+'}
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>
        </tbody>
      ))}
      <tbody>
        <tr data-cy="Good">
          <td>
            <button data-cy="AddButton" type="button" className="button">
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Dumplings
          </td>
        </tr>

        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Jam
          </td>
        </tr>

        <tr data-cy="Good">
          <td>
            <button data-cy="AddButton" type="button" className="button">
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Garlic
          </td>
        </tr>
      </tbody>
    </table>
  </main>
)};
