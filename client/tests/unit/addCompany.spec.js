import { mount } from "@vue/test-utils";
import addCompany from "../../src/components/views/addCompany.vue";

describe("addCompany.vue", () => {
    const wrapper = mount(addCompany);

  it("testing the page is addEvent  ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h2").exists()).toBe(true);
  });

  it("testing the whether the submit components are currently rendered or not in addEvent  ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("#submit").exists()).toBe(true);
  });
});
