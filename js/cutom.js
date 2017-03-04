$(function(){
    'use strict';
    
     $('#Container').mixItUp();
    
    $('.shuffule li').click(function(){
        
        $(this).addClass('selected').siblings().removeClass('selected')
    });
    
    
    
   

});
