import { mount } from '@vue/test-utils'
import login from '../../src/components/views/login.vue'
let wrapper;
describe('login.vue', () => {
    wrapper =mount(login)
    
    it('render find for h4', () => {
        //expect(wrapper.text()).toMatch(msg)
        expect(wrapper.exists()).toBe(true)
      })
  it('render find for h4', () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h4").text()).toBe("Log In")
  })
})
