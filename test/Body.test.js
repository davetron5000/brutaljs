import Body      from "Body"
import Component from "Component"

import { Passed, Failed, Test, TestSuite, suite } from "./shared"

suite(Body, { "$selector": "works generally" }, ({test}) => {
  test("can wrap as needed", ({document}) => {
    const div = document.createElement("div")
    div.dataset.testid="12345"
    document.body.appendChild(div)

    const body = new Body()

    const component = new Component(body.$selector("[data-testid='12345']"))
    if (component.element == div) {
      return new Passed()
    }
    else {
      return new Failed("Internal element was %o and not %o", div, component.element)
    }
  })
})

