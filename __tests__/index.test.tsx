import React from 'react'
import { /* fireEvent, */ render } from '@testing-library/react'
import Index from '../src/pages/index'

describe('Not implemented yet', () => {
    test('Not implemented', () => {
        const page = render(<Index />)
        // fireEvent.change(page.getByTestId('any').querySelector('textarea'), {
        //     target: { value: 'any' }
        // })
        expect(page).toBeTruthy()
    })
})
