const data = (name, age, work, ...names) => {
  return {
    name,
    age,
    work,
    names,
  };
};
const dataRes = data("john", 30, "Help-Desk", "mike", "ben", "tim");

if (
  dataRes instanceof Object &&
  Array.isArray(dataRes.names || dataRes instanceof Array)
) {
  const results = { ...dataRes };
  console.log(results);
} else {
  console.log(typeof dataRes);
}
