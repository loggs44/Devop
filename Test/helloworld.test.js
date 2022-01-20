import sayHello from '../Utils/helloworld.js';
import assert from 'assert';

it('Should say hello',()=>{
    const hello = sayHello();

    assert.equal(hello,'hello');
});