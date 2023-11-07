const { postgresConfig } = require("../config");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: postgresConfig.user,
  host: postgresConfig.database,
  database: postgresConfig.database,
  password: postgresConfig.password,
  port: postgresConfig.port,
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