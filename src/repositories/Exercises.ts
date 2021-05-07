import * as SQLite from "expo-sqlite";

interface Exercises {
  idExercicio?: number;
  dsExercicio: string;
  idSerie: number;
  repeticoes: number;
  qtdRepeticoes: number;
}

interface ExercisesRepositoryProps {
  onSuccess: SQLite.SQLStatementCallback | undefined;
  onError?: SQLite.SQLStatementErrorCallback | undefined;
  exercises?: Exercises;
}

export default class ExercisesRepository {
  DBNAME = "app.db";

  CREATE =
    "CREATE TABLE IF NOT EXISTS exercises(idExercicio INTEGER PRIMARY KEY AUTOINCREMENT, dsExercicio VARCHAR(50), repeticoes INTEGER, qtdRepeticoes INTEGER, idSerie INTEGER, FOREIGN KEY (idSerie) REFERENCES Series (idSerie))";

  SELECT = "SELECT * FROM exercises";

  INSERT =
    "INSERT INTO exercises (dsExercicio, repeticoes, qtdRepeticoes, idSerie) values (?, ?, ?, ?)";

  EDIT =
    "UPDATE exercises SET dsExercicio = ?, repeticoes = ?, qtdRepeticoes = ?, idSerie = ? WHERE idExercicio = ?";

  DELETE = "DELETE FROM exercises WHERE idExercicio = ?";

  Retrieve({ onSuccess, onError }: ExercisesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(this.SELECT, [], onSuccess, onError);
    });
  }

  Edit({ exercises, onSuccess, onError }: ExercisesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(
        this.EDIT,
        [
          exercises?.dsExercicio,
          exercises?.repeticoes,
          exercises?.qtdRepeticoes,
          exercises?.idSerie,
          exercises?.idExercicio,
        ],
        onSuccess,
        onError
      );
    });
  }

  Save({ exercises, onSuccess, onError }: ExercisesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(
        this.INSERT,
        [
          exercises?.dsExercicio,
          exercises?.repeticoes,
          exercises?.qtdRepeticoes,
          exercises?.idSerie,
        ],
        onSuccess,
        onError
      );
    });
  }

  Delete({ exercises, onSuccess, onError }: ExercisesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(
        this.DELETE,
        [exercises?.idExercicio],
        onSuccess,
        onError
      );
    });
  }
}
