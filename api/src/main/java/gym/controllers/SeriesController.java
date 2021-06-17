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

import gym.models.Series;
import gym.services.SeriesService;

@RestController
@RequestMapping( value = "/series" )
public class SeriesController
{

	@PostMapping
	public Series create( @RequestBody final Series series )
	{
		return this.seriesService.create( series );
	}

	@DeleteMapping
	public void delete( @RequestBody final Series series )
	{
		this.seriesService.delete( series.getId() );
	}

	@GetMapping
	public List<Series> list()
	{
		return this.seriesService.list();
	}

	@PatchMapping
	public Series update( @RequestBody final Series series )
	{
		return this.seriesService.update( series );
	}

	@Autowired
	private SeriesService seriesService;

}
