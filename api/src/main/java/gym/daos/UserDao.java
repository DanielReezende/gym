package gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import gym.models.User;

@Repository
public interface UserDao
{

	@Query( value = "INSERT INTO user (username, password) VALUES (:username, :password)", nativeQuery = true )
	public User create( @Param( value = "username" ) String username, @Param( value = "password" ) String password );

	@Query( value = "DELETE FROM user WHERE id = :id", nativeQuery = true )
	public User delete( @Param( value = "id" ) Integer id );

	@Query( value = "SELECT * FROM user", nativeQuery = true )
	public List<User> list();

	@Query( value = "SELECT * FROM user WHERE username = :username", nativeQuery = true )
	public User loadUserByUsername( @Param( value = "username" ) String username );

	@Query( value = "UPDATE user SET username = :username, password = :password WHERE id = :id", nativeQuery = true )
	public User update(
		@Param( value = "username" ) String username,
		@Param( value = "password" ) String password,
		@Param( value = "id" ) String id );
}
