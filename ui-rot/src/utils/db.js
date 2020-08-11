function DB(key) {
  const save = (data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
    return get();
  };

  const get = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  const update = (id, newData) => {
    let localStorageData = get(key);
    let updatedData = localStorageData.map((person) => {
      if (person.id == id) {
        person = newData;
      }
      return person;
    });
    save(updatedData);
  };

  return {
    save,
    get,
    update,
  };
}

export default DB;
