const { Router } = require('express');
const CatService = require('../services/CatService');
const Cat = require('../models/Cats')

module.exports = Router()
.post('/', async (req, res, next) => {
    try {
      const cats = await CatService.create(req.body);
      res.send(cats);
    } catch (err) {
      next(err);
    }
  })

.get('/', (req, res, next) => { 
    Cat
    .getAll()
    .then(cat => res.send(cat))
    .catch(next);
  })


.get('/:id', async (req, res, next) => { 
    try { 
        const cats = await Cat.findCatById(req.params.id);
        res.send(cats); 
    } catch (err) { 
        next(err);
    }
})

.put('/:id', async (req, res, next) => {
  try {
      const updatedCat = await Cat.updateCat({ id: req.params.id, cats: req.body.cats });

      res.send(updatedCat)
  } catch (error) {
      next(error);
  }
})

.delete('/:id', async (req, res, next) => { 
  const catId = Number(req.params.id);
  try { 
      const request = await Cat.deleteCat(catId);
       res.send(request);
  } catch (err) { 
      next(err);
  }
})

