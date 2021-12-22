import { assert } from 'chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

describe('nextAvailableWorkspaceOrder', () => {
    beforeEach(() => {
      resetDatabase();
    });

    it('test', () => {
        const a = 1
        const b = 2
        assert.equal(a+b,3)
        
      });
})