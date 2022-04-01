import { mount } from "@vue/test-utils";
import addCompany from "../../src/components/views/updatePassword.vue";

describe("updatePassword.vue", () => {
    const wrapper = mount(addCompany);

  it("testing the page is addEvent  ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h2").exists()).toBe(true);
  });

  it("updatePassword has submit  ", () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("#submit").exists()).toBe(true);
  });
  it('render content find for h2', () => {
    //expect(wrapper.text()).toMatch(msg)
    expect(wrapper.find("h2").text()).toBe("Update Password")
  })
});
