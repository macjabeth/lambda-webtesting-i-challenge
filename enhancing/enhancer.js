module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return item.enhancement === 20
    ? item
    : {
        ...item,
        enhancement: item.enhancement + 1
      };
}

function fail(item) {
  const {durability, enhancement} = item;
  return {
    ...item,
    durability: durability - (enhancement < 15 ? 5 : 10),
    enhancement: enhancement > 16 ? (enhancement - 1) : enhancement
  };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return item.enhancement === 0 ? item : {
    ...item,
    name: `[+${item.enhancement}] ${item.name}`
  }
}
