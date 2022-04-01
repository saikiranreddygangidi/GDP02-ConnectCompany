import { mount } from "@vue/test-utils";
import addCompany from "../../src/components/views/home.vue";

describe("home.vue", () => {
  const wrapper = mount(addCompany);

  it("testing the page is addEvent  ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("testing the whether there is logout components ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("#logout").exists()).toBe(true);
  });
});
