import { render } from '@testing-library/react';

import Aa from './aa';

describe('Aa', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Aa />);
    expect(baseElement).toBeTruthy();
  });
});
