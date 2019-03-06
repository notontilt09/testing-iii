// Test away!
import React from 'react';
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
    describe('Locked/Unlocked LED', () => {
        it('should initially be unlocked', () => {
            const { getByText } = render(<Display />)
            expect(getByText(/unlocked/i)).toBeInTheDocument();
        });

        it('should render Locked button if passed locked=true prop', () => {
            const { getByText } = render(<Display locked={true} />);
            expect(getByText(/Locked/).innerHTML).toBe('Locked');
            expect(getByText(/Locked/)).toHaveClass('red-led');
        })

        it('should render Unlocked button if passed locked=false propd', () => {
            const { getByText } = render(<Display locked={false} />);
            expect(getByText(/Unlocked/).innerHTML).toBe('Unlocked');
            expect(getByText(/Unlocked/)).toHaveClass('green-led');
        })
    });
    
    describe('Open/Closed LED', () => {
        it('should initially be open', () => {
            const { getByText } = render(<Display />);
            expect(getByText(/open/i)).toBeInTheDocument();
        });
        
        it('should be closed if passed closed=true prop', () => {
            const { getByText } = render(<Display closed={true} />);
            expect(getByText(/closed/i).innerHTML).toBe('Closed');
            expect(getByText(/closed/i)).toHaveClass('red-led');
        });

        it('should be open if passed closed=false prop', () => {
            const { getByText } = render(<Display closed={false} />);
            expect(getByText(/open/i).innerHTML).toBe('Open');
            expect(getByText(/open/i)).toHaveClass('green-led');
        });
    });
});