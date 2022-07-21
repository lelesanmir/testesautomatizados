package stepsDefnitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;

public class TestandoActionsSteps {

	@Quando("acionar o submenu customField")
	public void acionar_o_submenu_customField() {
	   Na(TelaInicialPage.class).acessarMenuCustomField(); 
	}

	@Entao("o sistema apresenta a tela customField")
	public void o_sistema_apresenta_a_tela_customField() {
		assertEquals("Add Custom Field", driver.findElement(By.id("heading")).getText());  		 

	}
	
}

