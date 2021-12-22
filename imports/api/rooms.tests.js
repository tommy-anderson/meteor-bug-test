import { assert } from 'chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

describe('test', () => {
    beforeEach(() => {
      console.log(JSON.stringify(Meteor))
      resetDatabase();
    });

    it('test', () => {
        const a = 1
        const b = 2
        assert.equal(a+b,3)
        console.table(Meteor)
      });
})