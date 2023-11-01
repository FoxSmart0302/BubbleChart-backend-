const { postgresConfig } = require("../config");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "readonly_user",
  host: "164.90.220.117",
  database: "postgres",
  password: "fdffae64fec14135dc44885",
  port: 5432,
});

exports.getBubbles = (request, response) => {
  pool.query("SELECT * FROM google_trends", (error, results) => {
    if (error) {
      console.log("get_bubbles_error:", error);
      throw error;
    }
    response.json({
      status: 0,
      list: results.rows,
    });
  });
};