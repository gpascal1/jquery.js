(function ($) {
    "use strict";

     $(function() {
    $('input').focus(function(){
      $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function(){
      var inputValue = $(this).val();
      if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
      } else {
        $(this).addClass('filled');
      }
    });  
    });  

     $(function() {
   
    var $inputItem = $(".js-inputWrapper");
    $inputItem.length && $inputItem.each(function() {
        var $this = $(this),
            $input = $this.find(".formRow--input"),
            placeholderTxt = $input.attr("placeholder"),
            $placeholder;

        $input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
        $input.attr("placeholder", ""),
        $placeholder = $this.find(".placeholder"),

        $input.val().length ? $this.addClass("active") : $this.removeClass("active"),

        $input.on("focusout", function() {
            $input.val().length ? $this.addClass("active") : $this.removeClass("active");
        }).on("focus", function() {
            $this.addClass("active");
        });
    });
    });
    
    
    
    
     $(function() {
   
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function (g) { 
        var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
    });
    });

    
    
      
    $(function() {
    
    
    var $field = $('input'),
    $zoomBtn = $('.zoomBtn'),
    $closeBtn = $('.closeBtn'),
    $overlay = $('.overlay');

    $field.on('focus', function() {
      $(this).parent().addClass('focus');
      $(this).parent().removeClass('actives');
    })

    $field.on('blur', function() {
      $(this).parent().removeClass('focus');

      if ($(this).val() !== "") {
        $(this).parent().addClass('actives');
      } else {
        $(this).parent().removeClass('actives');
      }
    });

    function closeZoom() {
        $closeBtn.parent().removeClass('zoomOn');
        $overlay.removeClass('open');  
    }


    $zoomBtn.on('click', function() {
        $(this).parent().addClass('zoomOn');
        $overlay.addClass('open');
    });

    $closeBtn.on('click', function() {
      closeZoom();
    });

    $overlay.click(function() {
      closeZoom();
    })

    $(document).keyup(function(e) {
         if (e.keyCode == 27) { // escape key maps to keycode `27`
          closeZoom();
        }
    });


    
    
     
     });   
    
 
 }(jQuery));

   
    
    