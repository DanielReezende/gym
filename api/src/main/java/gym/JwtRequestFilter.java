package gym;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import gym.services.UserService;

@Component
public class JwtRequestFilter
	extends OncePerRequestFilter
{

	@Override
	protected void doFilterInternal(
		final HttpServletRequest request,
		final HttpServletResponse response,
		final FilterChain filterChain )
		throws ServletException,
			IOException
	{
		final String authorizationHeader = request.getHeader( "Authorization" );

		String jwtToken = null;
		String username = null;
		final String bearerToken = request.getHeader( "Authorization" );
		if ( StringUtils.hasText( bearerToken ) && bearerToken.startsWith( "Bearer " ) )
		{
			jwtToken = bearerToken.substring( 7, bearerToken.length() );
			username = this.jwtUtil.extractUsername( jwtToken );
			if ( ( username != null ) && ( SecurityContextHolder.getContext().getAuthentication() == null ) )
			{
				final UserDetails userDetails = this.userService.loadUserByUsername( username );
				if ( this.jwtUtil.validateToken( jwtToken, userDetails ) )
				{
					final UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails,
						null,
						userDetails.getAuthorities() );
					usernamePasswordAuthenticationToken
						.setDetails( new WebAuthenticationDetailsSource().buildDetails( request ) );
					SecurityContextHolder.getContext().setAuthentication( usernamePasswordAuthenticationToken );
				}
			}
		}
		filterChain.doFilter( request, response );
	}

	@Autowired
	JwtUtil jwtUtil;

	@Autowired
	UserService userService;
}
