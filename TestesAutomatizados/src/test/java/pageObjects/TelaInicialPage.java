package pageObjects;

import static utils.Utils.driver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;



public class TelaInicialPage extends BasePage {


	// BasePase
	public void acionarAbaAdmin() {
		abaAdmin.click();
	}

	// ELEMENTOS
	@FindBy(name = "btnAdd")
	public WebElement botaoAdd;

	public void AcionarBotaoAdd() {
		botaoAdd.click();
	}

	public void acessarMenuCustomField() {
		Actions acao = new Actions(driver);
		acao.moveToElement(abaPim).build().perform();
		acao.moveToElement(menuConfiguration).build().perform();
		acao.moveToElement(menuField).click().build().perform();
	}

}
