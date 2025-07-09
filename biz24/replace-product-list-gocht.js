// filter https://anton.shevchuk.name/javascript/jquery-for-beginners-selectors/

$('span').prepend(function(indx){
    if($(this).text() == "Staplertyp")
    	return '<img src="/image/382664/marke.png" style="margin-top: -10px;" alt="Stapler Marke">';
    else
    	return '';
  });


//  product detail page
$('dt').prepend(function(indx){
    if($(this).text() == "Stapler Marke")
    	return '<img src="/image/382664/marke.png" style="margin-top: -10px;" alt="Marke">';
    else
    	return '';
  });

$('dt').prepend(function(indx){
    if($(this).text() == "Angebot-id")
    	return '<img src="/image/382597/id.png" style="margin-top: -10px;" alt="Angebot-id">';
    else
    	return '';
  });

$('dt').prepend(function(indx){
    if($(this).text() == "Betr.Std")
    	return '<img src="/image/382596/betriebsstunden.png" style="margin-top: -10px;" alt="Betr.Std">';
    else
    	return '';
  });

$('dt').prepend(function(indx){
    if($(this).text() == "Motor / Ladegerät")
    	return '<img src="/image/382667/motor.png" style="margin-top: -10px;" alt="Motor">';
    else
    	return '';
  });

$('dt').prepend(function(indx){
    if($(this).text() == "Masttyp")
    	return '<img src="/image/382665/masttyp.png" style="margin-top: -10px;" alt="Masttyp">';
    else
    	return '';
  });


$('dt').prepend(function(indx){
    if($(this).text() == "Modell")
    	return '<img src="/image/382666/model.png" style="margin-top: -10px;" alt="Modell">';
    else
    	return '';
  });
 

$('dt').prepend(function(indx){
    if($(this).text() == "Antriebsart")
    	return '<img src="/image/382549/antrieb.png" style="margin-top: -10px;" alt="Antriebsart">';
    else
    	return '';
  });
 
$('dt').prepend(function(indx){
    if($(this).text() == "Baujahr")
    	return '<img src="/image/382571/baujahr.png" style="margin-top: -10px;" alt="Baujahr">';
    else
    	return '';
  });
  
$('dt').prepend(function(indx){
    if($(this).text() == "Betriebsstunden")
    	return '<img src="/image/382596/betriebsstunden.png" style="margin-top: -10px;" alt="Betriebsstunden">';
    else
    	return '';
  });  


$('dt').prepend(function(indx){
    if($(this).text() == "Tragkraft")
    	return '<img src="/image/382572/tragkraft.png" style="margin-top: -10px;" alt="Tragkraft">';
    else
    	return '';
  });  


$('dt').prepend(function(indx){
    if($(this).text() == "Hubmast")
    	return '<img src="/image/382665/masttyp.png" style="margin-top: -10px;" alt="Hubmast">';
    else
    	return '';
  });  
  
$('dt').prepend(function(indx){
    if($(this).text() == "Hubhöhe")
    	return '<img src="/image/382573/hubhoehe.png" style="margin-top: -10px;" alt="Hubhöhe">';
    else
    	return '';
  }); 

$('dt').prepend(function(indx){
    if($(this).text() == "Bauhöhe")
    	return '<img src="/image/382595/bauhoehe.png" style="margin-top: -10px;" alt="Bauhöhe">';
    else
    	return '';
  }); 


$('dt').prepend(function(indx){
    if($(this).text() == "Sonderausstattung")
    	return '<img src="/image/382670/sonderausstattung.png" style="margin-top: -10px;" alt="Sonderausstattung">';
    else
    	return '';
  }); 
  
  
 $('dt').prepend(function(indx){
    if($(this).text() == "Reifen hinten")
    	return '<img src="/image/382669/reifen2.png" style="margin-top: -10px;" alt="Reifen hinten">';
    else
    	return '';
  }); 
  
  
   $('dt').prepend(function(indx){
    if($(this).text() == "Reifen vorne")
    	return '<img src="/image/382668/reifen.png" style="margin-top: -10px;" alt="Reifen vorne">';
    else
    	return '';
  });

if ($('div').hasClass('col-lg-4 col-md-4 col-xs-12')) {
  console.log('col-lg-4 col-md-4 col-xs-12');
  } else {
    console.log('Элемент не содержит класс');
  };
 
$('.col-lg-8.col-md-8.col-xs-12').removeClass('col-lg-8 col-md-8 col-xs-12').addClass('col-lg-5 col-md-5 col-xs-12');
$('.col-lg-4.col-md-4.col-xs-12').removeClass('col-lg-4 col-md-4 col-xs-12').addClass('col-lg-7 col-md-7 col-xs-12');
