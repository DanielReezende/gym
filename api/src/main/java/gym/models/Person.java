package gym.models;

public class Person
{

	public Person( final String name )
	{
		this.name = name;
	}

	public Integer getId()
	{
		return this.id;
	}

	public String getName()
	{
		return this.name;
	}

	private Integer id;

	private String name;
}
