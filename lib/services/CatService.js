const Cat = require('../models/Cats');

module.exports = class CatService {
  static async create(cats) {
    const catname = await Cat.insert( cats );

    return catname;

}

}