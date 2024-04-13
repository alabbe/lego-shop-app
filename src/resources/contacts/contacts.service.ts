
import pool from "../../db/config"

export class ContactsService {

  findAll = async () => {
    try {
      const { rows } = await pool.query('SELECT * FROM contacts ORDER BY id ASC');
      if (rows.length) {
        return rows;
      }
      return null;
    } catch (error: unknown) {
      throw error;
    }
  }

  findById = async (id: number) => {
    try {
      const { rows } = await pool.query('SELECT * FROM contacts WHERE id=$1', [id]);
      if (rows.length) {
        return rows[0];
      }
      return null;
    } catch (error: unknown) {
      throw error;
    }
  }
}