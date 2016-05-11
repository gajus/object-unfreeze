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
            const shallowCopy = objectUnfreeze(subject);

            expect(shallowCopy.foo).to.equal('FOO');

            shallowCopy.test = 'bar';

            expect(shallowCopy.test).to.equal('bar');
        });
    });
});

describe('objectUnfreeze() on Array', () => {
    context('frozen array', () => {
        let subject;

        beforeEach(() => {
            subject = ['foo'];

            Object.freeze(subject);
        });

        context('manipulating the frozen array', () => {
            it('throws an error', () => {
                expect(() => {
                    subject.push('test');
                }).to.throw(Error, 'Can\'t add property ' + subject.length + ', object is not extensible');
            });
        });

        it('does not affect the target array', () => {
            objectUnfreeze(subject);

            expect(() => {
                subject.push('test');
            }).to.throw(Error, 'Can\'t add property ' + subject.length + ', object is not extensible');
        });

        it('creates a shallow copy of the target array', () => {
            const shallowCopy = objectUnfreeze(subject);

            expect(shallowCopy[0]).to.equal('foo');

            shallowCopy.push('bar');

            expect(shallowCopy[1]).to.equal('bar');
        });
    });
});
