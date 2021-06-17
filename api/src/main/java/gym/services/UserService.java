package gym.services;

import java.util.Collections;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import gym.daos.UserDao;
import gym.models.User;

@Service
public class UserService
	implements UserDetailsService
{

	public UsernamePasswordAuthenticationToken authenticate( final UsernamePasswordAuthenticationToken authentication )
	{
		final String username = authentication.getPrincipal() + "";
		final String password = authentication.getCredentials() + "";

		final UserDetails user = loadUserByUsername( username );
		if ( ( user == null ) || !password.contentEquals( user.getPassword() ) )
		{
			throw new BadCredentialsException( "1000" );
		}

		return new UsernamePasswordAuthenticationToken( username, password, Collections.emptyList() );
	}

	@Override
	public UserDetails loadUserByUsername( final String username )
		throws UsernameNotFoundException
	{
		return this.dao.loadUserByUsername( username );
	}

	public User update( final User user )
	{
		return null;
	}

	private UserDao dao;
}
