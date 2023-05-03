 $(document).on("click", ".clearThemeColor", function(){

    localStorage.themeClassAdd = ' ';
    location.reload(true);
 });


 $(document).on("click", ".comman-search", function(){
    window.location.href="article.html"
 });

 $(document).on("click", "#slider_three .submitcol .btn", function(){
    window.location.href="article.html"
 });
 

 /*colorchange-*/
 (function(exports) {
           var themeChanger = {
             settings: {
               wrapper: $('.wrapper'),
               buttons: $('.controlsk > button')
             },
             init: function () {

              $(".wrapper").addClass(localStorage.themeClassAdd); 
  
                  var _self = this;
                 this.settings.buttons.on('click', function () {
                   var $node = $(this),
                       theme = $node.data('theme');
                       localStorage.themeClassAdd = theme;
                   _self.settings.wrapper.removeClass().addClass('wrapper ' + theme);
                   _self.settings.buttons.removeAttr('disabled');
                   $node.attr('disabled', true);
                 });
             }
           };
           themeChanger.init();
         }(window));
 /*end colorchange-*/

jQuery(document).ready(function($){

     $(document).on("click", ".slide_toggle", function(event){
      event.preventDefault();
      $(".more-porduct").toggleClass("show");
      if($(this).hasClass("more_less"))
      {
        $(this).html("More Product &nbsp; &nbsp;<i class='fas fa-plus'></i>");
      }else{
        $(this).html("less Product &nbsp; &nbsp;<i class='fas fa-minus'></i>");
      }
       $(this).toggleClass("more_less");
    });

     $(document).on("click", "#a-selector_icon", function(){ 
    $(".a-customizer").toggleClass("a-customizer_toggle");
    });
});


jQuery(document).ready(function($){
  
 if ($(window).width() > 991) {
    $(".dropdown .dropdown-toggle ").on("click", function(e){
        e.preventDefault();

      
        var thisURL = $(this).attr("href");
        if(thisURL != "#")
        {
            window.location.href = thisURL;
        }
        return false;      
    });
}
else {}

});


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}




 $(".fright.searchForm #search").focus(function(event){
      $(".fright.searchForm").css("bottom","0");
      
    });

 $(".fright.searchForm #search").focusout(function(event){
      $(".fright.searchForm").css("bottom","-15px");
       
      
    });

    

   $(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 170) {

        $(".bg-header-color").addClass("background-color");
        $(".navbar-3").addClass("addshadow");


    } else {

        $(".bg-header-color").removeClass("background-color");
        $(".navbar-3").removeClass("addshadow");

    }

    if (scroll >= 100) {

        $(".slider_four").addClass("navbar-4-fixed");


    } else {

        $(".slider_four").removeClass("navbar-4-fixed");

    }
      
});


/*-----searchform-------*/
    /*for example placehoder*/
    superplaceholder({
      el: search,
      sentences: [ 'Search for help', 'Ex: Accounting', 'Ex: Beginners Guide', 'Ex: Charges & Refund' ],
      options: {
        letterDelay: 80,
        loop: true,
        startOnFocus: false
      }
    })
    /*end for example placehoder*/
    /*for auto complite*/
 function autocomplete(inp, arr) {
           /*the autocomplete function takes two arguments,
           the text field element and an array of possible autocompleted values:*/
           var currentFocus;
           /*execute a function when someone writes in the text field:*/
           inp.addEventListener("input", function(e) {
               var a, b, i, val = this.value;
               /*close any already open lists of autocompleted values*/
               closeAllLists();
               if (!val) { return false;}
               currentFocus = -1;
               /*create a DIV element that will contain the items (values):*/
               a = document.createElement("DIV");
               a.setAttribute("id", this.id + "autocomplete-list");
               a.setAttribute("class", "autocomplete-items");
               /*append the DIV element as a child of the autocomplete container:*/
               this.parentNode.appendChild(a);
               /*for each item in the array...*/
               for (i = 0; i < arr.length; i++) {
                 /*check if the item starts with the same letters as the text field value:*/
                 if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                   /*create a DIV element for each matching element:*/
                   b = document.createElement("DIV");
                   /*make the matching letters bold:*/
                   b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                   b.innerHTML += arr[i].substr(val.length);
                   /*insert a input field that will hold the current array item's value:*/
                   b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                   /*execute a function when someone clicks on the item value (DIV element):*/
                   b.addEventListener("click", function(e) {
                       /*insert the value for the autocomplete text field:*/
                       inp.value = this.getElementsByTagName("input")[0].value;
                       /*close the list of autocompleted values,
                       (or any other open lists of autocompleted values:*/
                       closeAllLists();
                   });
                   a.appendChild(b);
                 }
               }
           });
           /*execute a function presses a key on the keyboard:*/
           inp.addEventListener("keydown", function(e) {
               var x = document.getElementById(this.id + "autocomplete-list");
               if (x) x = x.getElementsByTagName("div");
               if (e.keyCode == 40) {
                 /*If the arrow DOWN key is pressed,
                 increase the currentFocus variable:*/
                 currentFocus++;
                 /*and and make the current item more visible:*/
                 addActive(x);
               } else if (e.keyCode == 38) { //up
                 /*If the arrow UP key is pressed,
                 decrease the currentFocus variable:*/
                 currentFocus--;
                 /*and and make the current item more visible:*/
                 addActive(x);
               } else if (e.keyCode == 13) {
                 /*If the ENTER key is pressed, prevent the form from being submitted,*/
                 e.preventDefault();
                 if (currentFocus > -1) {
                   /*and simulate a click on the "active" item:*/
                   if (x) x[currentFocus].click();
                 }
               }
           });
           function addActive(x) {
             /*a function to classify an item as "active":*/
             if (!x) return false;
             /*start by removing the "active" class on all items:*/
             removeActive(x);
             if (currentFocus >= x.length) currentFocus = 0;
             if (currentFocus < 0) currentFocus = (x.length - 1);
             /*add class "autocomplete-active":*/
             x[currentFocus].classList.add("autocomplete-active");
           }
           function removeActive(x) {
             /*a function to remove the "active" class from all autocomplete items:*/
             for (var i = 0; i < x.length; i++) {
               x[i].classList.remove("autocomplete-active");
             }
           }
           function closeAllLists(elmnt) {
             /*close all autocomplete lists in the document,
             except the one passed as an argument:*/
             var x = document.getElementsByClassName("autocomplete-items ");
             for (var i = 0; i < x.length; i++) {
               if (elmnt != x[i] && elmnt != inp) {
                 x[i].parentNode.removeChild(x[i]);
               }
             }
           }
           /*execute a function when someone clicks in the document:*/
           document.addEventListener("click", function (e) {
               closeAllLists(e.target);
               });
         }
         
         /*An array containing all the country names in the world:*/
         var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
         
         /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
         autocomplete(document.getElementById("search"), countries);
         /*end for auto complite*/