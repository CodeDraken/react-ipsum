import React from "react";
import { shallow } from "enzyme";

import { LoremImage } from "../";

describe("LoremImage", () => {
  it("Should render a div tag with image inside by default", () => {
    const wrapper = shallow(<LoremImage />);
    expect(wrapper.type()).toBe("div");
    expect(wrapper.childAt(0).type()).toBe("img");
  });
  it("Should pass additional classnames", () => {
    const wrapper = shallow(<LoremImage className="extra" />);

    expect(wrapper.hasClass("extra")).toBe(true);
  });
  it("Should render as other elements", () => {
    const wrapper = shallow(<LoremImage renderAs="p" />);

    expect(wrapper.type()).toBe("p");
  });
  it("Should have alt attribute", () => {
    const wrapper = shallow(<LoremImage />);

    expect(wrapper.childAt(0).prop("alt")).toBe("lorem image");
  });
  it("Should accept gray/ blur prop", () => {
    const wrapper = shallow(<LoremImage gray blur />);
    expect(wrapper.childAt(0).prop("src")).toContain("/g/");
    expect(wrapper.childAt(0).prop("src")).toContain("&blur&");
  });
  it("Should accept width and height", () => {
    const wrapper = shallow(<LoremImage width={350} height={250} />);
    expect(wrapper.childAt(0).prop("src")).toContain(
      "https://picsum.photos/350/250/"
    );
  });
});
describe("Snapshots", () => {
  it("Should exist", () => {
    expect(LoremImage).toMatchSnapshot();
  });
});
