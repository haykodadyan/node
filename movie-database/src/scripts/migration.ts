import fs from 'fs';
import path from 'path';
import pool from '../database/db';

export const executeSqlFile = async (filePath: string) => {
    try {
        const sql = fs.readFileSync(path.resolve(__dirname, '../sql', filePath), 'utf8');
        await pool.query(sql);
        console.log(`Executed SQL script: ${filePath}`);
    } catch (error) {
        console.error(`Error executing SQL script: ${filePath}`, error);
    }
};

const runMigration = async () => {
    try {
        await executeSqlFile('setup.sql');
        console.log('Migration completed');
    } catch (error) {
        console.error('Migration failed', error);
    } finally {
        await pool.end(); 
    }
};

runMigration();
