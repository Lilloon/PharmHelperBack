import Pool1 from 'pg'

const pool = new Pool1.Pool({
  user: 'postgres',
  password: 'Keklol123',
  host: 'localhost',
  port: 5432,
  database: 'pharm',
});

export default pool;