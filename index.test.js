// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
    it("should capitalize the first letter of a word", () => {
      expect(capitalize("hello")).toBe("Hello");
    });
  
    it("should handle an empty string", () => {
      expect(capitalize("")).toBe("");
    });
  
    it("should handle an already capitalized word", () => {
      expect(capitalize("World")).toBe("World");
    });
  
    it("should handle a mix of uppercase and lowercase letters", () => {
      expect(capitalize("goodBye")).toBe("GoodBye");
    });
  });


// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2, 4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toString([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toString([]);
  });

  it("should handle an array with one element", () => {
    expect(filterOddNumber([11])).toString([]);
  });

  it("should handle an array with no elements", () => {
    expect(filterOddNumber([])).toString([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("should handle a negative epoch date", () => {
    expect(epochDateToUTC(-1)).toBe("Wed, 31 Dec 1969 23:59:59 GMT");
  });

  it("should handle a large epoch date", () => {
    expect(epochDateToUTC(9999999999)).toBe("Sat, 20 Nov 2286 17:46:39 GMT");
  });

  it("should handle a specific epoch date", () => {
    expect(epochDateToUTC(1619468672)).toBe("Mon, 26 Apr 2021 20:24:32 GMT");
  });
});

