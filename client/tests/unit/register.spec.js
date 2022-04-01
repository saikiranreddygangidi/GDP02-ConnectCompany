import { mount } from "@vue/test-utils";
import addCompany from "../../src/components/views/register.vue";

describe("register.vue", () => {
  const wrapper = mount(addCompany);

  it("testing the page is addEvent  ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h4").exists()).toBe(true);
  });
  it("content is h4 ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h4").text()).toBe("Register");
  });

  it("testing the whether there is logout components ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("#submit").exists()).toBe(true);
  });
});
