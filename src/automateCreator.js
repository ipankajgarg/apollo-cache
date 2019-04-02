export function actionTypesCreator(name) {
  let obj = {};
  name = name.toUpperCase();
  obj[name] = name;
  obj[name + "_FAILURE"] = name + "_FAILURE";
  obj[name + "_SUCCESS"] = name + "_SUCCESS";

  return obj;
}

export function actionCreator(name) {
  const types = actionTypesCreator(name);
  let obj = {};
  for (var i in types) {
    const key = keyCreator(i);

    obj[key] = function(payload) {
      return { type: types[i], payload };
    };
  }
  return obj;
}

export function keyCreator(key) {
  // return key
  //   .split("_")
  //   .join("")
  //   .toLowerCase();

  const arr = key.split("_");

  arr.forEach((value, index, array) => {
    if (index > 0) {
      array[index] = capitalize(value.toLowerCase());
    } else {
      array[index] = value.toLowerCase();
    }
  });

  return arr.join("");
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function createReducer(obj) {
  return;
}
