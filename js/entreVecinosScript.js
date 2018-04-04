$(document).ready(function(){
    
               var filterParameter = GetURLParameter();
    
               if(filterParameter.length != 0){
                  filterItems(filterParameter);
    
                  $('.filter-button-group button[data-filter="'+filterParameter+'"]').addClass('active');
               }
               
               
               // init Isotope
              
              // filter items on button click
              $('.filter-button-group').on( 'click', 'button', function() {
                var $thisItem = $(this);
                if (!$thisItem.hasClass('active')){
                  $('.filter-button-group button').removeClass('active');
                  $thisItem.addClass('active');
                }
    
                var filterValue = $(this).attr('data-filter');
                filterItems(filterValue);
              });
    
              function filterItems(filterSelected){
                var $grid = $('#directory-list').isotope({
                // options
              });
              $grid.isotope({ filter: filterSelected });
              var isotopeData = $grid.data('isotope');
                if(isotopeData.filteredItems.length == 0){
                  $('.notFoundMessage').css('display','block');
                }
                else{
                  $('.notFoundMessage').css('display','none');
                }
              }
    
                function GetURLParameter(){
                  var checkURL = window.location.search.substring(1);
                  
                  if(checkURL.length != 0 ){
                    var filterOption = checkURL.split('=');
                    return "."+filterOption[1];
                  }
                  else{
                    return "*";
                  }
                }

               
             });

             $('.scrollBackToTop').click(function(e){
            

                $('html,body').animate({
                    scrollTop: 0}, 500);
             });
        