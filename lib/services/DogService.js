const Dog = require('../models/Dogs');

module.exports = class Dogservice {
  static async create(dogs) {
    const dogname = await Dog.insert( dogs );

    return dogname;

}

}