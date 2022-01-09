// Menu em DropDown 

$(function () {
	$('.dropdown-toggle').dropdown();
}); 

/*-------------------------------------------------*/

/*Menu Scroll*/

$(document).ready(function(){

	var _containerLink = $('[data-container="link"]');
	var _containerMenu = $('[data-container="menu"]');

	// Evento Scroll no menu
	_containerLink.click(function(){

		// Variável
		var _sessao = $(this).data('link');


		//Funções
		function posicao(Seletor){

			// Variável
			var _alturaMenu = parseInt(_containerMenu.outerHeight());
			var _posicao = parseInt(($('[data-container="'+Seletor+'"]').position().top)-_alturaMenu);

			return _posicao;
		}

		// Evento Animação
		$('html,body').animate({scrollTop: posicao(_sessao)}, 1300);


		return false;
	
	});

});