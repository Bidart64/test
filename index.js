const object1 = {
  test: true,
  test1: `string`,
  test2: {
    try: `hard`
  }
}
const object2 = {
  test: true,
  test1: `string`,
  test2: {
    try: `soft`
  }
}

const equalObjects = (o1, o2) => Object.entries(o1)?.every(([key, value]) => typeof value !== `object` ? o2[key] && o2[key] === value : equalObjects(value, o2[key]))

const test = (obj1, obj2) => {
  let ret = []
  if (Object.entries(obj1)?.every(([key, value]) => typeof value !== `object` ? obj2[key] && obj2[key] === value : equalObjects(value, obj2[key]))) return true
  Object.entries(obj1)?.forEach(([key, value]) => console.log(obj2[key], value))
  Object.entries(obj1)?.forEach(([key, value]) => console.log(!(obj2[key] || obj2[key] === value)))
  Object.entries(obj1)?.every(([key, value]) => !(typeof value !== `object` ? obj2[key] && obj2[key] === value : equalObjects(value, obj2[key])) ? console.log([obj2[key], value]) : null)
  console.log(ret)
  return ret
}
test(object1, object2)