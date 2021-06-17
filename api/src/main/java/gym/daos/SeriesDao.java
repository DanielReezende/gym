package gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import gym.models.Series;

@Repository
public interface SeriesDao
{

	@Query( value = "INSERT INTO series (dsSerie, idPerson) values (:ds, :idP)", nativeQuery = true )
	Series create( @Param( value = "ds" ) String ds, @Param( value = "idP" ) Integer idP );

	@Query( value = "DELETE FROM series WHERE idSerie = :id", nativeQuery = true )
	Series delete( @Param( value = "id" ) Integer id );

	@Query( value = "SELECT * FROM series", nativeQuery = true )
	List<Series> list();

	@Query( value = "UPDATE series SET dsSerie = :ds, idPerson = :idP WHERE idSerie = :idS", nativeQuery = true )
	Series update(
		@Param( value = "ds" ) String ds,
		@Param( value = "idP" ) Integer idP,
		@Param( value = "idS" ) Integer idS );
}
