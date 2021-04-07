const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('lab09-build', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('creates a cat and updates in the cats database', () => { 
    return request(app)
      .post('/api/v1/cats')
      .send({ cats: 'Tabby'})
      .then((res) => { 
        expect(res.body).toEqual({
          id: '1',
          cats: 'Tabby'
        });
      });

  });
});

it('gets all cats in the database', async () => { 
  const response = await request(app)
    .get('/api/v1/cats')

    expect(response.body).toEqual([
      {
        id: '1',
        cats: 'Tabby'
      }
    ]);
});

it('gets a cat by the id from database', async () => { 
  const response = await request(app)
    .get('/api/v1/cats/1')

    expect(response.body).toEqual(
    { 
      id: '1',
      cats: 'Tabby'
    }
  );

});

it('should update a cat', async () => {
   await request(app)
    .put('/api/v1/cats/1')
    .send({ cats: 'Angela'});

  const result = await request(app)
    .get('/api/v1/cats/1');

    expect(result.body).toEqual({
      id: '1', cats: 'Angela'
    })
})

it('deletes a cat', async () => { 
  const response = await request(app)
    .delete('/api/v1/cats/1')

    expect(response.body).toEqual({})
})

// Dogs

it('creates a dog and updates in the dog database', () => { 
  return request(app)
    .post('/api/v1/dogs')
    .send({ dogs: 'Paul'})
    .then((res) => { 
      expect(res.body).toEqual({
        id: '1',
        dogs: 'Paul'
      });
    });

});

it('get all dogs in the database', async () => { 
  const response = await request(app)
    .get('/api/v1/dogs')

    expect(response.body).toEqual([
      {
        id: '1',
        dogs: 'Paul'
      }
    ]);
});

it('gets a dog by the id from database', async () => { 
  const response = await request(app)
    .get('/api/v1/dogs/1')

    expect(response.body).toEqual(
    { 
      id: '1',
      dogs: 'Paul'
    }
  );

});

it('should update a dog', async () => {
  await request(app)
   .put('/api/v1/dogs/1')
   .send({ dogs: 'Puppy'});

 const result = await request(app)
   .get('/api/v1/dogs/1');

   expect(result.body).toEqual({
     id: '1', dogs: 'Puppy'
   })
})

it('deletes a dog', async () => { 
  const response = await request(app)
    .delete('/api/v1/dogs/1')

    expect(response.body).toEqual({})
})