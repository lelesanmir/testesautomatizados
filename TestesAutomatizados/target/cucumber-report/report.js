$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Cadastrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cadastraUsuario"
    }
  ]
});
formatter.scenario({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastraUsuario"
    },
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba admin",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.eu_acionar_a_aba_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao add",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo employer name \"Fiona Grace\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoEmployerName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo user name \"Jonas\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo confirmar password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoConfirmarPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema cadastra o usuario \"Jonas\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.o_sistema_cadastra_o_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Ad\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"asd\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de usuario invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemDeUsuarioInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Admin\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"admin123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeOUsuarioLogado()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome [xXgapF]\u003e but was:\u003cWelcome [abcVirat]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepsDefnitions.LoginSteps.oSistemaExibeOUsuarioLogado(LoginSteps.java:40)\r\n\tat ✽.o sistema exibe o usuario logado(file:src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TestandoActions.feature");
formatter.feature({
  "name": "TestarActions",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@dropdown"
    }
  ]
});
formatter.scenario({
  "name": "verificar dropDown da aba",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@dropdown"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o submenu customField",
  "keyword": "Quando "
});
formatter.match({
  "location": "TestandoActionsSteps.acionar_o_submenu_customField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta a tela customField",
  "keyword": "Entao "
});
formatter.match({
  "location": "TestandoActionsSteps.o_sistema_apresenta_a_tela_customField()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Add Custom Field]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepsDefnitions.TestandoActionsSteps.o_sistema_apresenta_a_tela_customField(TestandoActionsSteps.java:22)\r\n\tat ✽.o sistema apresenta a tela customField(file:src/test/resources/features/TestandoActions.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});