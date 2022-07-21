package stepsDefnitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CadastrarUsuarioPage;
import pageObjects.TelaInicialPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class CadastrarUsuarioSteps {

	@Quando("eu acionar a aba admin")
	public void eu_acionar_a_aba_admin() {
		Na(TelaInicialPage.class).acionarAbaAdmin();
	}

	@Quando("acionar o botao add")
	public void acionarOBotaoAdd() {
		Na(TelaInicialPage.class).AcionarBotaoAdd();
	}

	@Quando("informar no campo employer name {string}")
	public void informarNoCampoEmployerName(String employerName) {
	    Na(CadastrarUsuarioPage.class).informarCampoEmployerName(employerName);
	}

	@Quando("informar no campo user name {string}")
	public void informarNoCampoUserName(String userName) {
	    Na(CadastrarUsuarioPage.class).informarCampoUserName(userName);
	}

	@Quando("informar no campo password {string}")
	public void informarNoCampoPassword(String senha) {
	    Na(CadastrarUsuarioPage.class).informarCampoPassword(senha);
	}

	@Quando("informar no campo confirmar password {string}")
	public void informarNoCampoConfirmarPassword(String senha) {
	    Na(CadastrarUsuarioPage.class).informarCampoConfirmarPassword(senha);
	}
	
	@Quando("acionar o botao salvar")
	public void acionarOBotaoSalvar() {
	    Na(CadastrarUsuarioPage.class).acionarBotaoSalvar();
	}

	@Entao("o sistema cadastra o usuario {string}")
	public void o_sistema_cadastra_o_usuario(String userName) throws Throwable{
	    assertTrue(driver.findElement(By.xpath("//a[text()='"+userName+"']")).isDisplayed());
	}
	
}
