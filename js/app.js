$(document).ready(function(){
	var serie = [];
	var num1,num2,primeroIndex,segundoIndex;
	var sort = false;
	var len = serie.length;
	var s_time = 1000;
	var n = 0;
	var a_time = (s_time/2)-100;
	// Evento para agregar
	$("#btn-add").click(function (e) {
  	//Controla el evento por defecto
  	e.preventDefault();
  	serie.push(Number($("#num").val()));
  		
  	//borra el valor del input luego de agregar
  	$("#num").focus().val("");

  	verSerie();
	});



	$("#btn-ordenar").click(function (e) {
  	e.preventDefault();
		for(var i=0; i<serie.length; i++){
			//Agrega una lista con la serie anterior para ver las iteraciones
			$("#serie-ordenada").append('<li><span>'+ serie[i] +' </span></li>');
		};
		// sort = metodo de jquery para realizar el ordenamiento 
		serie = serie.sort(function(a,b) { return a > b });
    verSerie();
    //desactiva el boton
		$("#btn-ordenar").prop("disabled",true);
		// Activa el boton
		$("#btn-ordenar-animado").prop("disabled", false);
	});



	function verSerie() {

		if (serie.length > 0)

			$('#serie-num').text(serie.join(' '));
		else
			$('#serie-num').text(" V A C I O ");
	};

	var bubble = function()
	{
		for( j=0; j < serie.length; j++)
			{
				
				// Metodo de ordenamiento burbuja que permite compara los numero de dos en dos
				primeroIndex= j;
				segundoIndex = j+1;

				num1 = parseInt($("ul#serie-ordenada li span").eq(primeroIndex).html());
				num2 = parseInt($("ul#serie-ordenada li span").eq(segundoIndex).html());

				if((segundoIndex == len-1) && sort == true){  
				 sort = false;
				 bubble(); 
				};
				
				if ( num1 > num2)
				 {
					sort=true;
					$("ul#serie-ordenada li").eq(segundoIndex).addClass("variable").animate({"right":"110px"},a_time,function() {

						$(this).css({'right':''}).removeClass("variable").insertBefore($(this).prev() ) });

					$("ul#serie-ordenada li").eq(primeroIndex).addClass("variable").animate({"left":"110px"},a_time,function() { 
						$(this).css({'left':''}).removeClass("variable"); 	n++;  });
					};
				};

		};


			$("#btn-ordenar-animado").click(function(e) {

				e.preventDefault();
				$("#btn-ordenar-animado").text("Siguiente Iteracion");
				 bubble();

				});

});
