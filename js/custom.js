 $(function() {

      // Hide preroll on scroll down.
      $(document).scroll(function (event) {
        var y = $(this).scrollTop();
        var self = this;
        console.log(y);
        $('#preroll').each(function(i, el) {
          var el = $(el);
          var bottom = el.offset().top + el.height();
          if (y > bottom) {
            $(el).hide();
            $(document).scrollTop(y-bottom);
            $(self).unbind(event);
          }
        });
      });

      $('#preroll').click(function(event) { 
          $(document).scrollTop($('#preroll').height()+20);
          $(this).unbind(event);
      });
    })