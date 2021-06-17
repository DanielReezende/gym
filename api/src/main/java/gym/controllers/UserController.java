package gym.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gym.AuthenticationDto;
import gym.JwtUtil;
import gym.models.User;
import gym.services.UserService;

@RestController
@RequestMapping( value = "/user" )
public class UserController
{

	@PostMapping( "/authenticate" )
	public ResponseEntity< ? > authenticate( @RequestBody final AuthenticationDto auth )
	{
		final UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
			auth.getUsername(),
			auth.getPassword() );
		this.userService.authenticate( authentication );

		final UserDetails userDetails = this.userService.loadUserByUsername( auth.getUsername() );

		final String jwt = this.jwtUtil.generateToken( userDetails );
		final Map<Object, Object> resp = new HashMap<>();
		resp.put( "jwt", jwt );
		return ResponseEntity.ok( resp );
	}

	@PostMapping
	public User create( @RequestBody final User user )
	{
		return null;
	}

	@DeleteMapping
	public void delete( @RequestBody final User user )
	{
	}

	@GetMapping
	public List<User> list()
	{
		return null;
	}

	@PatchMapping
	public User update( @RequestBody final User user )
	{
		return this.userService.update( user );
	}

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtUtil jwtUtil;

	@Autowired
	private UserService userService;

}
