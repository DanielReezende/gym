package gym;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtUtil
{

	private String createToken( final Map<String, Object> claims, final String subject )
	{

		return Jwts
			.builder()
			.setClaims( claims )
			.setSubject( subject )
			.setIssuedAt( new Date( System.currentTimeMillis() ) )
			.setExpiration( new Date( System.currentTimeMillis() + ( 1000 * 60 * 60 * 10 ) ) )
			.signWith( SignatureAlgorithm.HS256, this.SECRET_KEY )
			.compact();
	}

	private Claims extractAllClaims( final String token )
	{
		return Jwts.parser().setSigningKey( this.SECRET_KEY ).parseClaimsJws( token ).getBody();
	}

	public <T> T extractClaim( final String token, final Function<Claims, T> claimsResolver )
	{
		final Claims claims = extractAllClaims( token );
		return claimsResolver.apply( claims );
	}

	public Date extractExpiration( final String token )
	{
		return extractClaim( token, Claims::getExpiration );
	}

	public String extractUsername( final String token )
	{
		return extractClaim( token, Claims::getSubject );
	}

	public String generateToken( final UserDetails userDetails )
	{
		final Map<String, Object> claims = new HashMap<>();
		return createToken( claims, userDetails.getUsername() );
	}

	private Boolean isTokenExpired( final String token )
	{
		return extractExpiration( token ).before( new Date() );
	}

	public Boolean validateToken( final String token, final UserDetails userDetails )
	{
		final String username = extractUsername( token );
		return ( username.equals( userDetails.getUsername() ) && !isTokenExpired( token ) );
	}

	private String SECRET_KEY = "secret";
}
