import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ShoppingListForm from './ShoppingListForm.jsx';

describe('ShoppingListForm', () => {
  it('renders a form', () => {
    render(<ShoppingListForm id="test" />);
    const form = screen.getByTestId('shopping-list-form-test');

    expect(form).toBeInTheDocument();
  });

  it('updates done on checkbox change', () => {
    const onDoneChanged = jest.fn();
    render(
      <ShoppingListForm id="test" onDoneChanged={onDoneChanged} />
    );
    const checkbox = screen.getByTestId(
      'shopping-list-form-done-test'
    );
    fireEvent.click(checkbox);
    expect(onDoneChanged).toHaveBeenCalledWith(true);
  });
  
  it('updates body on input change', () => {
    const onBodyChanged = jest.fn();
    render(
      <ShoppingListForm id="test" onBodyChanged={onBodyChanged} />
    );
    const input = screen.getByTestId(
      'shopping-list-form-input-test'
    );
    fireEvent.change(input, {
      target: {
        value: 'bananas',
      },
    });
    expect(onBodyChanged).toHaveBeenCalledWith('bananas');
  });
  
});
