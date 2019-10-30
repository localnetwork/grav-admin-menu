(function ($){
    'use strict'; 
    
    
    $(document).ready(function () {
        adminMenu();
    });
    
    $(window).on('load', function () {
       console.log('admin menu loaded!'); 
       adminMenu();
    });
    
    $(window).on('resize', function (){
        adminMenu();
    });
    
    $(window).on('scroll', function () {
        adminScroll();  
    });
    
    
    function adminMenu() {
        var toolbarHeight = $('.admin-menu').outerHeight();
        
        
        
        if($('.admin-menu').length > 0) {
            $('body').addClass('has-admin-menu').css({
                 "padding-top": toolbarHeight, 
            }); 
        }
    }
    
    function adminScroll() {
        var ofs = window.pageYOffset; 
        var adm = $('.admin-menu');
        
        if(ofs < 110) {
            adm.removeClass('admin-scrolled');
        }else {
            adm.addClass('admin-scrolled');
        }
    }
    
})(jQuery);