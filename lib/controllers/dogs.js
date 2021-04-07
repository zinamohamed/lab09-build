const { Router } = require('express');
const DogService = require('../services/DogService');
const Dog = require('../models/Dogs')

module.exports = Router()
.post('/', async (req, res, next) => {
    try {
      const dogs = await DogService.create(req.body);
      res.send(dogs);
    } catch (err) {
      next(err);
    }
  })

.get('/', (req, res, next) => { 
    Dog
    .getAll()
    .then(dog => res.send(dog))
    .catch(next);
  })


.get('/:id', async (req, res, next) => { 
    try { 
        const dogs = await Dog.findDogById(req.params.id);
        res.send(dogs); 
    } catch (err) { 
        next(err);
    }
})

.put('/:id', async (req, res, next) => {
  try {
      const updatedDog = await Dog.updateDog({ id: req.params.id, dogs: req.body.dogs });

      res.send(updatedDog)
  } catch (error) {
      next(error);
  }
})

.delete('/:id', async (req, res, next) => { 
  const dogId = Number(req.params.id);
  try { 
      const request = await Dog.deleteDog(dogId);
       res.send(request);
  } catch (err) { 
      next(err);
  }
})