
$(document).ready(function () {
  $('form').on('click', function(event){
      event.preventDefault();

    
     
  });
  
  $('#nr_tel').mask('(00) 00000-0000');
  $('#nr_cpf').mask('000.000.000-00')
  $('#nr_cep').mask('00000-000')
  
});