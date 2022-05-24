const { filterCourseByPrice, sortByBottomPrice } = require("./index");
// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

describe("filterCourseByPrice ", function () {
  it("[null, 200]", function () {
    let requiredRange = [null, 200];

    const fieltredCourses = filterCourseByPrice(requiredRange, courses);

    expect(fieltredCourses).toEqual([
      { name: "Courses in England", prices: [0, 100] },
      { name: "Courses in Italy", prices: [100, 200] },
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
    ]);
  });

  it("[100, 350]", function () {
    let requiredRange = [100, 350];

    const fieltredCourses = filterCourseByPrice(requiredRange, courses);

    expect(fieltredCourses).toEqual([
      { name: "Courses in England", prices: [0, 100] },
      { name: "Courses in Italy", prices: [100, 200] },
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
    ]);
  });

  it("[200, null]", function () {
    let requiredRange = [200, null];

    const fieltredCourses = filterCourseByPrice(requiredRange, courses);

    expect(fieltredCourses).toEqual([
      { name: "Courses in Germany", prices: [500, null] },
      { name: "Courses in Italy", prices: [100, 200] },
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
    ]);
  });

  it("[null, null]", function () {
    let requiredRange = [null, null];

    const fieltredCourses = filterCourseByPrice(requiredRange, courses);

    expect(fieltredCourses).toEqual([
      { name: "Courses in England", prices: [0, 100] },
      { name: "Courses in Germany", prices: [500, null] },
      { name: "Courses in Italy", prices: [100, 200] },
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
    ]);
  });
});

describe("sortByBottomPrice ", function () {
  it("default", function () {
    const sortedCourses = sortByBottomPrice(courses);

    expect(sortedCourses).toEqual([
      { name: "Courses in France", prices: [null, null] },
      { name: "Courses in England", prices: [0, 100] },
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in Italy", prices: [100, 200] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Germany", prices: [500, null] },
    ]);
  });
});
