"use strict"; 

function menuResizer() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function openSearchForm(){
    document.getElementById("searchForm").style.display = 'block';
    document.getElementById("mobile-search").style.display = 'none';
    document.getElementById("open-filter").style.display = 'none';
    document.getElementById("close-search").style.display = 'block';
  }

  function closeSearchForm(){
    document.getElementById("searchForm").style.display = 'none';
    document.getElementById("mobile-search").style.display = 'inline-block';
    document.getElementById("open-filter").style.display = 'inline-block';
    document.getElementById("close-search").style.display = 'none';
  }

  function openFilter(){
    document.getElementById("filter").style.display = 'block';
    document.getElementById("open-filter").style.display = 'none';
    document.getElementById("close-filter").style.display = 'inline-block';
  }

  function closeFilter(){
    document.getElementById("filter").style.display = 'none';
    document.getElementById("open-filter").style.display = 'inline-block';
    document.getElementById("close-filter").style.display = 'none';
  }

  $(document).ready(function(e) {
        var preview = document.querySelectorAll("option");

        for (var i = 0; i < preview.length;  i++) {
            preview[i].setAttribute("data-image", 'images/notselected.svg');
            $('option:selected').attr("data-image", 'images/selected-option.svg'); 
        }

        $("select").on('change', function() {
            $('.enabled img').attr("src", 'images/notselected.svg'); 
            $('.enabled.selected img').attr("src", 'images/selected-option.svg'); 

        });

        // try {
        //   $("select").msDropDown();
        // } catch(e) {
        //   alert(e.message);
        // }

   });

  
  