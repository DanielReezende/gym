package gym.services;

import java.util.List;

import org.springframework.stereotype.Service;

import gym.daos.ExerciseDao;
import gym.models.Exercise;

@Service
public class ExerciseService
{

	public Exercise create( final Exercise exercise )
	{
		return this.dao
			.create(
				exercise.getDsExercicio(),
				exercise.getRepeticoes(),
				exercise.getQtdRepeticoes(),
				exercise.getIdSerie() );
	}

	public void delete( final Integer id )
	{
		this.dao.delete( id );
	}

	public List<Exercise> list()
	{
		return this.dao.list();
	}

	public Exercise update( final Exercise exercise )
	{
		return this.dao
			.update(
				exercise.getDsExercicio(),
				exercise.getRepeticoes(),
				exercise.getQtdRepeticoes(),
				exercise.getIdSerie(),
				exercise.getIdExercicio() );
	}

	private ExerciseDao dao;

}
