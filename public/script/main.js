$(function(){
   var map2 = $('#map2');
   var map3 = $('#map3');
   var map4 = $('#map4');
   var map5 = $('#map5');

   var map22 = $('#map22');
   var map33 = $('#map33');
   var map44 = $('#map44');
   var map55 = $('#map55');

   var classSep = $("#index-sep");
   var classOct = $("#index-oct");
   var classCon = $("#contacts");

   map2.hide();
   map3.hide();
   map4.hide();
   map5.hide();
   map22.hide();
   map33.hide();
   map44.hide();
   map55.hide();
   classOct.hide();
   classCon.hide();
   
   
   $("#btnTwo").click(function(){
      map3.hide(1000);
      map4.hide(1000);
      map5.hide(1000);
      map2.show(1000);
   });
   
   $("#btn3").click(function(){
      map4.hide(1000);
      map5.hide(1000);
      map2.hide(1000);
      map3.show(1000);
   });
   
   $("#btn4").click(function(){
      map3.hide(1000);
      map5.hide(1000);
      map2.hide(1000);
      map4.show(1000);
   });
   
   $("#btn5").click(function(){
      map3.hide(1000);
      map4.hide(1000);
      map2.hide(1000);
      map5.show(1000);
   });

   $("#btn22").click(function(){
      map33.hide(1000);
      map44.hide(1000);
      map55.hide(1000);
      map22.show(1000);
   });
   
   $("#btn33").click(function(){
      map44.hide(1000);
      map55.hide(1000);
      map22.hide(1000);
      map33.show(1000);
   });
   
   $("#btn44").click(function(){
      map33.hide(1000);
      map55.hide(1000);
      map22.hide(1000);
      map44.show(1000);
   });
   
   $("#btn55").click(function(){
      map33.hide(1000);
      map44.hide(1000);
      map22.hide(1000);
      map55.show(1000);
   });


   $("#btn-sep-next").click(function(){
      classSep.hide();
      classCon.hide();
      classOct.show();
   });
   $("#btn-oct-prev").click(function(){
      classSep.show();
      classCon.hide();
      classOct.hide();
   });
   $("#btn-sep-contact").click(function(){
      classSep.hide();
      classCon.show();
      classOct.hide();
   });
   $("#btn-oct-contact").click(function(){
      classSep.hide();
      classCon.show();
      classOct.hide();
   });
   $("#btn-contact-prev").click(function(){
      classSep.hide();
      classCon.hide();
      classOct.show();
   });
});
