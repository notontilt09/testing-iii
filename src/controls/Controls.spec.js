// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
    describe('lock/unlock button', () => {
        it('initially renders lock gate button', () => {
            const { getByText } = render(<Controls />);
            expect(getByText(/lock gate/i)).toBeInTheDocument();
        });
        
        it('lock gate button is disabled initially', () => {
            const { getByText } = render(<Controls />)
            const lockBtn = getByText(/lock gate/i);
            expect(lockBtn).toBeDisabled();
        });
        
        it('button reads Unlock Gate if passed locked=true prop', () => {
            const { getByText } = render(<Controls locked={true} />)
            const button = getByText(/unlock gate/i);
            expect(button.innerHTML).toBe('Unlock Gate');
        });

        it('button reads Lock Gate if passed locked=false prop', () => {
            const { getByText } = render(<Controls locked={false} />)
            const button = getByText(/lock gate/i);
            expect(button.innerHTML).toBe('Lock Gate');
        });

        it('button is disabled if passed closed=false prop', () => {
            const { getByText } = render(<Controls closed={false} />);
            const button = getByText(/lock gate/i)
            expect(button).toBeDisabled();
        });

        it('button is enabled if passed closed=true prop', () => {
            const { getByText } = render(<Controls closed={true} />);
            const button = getByText(/lock gate/i)
            expect(button).toBeEnabled();
        });
    });
    describe('open/close gate button', () => {
        it('initially renders close gate button', () => {
            const { getByText } = render(<Controls />)
            expect(getByText(/close gate/i)).toBeInTheDocument();
        });
        
        it('close gate button is enabled initially', () => {
            const { getByText } = render(<Controls />)
            const button = getByText(/close gate/i);
            expect(button).toBeEnabled();
        });
        
        it('button reads close gate if passed closed=false prop', () => {
            const { getByText } = render(<Controls closed={false}/>)
            const button = getByText(/close gate/i);
            expect(button.innerHTML).toBe('Close Gate')
        });
        
        it('button reads open gate if passed closed=true prop', () => {
            const { getByText } = render(<Controls closed={true}/>)
            const button = getByText(/open gate/i);
            expect(button.innerHTML).toBe('Open Gate')
        });
        
        it('button is disabled if passed locked=true prop', () => {
            const { getByText } = render(<Controls locked={true}/>)
            const button = getByText(/close gate/i);
            expect(button).toBeDisabled();
        });

        it('button is enabled if passed locked=false prop', () => {
            const { getByText } = render(<Controls locked={false}/>)
            const button = getByText(/close gate/i);
            expect(button).toBeEnabled();
        });
    });
});