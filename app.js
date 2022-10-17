function createTitle(title) {
  const farmatterTitle = title[0].toUpperCase() + title.slice(1) + ".";
  return function newFunction(name) {
    return `${farmatterTitle} ${name}`;
  };
}

const mens = createTitle("mr");
const woomen = createTitle("ms");

console.log(mens("baiel"));
