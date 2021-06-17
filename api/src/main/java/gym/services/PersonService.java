package gym.services;

import java.util.List;

import org.springframework.stereotype.Service;

import gym.daos.PersonDao;
import gym.models.Person;

@Service
public class PersonService
{

	public Person create( final Person person )
	{
		return this.dao.create( person.getName() );
	}

	public void delete( final Integer id )
	{
		this.dao.delete( id );
	}

	public List<Person> list()
	{
		return this.dao.list();
	}

	public Person update( final Person person )
	{
		return this.dao.update( person.getName(), person.getId() );
	}

	private PersonDao dao;
}
