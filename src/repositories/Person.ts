import * as SQLite from 'expo-sqlite';

interface Person {
  id: number;
  name: string;
}

interface PersonRepositoryProps {
  onSuccess: SQLite.SQLStatementCallback | undefined;
  onError: SQLite.SQLStatementErrorCallback | undefined;
  person: Person;
}

export default class PersonRepository {
  DBNAME = 'app.db'

  CREATE = 
    'CREATE TABLE IF NOT EXISTS person(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100))';

  SELECT = 'SELECT * FROM person';

  INSERT = 'INSERT INTO person (name) values (?)';

  DELETE = 'DELETE FROM person WHERE id = ?';

  Retrieve({ onSuccess, onError } : PersonRepositoryProps) {

    var db = SQLite.openDatabase(this.DBNAME);
    
    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(this.SELECT, [], onSuccess, onError);
    });

  }

  Save({ person, onSuccess, onError } : PersonRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(
        this.INSERT,
        [person.name],
        onSuccess,
        onError,
      );
    });
  }

  Delete({ person, onSuccess, onError }: PersonRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.DELETE, [person.id], onSuccess, onError);
    });
  }
}