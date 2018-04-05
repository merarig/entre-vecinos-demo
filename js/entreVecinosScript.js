$(document).ready(function(){
    
               var filterParameter = GetURLParameter();
    
               if(filterParameter.length != 0){
                  filterItems(filterParameter);

                  var dropdownSelected = $('.dropdownFilter option[value="'+filterParameter+'"]');
    
                  dropdownSelected.parent('.dropdownFilter').val(filterParameter);
                  //displayChosenFilter(dropdownSelected.text());
               }
               
               
               // init Isotope
              
            
              var filters ={};

              $('.dropdownFilter').change(function(){

                var filterGroup = $(this).attr("id");

                filters[filterGroup] = $('#'+filterGroup).val();

                var filterValues = concatValues(filters);
                filterItems(filterValues);
              });

              function concatValues(obj){
                var value = '';
                for(var prop in obj){
                  value += obj[prop];
                }
                return value;
              }
    
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

              function displayChosenFilter(categoryChosen){
                  $('#categoryChosen').text(categoryChosen);
                 // $('#locationChosen').text(locationChosen);
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
        