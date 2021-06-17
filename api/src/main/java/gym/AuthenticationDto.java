package gym;

/**
 * <p>
 * </p>
 * 
 * @author eduardo.almeida
 * @version 1.0 Created on Jun 16, 2021
 */
public class AuthenticationDto
{

	public String getPassword()
	{
		return this.password;
	}

	public String getUsername()
	{
		return this.username;
	}

	private String password;

	private String username;

}
