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

import gym.models.Exercise;
import gym.services.ExerciseService;

@RestController
@RequestMapping( value = "/exercise" )
public class ExerciseController
{

	@PostMapping
	public Exercise create( @RequestBody final Exercise exercise )
	{
		return this.exerciseService.create( exercise );
	}

	@DeleteMapping
	public void delete( @RequestBody final Exercise exercise )
	{
		this.exerciseService.delete( exercise.getIdExercicio() );
	}

	@GetMapping
	public List<Exercise> list()
	{
		return this.exerciseService.list();
	}

	@PatchMapping
	public Exercise update( @RequestBody final Exercise exercise )
	{
		return this.exerciseService.update( exercise );
	}

	@Autowired
	private ExerciseService exerciseService;

}
