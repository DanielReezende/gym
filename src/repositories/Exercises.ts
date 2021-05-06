import * as SQLite from "expo-sqlite";

interface Exercises {
  id?: number;
  dsExercicio: string;
  idSerie: number;
  repeticoes: number;
  qtdRepeticoes: number;
}

interface ExercisesRepositoryProps {
  onSuccess: SQLite.SQLStatementCallback | undefined;
  onError?: SQLite.SQLStatementErrorCallback | undefined;
  exercises: Exercises;
}

export default class ExercisesRepository {
  DBNAME = "app.db";

  CREATE = 
    "CREATE TABLE IF NOT EXISTS exercises(idExercicio INTEGER PRIMARY KEY AUTOINCREMENT, dsExercicio VARCHAR(50), repeticoes INTEGER, QtdRepeticoes INTEGER, FOREIGN KEY (idSerie) REFERENCES Series (idSerie))";

  SELECT = "SELECT * FROM exercises";

  INSERT = "INSERT INTO exercises (dsExercicio, repeticoes, qtdRepeticoes, idSerie) values (?, ?, ?, ?)";

  DELETE = "DELETE FROM exercises WHERE idExercicio = ?";

  Retrieve({ onSuccess, onError }: ExercisesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(this.SELECT, [], onSuccess, onError);
    });
  }

  Save({ exercises, onSuccess, onError }: ExercisesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(
        this.INSERT,
        [exercises.dsExercicio, exercises.repeticoes, exercises.qtdRepeticoes,  exercises.idSerie],
        onSuccess,
        onError
      );
    });
  }

  Delete({ exercises, onSuccess, onError }: ExercisesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.DELETE, [exercises?.id], onSuccess, onError);
    });
  }
}
