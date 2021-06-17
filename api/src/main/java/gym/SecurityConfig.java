package gym;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import gym.services.UserService;

@EnableWebSecurity
public class SecurityConfig
	extends WebSecurityConfigurerAdapter
{

	@Override
	@Bean
	protected AuthenticationManager authenticationManager()
		throws Exception
	{
		return super.authenticationManager();
	}

	@Override
	protected void configure( final AuthenticationManagerBuilder auth )
		throws Exception
	{
		super.configure( auth );
		auth.userDetailsService( this.userService );
	}

	@Override
	public void configure( final HttpSecurity security )
		throws Exception
	{
		security
			.csrf()
			.disable()
			.authorizeRequests()
			.antMatchers( "/user/authenticate" )
			.permitAll()
			.anyRequest()
			.authenticated()
			.and()
			.sessionManagement()
			.sessionCreationPolicy( SessionCreationPolicy.STATELESS );
		;

		security.addFilterBefore( this.jwtRequestFilter, UsernamePasswordAuthenticationFilter.class );

	}

	@Bean
	public PasswordEncoder passwordEncoder()
	{
		return NoOpPasswordEncoder.getInstance();
	}

	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Autowired
	private UserService userService;

}
