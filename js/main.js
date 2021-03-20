$( document ).ready(function() {
	filmes = [
		{
			titulo: "Guardiões da Galaxia",
			descricao: "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres.",
			bg: "background-image:url('img/bg/0.jpg');"		 
		},
		{
			titulo: "Thor Ragnarok",
			descricao: "Após anos afastado, Thor retorna para casa e descobre que seu pai Odin, rei de Asgard, está desaparecido. Após encontrá-lo, ele toma conhecimento de sua irmã mais velha, Hela, a poderosa e implacável deusa da morte.",
			bg: "background-image:url('img/bg/1.jpg');"		 
		},
		{
			titulo: "Vingadores Ultimato",
			descricao: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
			bg: "background-image:url('img/bg/2.jpg');"		 
		},
		{
			titulo: "Homem Formiga e a Vespa",
			descricao: "Scott Lang lida com as consequências de suas escolhas tanto como super-herói quanto como pai. Enquanto tenta reequilibrar sua vida com suas responsabilidades como o Homem-Formiga, ele é confrontado por Hope van Dyne e Dr. Hank Pym com uma nova missão urgente.",
			bg: "background-image:url('img/bg/3.jpg');"		 
		},
		{
			titulo: "Homem de Ferro 2",
			descricao: "Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas.",
			bg: "background-image:url('img/bg/4.jpg');"		 
		},
		{
			titulo: "Capitão América 2: Soldado Invernal",
			descricao: "Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, também conhecido como Capitão América, segue tentando se ajustar ao mundo moderno.",
			bg: "background-image:url('img/bg/5.jpg');"		 
		},
		{
			titulo: "Doutor Estranho",
			descricao: "Após sua carreira ser destruída, um brilhante, porém arrogante, cirurgião ganha uma nova chance em sua vida quando um feiticeiro o treina para se tornar o Mago Supremo.",
			bg: "background-image:url('img/bg/6.jpg');"		 
		},
		{
			titulo: "Vingadores Guerra Infinita",
			descricao: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.",
			bg: "background-image:url('img/bg/7.jpg');"		 
		},
		{
			titulo: "Capitão América Guerra Civil",
			descricao: "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
			bg: "background-image:url('img/bg/8.jpg');"		 
		},
		{
			titulo: "Cavaleiro da Lua",
			descricao: "Ele é um antigo militar, filho de um rabino, que decide usar suas habilidades para virar um mercenário. Sua vida muda completamente quando, numa missão no Egito, ele recebe a visita do deus Khonshu, que o transforma no Cavaleiro da Lua",
			bg: "background-image:url('img/bg/9.jpg');"		 
		}
	]

	change_details(0);

	$('.item').click(function(e) { 
	    film = this.dataset.film;
	    change_details(film);
	});

	function change_details(index){
		new_html = '<div class="filme-principal" style="'+filmes[index].bg+'">'+
    				'<div class="container" id="detalhes-header">'+
        			'<h3 class="titulo">'+filmes[index].titulo+'</h3>'+
        			'<p class="descricao">'+filmes[index].descricao+'</p>'+
        			'<div class="botoes">'+
            		'<button role="button" class="botao">'+
                	'<i class="fas fa-play"></i>'+
                		'ASSISTIR AGORA'+
            		'</button>'+
            		'<button role="button" class="botao">'+
                	'<i class="fas fa-info-circle"></i>'+
                		'MAIS INFORMAÇÕES'+
            		'</button>'+
        			'</div>'+
    				'</div>'+
					'</div>';

		$('#detalhes-header').html(new_html);
	}
});