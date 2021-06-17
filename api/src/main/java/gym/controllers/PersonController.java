package gym.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gym.models.Person;
import gym.services.PersonService;

@RestController
@RequestMapping( value = "/person" )
public class PersonController
{

	@PostMapping
	public Person create( @RequestBody final Person person )
	{
		return this.personService.create( person );
	}

	@DeleteMapping
	public Person delete( @RequestBody final Person person )
	{
		this.personService.delete( person.getId() );
		return new Person( "delete" );
	}

	@GetMapping
	public List<Person> list()
	{
		return this.personService.list();
	}

	@PatchMapping
	public Person update( @RequestBody final Person person )
	{
		return this.personService.update( person );
	}

	@Autowired
	private PersonService personService;

}
