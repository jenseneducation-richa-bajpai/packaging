//const exercise = require("./exercise.js");
// const add = script.add;
// const subtract = script.subtract;
//const { store, retrieve } = exercise;
const {
  store,
  retrieve,
  capitalize,
  multiply,
  isWaterBoiling,
} = require("./exercise.js");

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

// 2a
// Vilka testfall har vi?

it("should store a value", () => {
  // store ska returnera det sparade värdet
  // Arrange
  const value = [9, 5, 2];

  // Act
  let actual = store(value);

  // Assert
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

// 3
// should capitalize "zoom" to "Zoom"
it('should capitalize "zoom" to "Zoom"', () => {
  // Arrange
  const string = "zoom";
  let expected = "Zoom";

  // Act
  let actual = capitalize(string);

  // Assert
  expect(actual).toBe(expected);
});

it('should return "1234" for "1234" ', () => {
  const string = "1234";
  const expected = "1234";
  let actual = capitalize(string);
  expect(actual).toBe(expected);
});

it('should return "" for "" ', () => {
  const string = "";
  const expected = "";
  let actual = capitalize(string);
  expect(actual).toBe(expected);
});

// 4.  method1
it("should return product of 2 numbers", () => {
  expect(multiply(2, 3)).toBe(6);
});
// method 2
it("multiply of two numbers", () => {
  const num1 = 6,
    num2 = 8;

  let expected = num1 * num2;
  let actual = multiply(num1, num2);

  // assert
  expect(actual).toBe(expected);
});
// method 3

it("should return the value of 4*5", () => {
  //Arrange
  const x = 4,
    y = 5;
  let expected = 20;
  //Act
  let actual = multiply(x, y);
  //Assert
  expect(actual).toBe(expected);
});

// 5
// Tre kategorier möjliga resultat: true, false, throw Error
// degreesCelsius kan vara:
// - number
//   - från ca -10^308 till +10^308
//   - Infinity eller NaN
//   - lägsta möjliga temperaturen är -237.5
// - någon annan datatyp

// Det är viktigt att testa alla olika kategorier. Men inte alla möjliga värden.

it("returns true for temperature >= 100", () => {
  const temp = 100;
  const expected = true;
  let actual = isWaterBoiling(temp);
  expect(actual).toBe(expected);
});
it("returns false for temperature < 100", () => {
  const temp = 99.9;
  const expected = false;
  let actual = isWaterBoiling(temp);
  expect(actual).toBe(expected);
});
it("throws an error for temperature < -237.5", () => {
  const temp = -238;
  let maybeError = () => isWaterBoiling(temp);
  expect(maybeError).toThrow();
  // toThrow runs the arrow function inside a try/catch block
});
// We can add more tests for "throw error" if we want more precision in our tests.
// it('throws an error for NaN', () => {})
// it('throws an error for Infinity', () => {})
// it('throws an error for other data type', () => {})
