#language: pt
#enconding: UTF-8

@cadastraUsuario
Funcionalidade: Cadastrar usuario
	
	@cadastro
  Cenario: cadastrar usuario
    Quando eu acionar a aba admin
    E acionar o botao add
    E informar no campo employer name "Fiona Grace"
    E informar no campo user name "Jonas"
    E informar no campo password "12345678"
    E informar no campo confirmar password "12345678"
    E acionar o botao salvar
    Entao o sistema cadastra o usuario "Jonas"
