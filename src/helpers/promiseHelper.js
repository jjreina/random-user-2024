export const parserToPersonClass = (object, person) => {
  return new Promise((resolve, reject) => {
    if (object === null || object === undefined) {
      let error = new Error(`${object} is not ok`);
      error.name = "parserToClass";
      reject(`${object} is not ok`);
    } else {
      person.name_first = object.name.first;
      person.name_last = object.name.last;
      person.mail = object.email;
      person.phone = object.phone;
      person.picture = object.picture.large;
      person.location = object.location.city;
      resolve(person);
    }
  });
};
