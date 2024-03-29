import db from "../Config/sqlite-conf";

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';
export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const EDIT_DATA = 'EDIT_DATA';

export const insertData = (table, data) => {
    console.log('insert date ----> ', data, table);
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                const serializedDates = JSON.stringify(data.date);
                db.transaction(tx => {
                    tx.executeSql(
                        `CREATE TABLE IF NOT EXISTS ${table} (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, matchName TEXT)`,
                        [],
                        () => {
                            tx.executeSql(
                                `INSERT INTO ${table} (date, matchName) VALUES (?, ?)`,
                                [serializedDates, data.matchName],
                                (_, result) => {
                                    console.log('InsertId: ', result.insertId);
                                    dispatch({ type: 'ADD_DATA', payload: { id: result.insertId, date: serializedDates, matchName: data.matchName } });
                                    resolve(result.insertId);
                                },
                                (_, error) => {
                                    console.error('Error inserting data: ', error);
                                    reject(error);
                                }
                            );
                        },
                        (_, error) => {
                            console.error('Error creating table: ', error);
                            reject(error);
                        }
                    );
                });
            } catch (error) {
                console.error('Error inserting data: ', error);
                reject(error);
            }
        });
    };
};

export const fetchData = (table) => {
    return async (dispatch) => {
        try {
            return await new Promise((resolve, reject) => {
                db.transaction(tx => {
                    tx.executeSql(
                        `SELECT * FROM ${table}`,
                        [],
                        (_, { rows }) => {
                            if (rows.length > 0) {
                                // Dispatch an action with the fetched data
                                dispatch({ type: 'FETCH_DATA_SUCCESS', payload: rows.raw() });
                                resolve(rows.raw());
                            } else {
                                console.log('No data received');
                                resolve([]);
                            }
                        },
                        (_, error) => {
                            reject(error);
                        }
                    );
                });
            });

        } catch (error) {
            console.error('Error fetching data: ', error);
            dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
        }
    };
};

export const deleteData = (table, id) => {
    return async (dispatch) => {
        try {
            return await new Promise((resolve, reject) => {
                db.transaction((tx) => {
                    tx.executeSql(
                        `DELETE FROM ${table} WHERE id = ?`,
                        [id],
                        (_, { rowsAffected }) => {
                            console.log(rowsAffected)
                            if (rowsAffected > 0) {
                                dispatch({ type: 'DELETE_DATA', payload: id });
                                resolve(rowsAffected);
                            } else {
                                reject(new Error('No data deleted.'));
                            }
                        },
                        (_, error) => {
                            dispatch({ type: 'DELETE_DATA_FAILURE', payload: error });
                            reject(error);
                        }
                    );
                });
            });
        } catch (error) {
            console.error('Error deleting data: ', error);
            dispatch({ type: 'DELETE_DATA_FAILURE', payload: error });
        }
    };
};

export const editData = (table, newValue) => {
    return async (dispatch) => {
        return await new Promise((resolve, reject) => {
            try {
                const serializedDates = JSON.stringify(newValue.date);

                db.transaction((tx) => {
                    tx.executeSql(
                        `UPDATE ${table} SET date = ? WHERE id = ?`,
                        [serializedDates, newValue.id],
                        (_, { rowsAffected }) => {
                            if (rowsAffected > 0) {
                                console.log('Data updated successfully');
                                dispatch({ type: 'EDIT_DATA', payload: newValue })
                                resolve();
                            } else {
                                reject(new Error('No data updated 101.'));
                            }
                        },
                        (_, error) => {
                            reject(error);
                        }
                    );
                });
            } catch (error) {
                console.error('Error updating data: ', error);
                reject(error);
                // dispatch(editDataFailure(error)); // Dispatch failure action if update fails
            }

        });
    };
};
