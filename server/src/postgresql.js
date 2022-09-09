import postgresql from 'pg'

const pool = new postgresql.Pool({
  user: 'postgres',
  host: 'localhost',
  database:'CC_TravelLanka',
  password: 'Beethovenmvt3',
  port: 5432
});

export async function dbQuery(...args){
  return pool.connect().then((client) => {
    return client.query(...args).then((res) => {
      client.release();
      return res.rows;
    })
})}