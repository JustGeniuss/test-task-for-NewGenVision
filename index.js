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

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterCourseByPrice(priceRange, arrayOfCourses) {
  if (priceRange[0] === null && priceRange[1] === null) {
    return courses;
  }
  if (priceRange[0] === null && priceRange[1] !== null) {
    return arrayOfCourses.filter((e) => {
      return e.prices[0] <= priceRange[1];
    });
  }
  if (priceRange[0] !== null && priceRange[1] === null) {
    return arrayOfCourses.filter((e) => {
      return (
        priceRange[0] <= e.prices[1] ||
        priceRange[0] <= e.prices[0] ||
        (e.prices[0] === null && e.prices[1] === null)
      );
    });
  }
  return arrayOfCourses.filter((e) => {
    return (
      (e.prices[0] <= priceRange[1] &&
        (e.prices[1] >= priceRange[0] || e.prices[1] === null)) ||
      (e.prices[0] === null && e.prices[1] === null)
    );
  });
}

Array.prototype.sortByBottomPrice = function () {
  return this.sort((a, b) => {
    if (a.prices[0] - b.prices[0]) {
      return a.prices[0] - b.prices[0];
    } else {
      return a.prices[1] - b.prices[1];
    }
  });
};

console.log(filterCourseByPrice(requiredRange3, courses).sortByBottomPrice());
