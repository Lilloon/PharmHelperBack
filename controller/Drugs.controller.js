import pg from '../pg.js'

class DrugsController {
  async getCountries(req, res){
    const countries = await pg.query('SELECT DISTINCT manuf_country FROM clear_meds ORDER BY manuf_country');
    countries.rows.shift()
    res.send(countries.rows);
  };

  async getDrugById(req, res){
    const Drug = await pg.query(`SELECT DISTINCT * FROM clear_meds WHERE id=${req.params.id}`);
    res.send(Drug.rows[0])
  };

  async getSearchList(req, res){
    console.log(req.params.name);
    const searchName = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase();
    const DrugList = await pg.query(`SELECT DISTINCT * FROM clear_meds WHERE trade_name='${searchName}'`)
    console.log(DrugList)
    res.send(DrugList.rows)
  }
};

export default new DrugsController;