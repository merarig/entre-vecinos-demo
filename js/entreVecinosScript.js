$(document).ready(function(){
  //  initialize isotope
        var $grid = $('#directory-list').isotope({
          // options
        });
      /*  var allServicers = $('.servicer-box');
 

        allServicers.each(function(){
          var $this = $(this);
          var classList = $(this).attr('class');

          checkClassAndAddImage(classList);
          

        });*/
        
        
        /*function checkClassAndAddImage(classList){
          var classArray = classList.split(" ");
          for(var i=0; i < classArray.length; i++){
           var currentClass = classArray[i];
            switch (currentClass){
                case 'comercio':
                $('.comercio').find('img').attr("src","images/img_generic-comercio.jpg");
                break;
                case 'comida':
                $('.comida').find('img').attr("src","images/img_generic-food.jpg");
                break;
                case 'construccion':
                $('.construccion').find('img').attr("src","images/img_generic-construction.jpg");
                break;
                case 'profesional':
                $('.profesional').find('img').attr("src","images/img_generic-profesional.jpg");
                break;
                case 'proveedor-de-servicio':
                $('.proveedor-de-servicio').find('img').attr("src","images/img_generic-proveedor-servicio.jpg");
                break;
                default:
                break;
            }
          }
        }*/

               var filterParameter = GetURLParameter();
    
               if(filterParameter.length != 0){
                  filterItems(filterParameter);

                  var dropdownSelected = $('.dropdownFilter option[value="'+filterParameter+'"]').parent('.dropdownFilter');
    
                  
                  displayChosenFilter(dropdownSelected,filterParameter);
                  
               }
               
               
               // init Isotope
              var filters ={};

              $('.dropdownFilter').change(function(){

                //dropdown id
                var filterGroup = $(this).attr("id");
                var filterVal = $('#'+filterGroup).val()
                //add filter to filtergroup
                filters[filterGroup] = filterVal;

                var filterValues = concatValues(filters);
                filterItems(filterValues);

                //change filter text info at top
                displayChosenFilter($('#'+filterGroup),filterVal);
              });

              function concatValues(obj){
                var value = '';
                for(var prop in obj){
                  value += obj[prop];
                }
                return value;
              }
    
              function filterItems(filterSelected){
                
              $grid.isotope({ filter: filterSelected });
              var isotopeData = $grid.data('isotope');
                if(isotopeData.filteredItems.length == 0){
                  $('.notFoundMessage').css('display','block');
                }
                else{
                  $('.notFoundMessage').css('display','none');
                }
              }

              function displayChosenFilter(dropdownSelected,filterParameter){
           
                //change selected value of dropdown
                dropdownSelected.val(filterParameter);
                var dropdownID = dropdownSelected.attr('id');

                switch(dropdownID) {
                  case 'categories':
                    $('#categoryChosen').text($('#'+dropdownID+' option:selected').text());
                    break;
                  case 'location':
                    $('#locationChosen').text($('#'+dropdownID+' option:selected').text());
                    break;
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
             var $grid = $('#directory-list').isotope({
              // options
            });
$grid.isotope('layout');
             $('.scrollBackToTop').click(function(e){
            

                $('html,body').animate({
                    scrollTop: 0}, 500);
             });
        