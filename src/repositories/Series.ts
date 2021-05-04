import * as SQLite from "expo-sqlite";

interface Series {
  id?: number;
  desc: string;
  idPerson: number;
}

interface SeriesRepositoryProps {
  onSuccess: SQLite.SQLStatementCallback | undefined;
  onError?: SQLite.SQLStatementErrorCallback | undefined;
  series: Series;
}

export default class SeriesRepository {
  DBNAME = "app.db";

  CREATE = 
    "CREATE TABLE IF NOT EXISTS series(idSerie INTEGER PRIMARY KEY AUTOINCREMENT, dsSerie VARCHAR(50), FOREIGN KEY (idPerson) REFERENCES Person (id))";

  SELECT = "SELECT * FROM series";

  INSERT = "INSERT INTO series (dsSerie, idPerson) values (?, ?)";

  DELETE = "DELETE FROM series WHERE idSerie = ?";

  Retrieve({ onSuccess, onError }: SeriesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(this.SELECT, [], onSuccess, onError);
    });
  }

  Save({ series, onSuccess, onError }: SeriesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(
        this.INSERT,
        [series.desc, series.idPerson],
        onSuccess,
        onError
      );
    });
  }

  Delete({ series, onSuccess, onError }: SeriesRepositoryProps) {
    var db = SQLite.openDatabase(this.DBNAME);

    db.transaction((transaction) => {
      transaction.executeSql(this.DELETE, [series?.id], onSuccess, onError);
    });
  }
}
