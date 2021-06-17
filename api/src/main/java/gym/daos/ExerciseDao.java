package gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import gym.models.Exercise;

@Repository
public interface ExerciseDao
{

	@Query( value = "INSERT INTO exercises (dsExercicio, repeticoes, qtdRepeticoes, idSerie) values (:dsE, :rep, :qtdR, :idS)", nativeQuery = true )
	public Exercise create(
		@Param( value = "dsE" ) String dsE,
		@Param( value = "rep" ) Integer rep,
		@Param( value = "qtdR" ) Integer qtdR,
		@Param( value = "idS" ) Integer idS );

	@Query( value = "DELETE FROM exercises WHERE idExercicio = :id", nativeQuery = true )
	public Exercise delete( @Param( value = "id" ) Integer id );

	@Query( value = "SELECT * FROM exercises", nativeQuery = true )
	public List<Exercise> list();

	@Query( value = "UPDATE exercises SET dsExercicio = :dsE, repeticoes = :rep, qtdRepeticoes = :qtdR, idSerie = :idS WHERE idExercicio = :idE", nativeQuery = true )
	public Exercise update(
		@Param( value = "dsE" ) String dsE,
		@Param( value = "rep" ) Integer rep,
		@Param( value = "qtdR" ) Integer qtdR,
		@Param( value = "idS" ) Integer idS,
		@Param( value = "idR" ) Integer idR );

}
