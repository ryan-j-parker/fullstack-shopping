import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ShoppingList from './ShoppingList.jsx';

describe('ShoppingList', () => {
  it('renders an item from the list', () => {
    render(
      <ShoppingList
        shoppingList={[
          {
            id: 'test',
            body: 'bananas',
            done: false,
          },
        ]}
      />
    );
    const item = screen.getByTestId('shopping-item-test');
    expect(item).toBeInTheDocument();
  });

  it('deletes a shopping item on button click', () => {
    const onItemDeleted = jest.fn();
    render(
      <ShoppingList
        shoppingList={[
          {
            id: 'test',
            body: 'bananas',
            done: false,
          },
        ]}
        onItemDeleted={onItemDeleted}
      />
    );
    const button = screen.getByTestId('shopping-list-delete-test');
    fireEvent.click(button);
    expect(onItemDeleted).toHaveBeenCalledWith('test');
  });
});
