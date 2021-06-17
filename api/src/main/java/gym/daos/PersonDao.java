package gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import gym.models.Person;

@Repository
public interface PersonDao
{

	@Query( value = "INSERT INTO person (name) VALUES (?)", nativeQuery = true )
	Person create( @Param( value = "name" ) String name );

	@Query( value = "DELETE FROM person WHERE id = :id", nativeQuery = true )
	Person delete( @Param( value = "id" ) Integer id );

	@Query( value = "SELECT * FROM person", nativeQuery = true )
	List<Person> list();

	@Query( value = "UPDATE person SET name = :name WHERE id = :id", nativeQuery = true )
	Person update( @Param( value = "name" ) String name, @Param( value = "id" ) Integer id );
}
