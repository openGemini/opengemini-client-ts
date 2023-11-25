import { pushOne } from "./pushOne";

test("pushOne", () => {
  expect(pushOne(10)).toIncludeSameMembers([10]);
});
