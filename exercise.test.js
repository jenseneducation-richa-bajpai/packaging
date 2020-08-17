const exercise = require("./exercise.js");
// const add = script.add;
// const subtract = script.subtract;
const { store, retrieve } = exercise;

it("should store a value", () => {
  const value = [9, 5, 2];

  let actual = store(value);
  expect(actual).toBe(value);
});

it("should store a value and return the most recently stored value", () => {
  //Arrange
  const value = 4;

  //Act
  store(value);
  let expected = value;
  let actual = retrieve();

  //Assert
  expect(actual).toBe(expected);
});
