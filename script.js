 $(".dropdown").hide();
 $("#hideshow").on('click', function() {
     $(".dropdown").toggle(200);
     // console.log('called');
 });

 $('.dropdown img').on('click', function() {
     var temp = $(this);
     var url = temp[0].currentSrc;
     var path = "<img class='my-icon' src=" + "'" + url + "'" + " />"
     var to_append = $('.info').html();
     $('.info').html(to_append + " " + path);
     // $('.info').focus();
 });

 // $('body').on('mouseup', function(e) {
 //     var container = $(".dropdown-wrapper .dropdown");
 //     console.log(e.target);
 //     if (!container.is(e.target) && container.has(e.target).length === 0) {
 //         container.hide();
 //     }
 // });

 $(".dropdown").on('mouseleave', function() {
     $(this).toggle(200);
 });