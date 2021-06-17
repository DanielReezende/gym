package gym.services;

import java.util.List;

import org.springframework.stereotype.Service;

import gym.daos.SeriesDao;
import gym.models.Series;

@Service
public class SeriesService
{

	public Series create( final Series series )
	{
		return this.dao.create( series.getDesc(), series.getIdPerson() );
	}

	public void delete( final Integer id )
	{
		this.dao.delete( id );
	}

	public List<Series> list()
	{
		return this.dao.list();
	}

	public Series update( final Series series )
	{
		return this.dao.update( series.getDesc(), series.getIdPerson(), series.getId() );
	}

	private SeriesDao dao;

}
