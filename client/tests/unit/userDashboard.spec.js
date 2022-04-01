import { shallowMount } from "@vue/test-utils";
import userDashboard from "../../src/components/views/userDashboard.vue";
import flushPromises from "flush-promises";

const events = [
  {
    eventName: "mobile launch",
    eventType: "external",
    eventLocation: "Maryville",
    belongsTo: 1,
    createdBy: 1,
    eventDate: "2021-07-19",
  },
];
const $axios = {
  get: () =>
    Promise.resolve({
      data:events,
    })
};
const $store = {
  getters: {
    userDetails: { id: 1 },
  },
};
describe("userDashboard.vue", () => {
  const wrapper = shallowMount(userDashboard, {
    mocks: {
      $axios,
      $store,
    },
  });

  it("all event data is  ", async () => {
    //expect(wrapper.text()).toMatch(msg)
    await flushPromises();
    expect(wrapper.vm.$data.events).toBe(events);
  });
  it("testing the page is Company User Dashboard  ", () => {
  
    expect(wrapper.find("h2").exists()).toBe(true);
  });
});
