package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-report"},
		features = "src/test/resources/features",
		glue = "stepsDefnitions",
	//	tags = "@login",
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		dryRun = false
		)
public class RunnerTest {

	//Sempre antes de testar tem que ir no site e cofirmar como esta o nome de usuario e 
	//outra coisa que da erro tbm e no botão custom fild ir nele e excluir. ai passa tudo!!
}
