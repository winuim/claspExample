import {
  isDone,
  height,
  bob,
  list1,
  list2,
  Color,
  notSure,
  showMessage,
  Hamburger,
  buildName,
  scale,
  mapABCD,
  jane,
  john,
  sayName,
  pi,
  Test
} from "../src/example";

describe("example.ts test", () => {
  test("variable", () => {
    expect(isDone).toBe(false);
    expect(height).toBe(6);
    expect(bob).toBe("bob");
    expect(list1[0]).toBe(1);
    expect(list1[1]).toBe(2);
    expect(list1[2]).toBe(3);
    expect(list2[0]).toBe(1);
    expect(list2[1]).toBe(2);
    expect(list2[2]).toBe(3);
    expect(Color).toHaveProperty("Red");
    expect(Color).toHaveProperty("Green");
    expect(Color).toHaveProperty("Blue");
    expect(Color.Red).toBe(0);
    expect(Color.Green).toBe(1);
    expect(Color.Blue).toBe(2);
    expect(notSure).toBe(false);
    expect(scale[0]).toBe("a");
    expect(scale[1]).toBe("b");
    expect(scale[2]).toBe("c");
    expect(scale[3]).toBe("d");
    expect(scale[4]).toBe("e");
    expect(scale[5]).toBe("f");
    expect(scale[6]).toBe("g");
    expect(mapABCD["a"]).toBe(5);
    expect(mapABCD["b"]).toBe(6);
    expect(mapABCD["c"]).toBe(3);
    expect(mapABCD["d"]).toBe(7);
    expect(pi).toBe(3.141592);
  });
  test("showMessage", () => {
    const spyLog = jest.spyOn(console, "log");
    const data = "Hello, World!";
    showMessage(data);
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual(data);
    spyLog.mockReset();
    spyLog.mockRestore();
  });
  test("Hamburger", () => {
    const h = new Hamburger();
    jest.spyOn(h, "listToppings");
    h.listToppings();
    expect(h.listToppings).toBeCalled();
  });
  test("buildName", () => {
    const expected = buildName("First", "Second", "Third");
    expect(expected).toBe("First Second Third");
  });
  test("sayName jane", () => {
    const spyLog = jest.spyOn(console, "log");
    sayName(jane);
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual("Hello Jane N/A Doe");
    spyLog.mockReset();
    spyLog.mockRestore();
  });
  test("sayName john", () => {
    const spyLog = jest.spyOn(console, "log");
    sayName(john);
    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual("Hello John Smith Doe");
    spyLog.mockReset();
    spyLog.mockRestore();
  });
  test("Test Class", () => {
    const t = new Test();
    expect(t.name).toBe("test");
  });
});
