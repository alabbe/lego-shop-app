import pool from "../../db/config"

export class UsersService {
  login = async (username: string, password: string) => {
    try {
      const { rows } = await pool.query('SELECT * FROM users WHERE username=$1 AND password=$2', [username, password]);
      if (rows.length) {
        return rows[0];
      }
      return null;
    } catch (error: unknown) {
      throw error;
    }
  }
}