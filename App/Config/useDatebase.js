import { useEffect } from 'react';
import db from './sqlite-conf';

const useDatabase = () => {
    useEffect(() => {
        return () => {
            db.close();
        };
    }, []);

    const insertData = (table, date, id) => {
        alert(date)
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO ${table} (date, id) VALUES (?, ?)`,
                    [date, id],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error)
                );
            });
        });
    };

    const fetchData = (table) => {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT * FROM ${table}`,
                    [],
                    (_, { rows }) => resolve(rows),
                    (_, error) => reject(error)
                );
            });
        });
    };

    return {
        insertData,
        fetchData,
    };
};

export default useDatabase;
