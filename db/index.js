const { Pool } = require("pg")

const { PGHOST, PGUSER, PGPORT, PGDATABASE, PGPASSWORD } = process.env

const pool = new Pool({ connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}` })

async function query(sql, params) {
    return await pool.query(sql, params)
}

module.exports = query
