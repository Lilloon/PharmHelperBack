import pg from '../pg.js'

class PopularController {
  async getPopular(req, res){
    const popularQuery = await pg.query('SELECT * FROM popular ORDER BY id');
    res.send(popularQuery.rows);
  }
};

export default new PopularController;