import { Sum } from "../Sum";

test("Sum function returns sum of 2 params", () => {
  const result = Sum(11, 23);
  expect(result).toEqual(34);
});

