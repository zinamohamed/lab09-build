const pool = require('../utils/pool');


module.exports = class Dog {
  id;
  dogs;

  constructor(row) {
    this.id = row.id;
    this.dogs = row.dogs;
    
  }

  static async insert(dogs) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO dogs (dogs) VALUES ($1) RETURNING *',
      [ dogs.dogs ]
    );
    return new Dog(rows[0]);
    }
  
  static async getAll() { 
    const { rows } = await pool.query(
        'SELECT * FROM dogs;'
    );

    return rows.map(row => new Dog(row));
  }

  static async findDogById(id) { 
    const { rows } = await pool.query(
        'SELECT * FROM dogs WHERE id=$1', [id]
    );

    return new Dog(rows[0]);
    }
  
  static async updateDog({ id, dogs }) {
          
    const { rows } = await pool.query(`
      UPDATE dogs
      SET dogs = $1
      WHERE id = $2
      RETURNING *`, [dogs, id]);
      
      return new Dog(rows[0]);
    }
  
  static async deleteDog(id) { 
    await pool.query(
        'DELETE FROM dogs WHERE id=$1', [id]
    );
  }

}