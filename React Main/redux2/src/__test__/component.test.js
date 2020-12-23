import React from 'react';
import Header from '../component/Header';
import { create } from 'react-test-renderer';

describe('SnapShot Testing',() => {
    test('testing header', () => {
        let tree = create(<Header/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})