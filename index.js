/**
 * Фильтрует по цене, которую указал пользователь
 * @param  priceRange - Варианты цен пользователя
 * @param  arrayOfCourses - Массив доступных курсов
 */
function filterCourseByPrice(priceRange, arrayOfCourses) {
  if (priceRange[0] === null && priceRange[1] === null) {
    return arrayOfCourses;
  }

  if (priceRange[0] === null) {
    return arrayOfCourses.filter((course) => course.prices[0] <= priceRange[1]);
  }

  if (priceRange[1] === null) {
    return arrayOfCourses.filter(
      (course) =>
        priceRange[0] <= course.prices[1] ||
        priceRange[0] <= course.prices[0] ||
        (course.prices[0] === null && course.prices[1] === null)
    );
  }

  return arrayOfCourses.filter(
    (course) =>
      course.prices[0] <= priceRange[1] &&
      (course.prices[1] >= priceRange[0] || course.prices[1] === null)
  );
}

function sortByBottomPrice(arr) {
  return arr.sort((a, b) => {
    if (a.prices[0] - b.prices[0]) {
      return a.prices[0] - b.prices[0];
    }
    if(a.prices[1] === null) return -1
    if(b.prices[1] === null) return 1 
    return a.prices[1] - b.prices[1];
  });
}



module.exports = { filterCourseByPrice, sortByBottomPrice };
