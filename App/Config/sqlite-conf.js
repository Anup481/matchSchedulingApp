import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'FMScheduler.db',
        createFromLocation: 2,
    },
    () => {
        console.log('Connection success!');
    },
    error => {
        console.error('Error opening database: ', error);
    }
);

export default db;