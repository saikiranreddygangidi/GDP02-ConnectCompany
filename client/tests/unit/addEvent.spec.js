import { mount } from '@vue/test-utils'
import addEvent from '../../src/components/views/addEvent.vue'
let wrapper;
describe('addEvent.vue', () => {
    wrapper =mount(addEvent);
 
    it('testing the page is addEvent  ', () => {
        //expect(wrapper.text()).toMatch(msg)
        expect(wrapper.find("h2").exists()).toBe(true)  })
    
    it('testing the whether the submit components are currently rendered or not in addEvent  ', () => {
            //expect(wrapper.text()).toMatch(msg)
            expect(wrapper.find("#submit").exists()).toBe(true)  })
})
