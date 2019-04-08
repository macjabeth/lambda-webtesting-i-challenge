module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return item.enhancement === 20 ? item : {
    ...item, enhancement: item.enhancement + 1
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
