// ############################################################################
// 							SCRIPTS - "JAVASCRIPT" - INDEX_FORM
// ############################################################################

// Estes scripts são utilizados na página index_form.html.
// Insira essa linha entre as tags <script></script>: 
// <script language=javascript src="scripts/index_form.js" type=text/javascript></script>

// ############################################################################
// 							FUNÇÃO - ATUALIZA_RELOGIO
// ############################################################################

// Função para exibir e atualizar relógio do tipo digital.
function atualizarRelogio()
{ 
	var horarioAtual = new Date() 
	var hora = horarioAtual.getHours() 
	var	minuto = horarioAtual.getMinutes() 
	var segundo = horarioAtual.getSeconds() 

	str_segundo = new String (segundo) 
			
	if (str_segundo.length == 1) 
		segundo = "0" + segundo 

	str_minuto = new String (minuto) 
			
	if (str_minuto.length == 1) 
		minuto = "0" + minuto 

	str_hora = new String (hora) 
			
	if (str_hora.length == 1) 
		hora = "0" + hora 

	var horaImprimivel = hora + " : " + minuto + " : " + segundo 

	document.index.relogio.value = horaImprimivel 

	setTimeout("atualizarRelogio()",1000) 
}

// ############################################################################
// 							FUNÇÃO - ATUALIZA_CALENDARIO
// ############################################################################

// Função para exibir e atualizar data. 			
function atualizarCalendario()
{ 
	var data = new Date();
	var dia_semana = data.getDay();
	var mes = data.getMonth();
	var dia_mes = data.getDate();
	var ano = data.getFullYear();

	// Domingo
	if (dia_semana == 0){ dia_semana = 'Domingo'; }
	// Segunda-Feira
	if (dia_semana == 1){ dia_semana = 'Segunda - Feira'; }
	// Terça-Feira
	if (dia_semana == 2){ dia_semana = 'Terça-Feira'; }
	// Quarta-Feira
	if (dia_semana == 3){ dia_semana = 'Quarta-Feira'; }
	// Quinta-Feira
	if (dia_semana == 4){ dia_semana = 'Quinta-Feira'; }
	// Sexta-Feira
	if (dia_semana == 5){ dia_semana = 'Sexta-Feira'; }
	// Sábado
	if (dia_semana == 6){ dia_semana = 'Sabado'; }
	
	// Janeiro
	if (mes == 0){ mes = 'janeiro'; }
	// Fevereiro
	if (mes == 1){ mes = 'fevereiro'; }
	// Março
	if (mes == 2){ mes = 'março'; }
	// Abril
	if (mes == 3){ mes = 'abril'; }
	// Maio
	if (mes == 4){ mes = 'maio'; }
	// Junho
	if (mes == 5){ mes = 'junho'; }
	// Julho
	if (mes == 6){ mes = 'julho'; }
	// Agosto
	if (mes == 7){ mes = 'agosto'; }
	// Setembro
	if (mes == 8){ mes = 'setembro'; }
	// Outubro
	if (mes == 9){ mes = 'outubro'; }
	// Novembro
	if (mes == 10){ mes = 'novembro'; }
	// Dezembro
	if (mes == 11){ mes = 'dezembro'; }
			
	//document.write('<p style="position:absolute; top:10px; left:10px; text-align: left;">' + dia_semana + ', ' + dia_mes + ' de ' + mes + ' de ' + ano + '.' + '</p>');		
	document.index.calendario.value = dia_semana + ', ' + dia_mes + ' de ' + mes + ' de ' + ano + '.' 
		
	setTimeout("atualizarCalendario()",300000) 
}