import { shallowMount } from '@vue/test-utils'
import adminDashboard from '../../src/components/views/adminDashboard.vue'
import flushPromises from "flush-promises"
const $router={path :""}
const $store = {
    getters: {
      userDetails: { id: 1 },
    },
  };
const events=[{
      
    eventName: "mobile launch",
    eventType: "external",
    eventLocation: "Maryville",
    belongsTo: 1,
    createdBy: 1,
    eventDate: "2021-07-19"
  },
  {
  
    eventName: "mobile launch",
    eventType: "external",
    eventLocation: "Maryville",
    belongsTo: 1,
    createdBy: 1,
    eventDate: "2021-07-19"
  }];
const $axios = {
    get:() => Promise.resolve({
data:events
    })
}
describe('adminDashboard.vue', () => {
    

    
       const wrapper =shallowMount(adminDashboard, {
            mocks:{
                $axios,
                $store
            }
        
            
          })
    

    
  it('all event data is  ', async () => {
    await flushPromises();
    expect(wrapper.vm.$data.events).toBe(events)
  })
  it('testing the page is AdminDashboard  ', () => {
    expect(wrapper.find("h2").exists()).toBe(true)  })
    
//   it('if we able to logout it should be redirected to login ', async () => {
//     wrapper.find("#logout").trigger("click");
//     await flushPromises();
//     expect(wrapper.vm.$route.path).toBe($router.path)  })
})
