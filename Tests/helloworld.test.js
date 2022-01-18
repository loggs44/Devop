import { expect, it } from '@jest/globals'
import sayHello from '../Utils/helloworld'

it('Should say hello',()=>{
    const hello = sayHello();

    expect(hello).toBe('hello');
});