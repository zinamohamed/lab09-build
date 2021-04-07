const pool = require('../utils/pool');


module.exports = class Cat {
  id;
  cats;

  constructor(row) {
    this.id = row.id;
    this.cats = row.cats;
    
  }

  static async insert(cats) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO cats (cats) VALUES ($1) RETURNING *',
      [ cats.cats ]
    );
    return new Cat(rows[0]);
    }
  
  static async getAll() { 
    const { rows } = await pool.query(
        'SELECT * FROM cats;'
    );

    return rows.map(row => new Cat(row));
  }

  static async findCatById(id) { 
    const { rows } = await pool.query(
        'SELECT * FROM cats WHERE id=$1', [id]
    );

    return new Cat(rows[0]);
    }
  
  static async updateCat({ id, cats }) {
          
    const { rows } = await pool.query(`
      UPDATE cats
      SET cats = $1
      WHERE id = $2
      RETURNING *`, [cats, id]);
      
      return new Cat(rows[0]);
    }
  
  static async deleteCat(id) { 
    await pool.query(
        'DELETE FROM cats WHERE id=$1', [id]
    );
  }

}