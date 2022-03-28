import { shallowMount } from "@vue/test-utils";
import companyUserDashBoard from "../../src/components/views/companyUserDashBoard.vue";
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
const $store = {
  getters: {
    userDetails: { id: 1 },
  },
};
const $axios = {
  get: () =>
    Promise.resolve({
      data: events,
    })
};

describe("companyUserDashBoard.vue", () => {
  const wrapper = shallowMount(companyUserDashBoard, {
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
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h2").exists()).toBe(true);
  });
});
