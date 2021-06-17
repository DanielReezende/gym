package gym.models;

public class Exercise
{

	public Exercise()
	{
	}

	public String getDsExercicio()
	{
		return this.dsExercicio;
	}

	public Integer getIdExercicio()
	{
		return this.idExercicio;
	}

	public Integer getIdSerie()
	{
		return this.idSerie;
	}

	public Integer getQtdRepeticoes()
	{
		return this.qtdRepeticoes;
	}

	public Integer getRepeticoes()
	{
		return this.repeticoes;
	}

	private String dsExercicio;

	private Integer idExercicio;

	private Integer idSerie;

	private Integer qtdRepeticoes;

	private Integer repeticoes;
}
