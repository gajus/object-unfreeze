/* eslint-disable max-nested-callbacks */

import {
    expect
} from 'chai';

import objectUnfreeze from './../src/objectUnfreeze';

describe('objectUnfreeze()', () => {
    context('frozen object', () => {
        let subject;

        beforeEach(() => {
            subject = {
                foo: 'FOO'
            };

            Object.freeze(subject);
        });

        context('writing to the frozen object', () => {
            it('throws an error', () => {
                expect(() => {
                    subject.test = 'test';
                }).to.throw(Error, 'Can\'t add property test, object is not extensible');
            });
        });

        it('does not affect the target object', () => {
            objectUnfreeze(subject);

            expect(() => {
                subject.test = 'test';
            }).to.throw(Error, 'Can\'t add property test, object is not extensible');
        });

        it('creates a shallow copy of the target object', () => {
            let shallowCopy;

            shallowCopy = objectUnfreeze(subject);

            expect(shallowCopy.foo).to.equal('FOO');

            shallowCopy.test = 'bar';

            expect(shallowCopy.test).to.equal('bar');
        });
    });
});
