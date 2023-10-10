$(function() {

    //Ventana Registro y login

    //Registro

    $(".btn_registro").on("click", function() {
     $(".pantalla_registro").addClass("active");
    });

    
    $(".enlace_login").on("click", function(){
    $(".pantalla_registro").removeClass("active");
    $(".pantalla_log").addClass("active");
    });

    //login

    $(".btn_login").on("click", function(){
        $(".pantalla_log").addClass("active");
    });

    $(".icono_login").on("click", function(){
        $(".pantalla_log").addClass("active");
    });

    $(".enlace_registro").on("click", function(){
    $(".pantalla_log").removeClass("active");
    $(".pantalla_registro").addClass("active");
    });

    //Cierre

    $(".btn_cierre").on("click", function(){
        $(".pantalla_registro").removeClass("active");
        $(".pantalla_log").removeClass("active");
        });

    //menu

    $(".btn_menu").on("click", function(){
        $(".pantalla_menu").addClass("active");
    });

    $(".btn_cierre_menu").on("click", function(){
        $(".pantalla_menu").removeClass("active");
    });


    //password

    $(".btn_ojo").on("click", function(){

        $(".btn_ojo").css("color", "#1968dd")

        var contraseña= $("#inpt2").attr("type")
        var oculta="password"

        if (contraseña==oculta) {
            $("#inpt2").attr("type", "text")
            $(".btn_ojo").css("color", "#1968dd")
            
        } else {
            $("#inpt2").attr("type", "password")
            $(".btn_ojo").css("color", "#44474b")
            
        }

        var contraseña= $("#inpt4").attr("type")
        var oculta="password"

        if (contraseña==oculta) {
            $("#inpt4").attr("type", "text")
            
        } else {
            $("#inpt4").attr("type", "password")
            
        }

        
    });
//boton
    $("#inpt5").on("click", function(){
        var estado=$("#inpt5").prop("checked")
        if (estado == true) {
            $("#btn_reg").prop("disabled", false)
        
        } else {
            $("#btn_reg").prop("disabled", true)
            
        }
        });

// seccion inspirate


    // 1
    $(".insp1").on("mouseover", function(){
        
        $(".insp1 .filtro").addClass("active");
    });

    $(".insp1").on("mouseout", function(){
        
        $(".insp1 .filtro").removeClass("active");

    });

    // 2
    $(".insp2").on("mouseover", function(){
        
        $(".insp2 .filtro").addClass("active");
    });

    $(".insp2").on("mouseout", function(){
        
        $(".insp2 .filtro").removeClass("active");

    });

    // 3
    $(".insp3").on("mouseover", function(){
        
        $(".insp3 .filtro").addClass("active");
    });

    $(".insp3").on("mouseout", function(){
        
        $(".insp3 .filtro").removeClass("active");

    });

    // 4
    $(".insp4").on("mouseover", function(){
        
        $(".insp4 .filtro").addClass("active");
    });

    $(".insp4").on("mouseout", function(){
        
        $(".insp4 .filtro").removeClass("active");

    });

    // 5
    $(".insp5").on("mouseover", function(){
        
        $(".insp5 .filtro").addClass("active");
    });

    $(".insp5").on("mouseout", function(){
        
        $(".insp5 .filtro").removeClass("active");

    });


    /* $(".lista1").on("click",function(){
        $(".vuelo_movil").toggle();
    
        
      }); */

      $(function () {

        $("p").click(function(){

        $(this).next().slideToggle(310);

        });

       });
    
    

    //Cookies
    var options = {
        title: '&#x1F36A; Accept Cookies & Privacy Policy?',
        message: 'There are no cookies used on this site, but if there were this message could be customised to provide more details. Click the <strong>accept</strong> button below to see the optional callback in action...',
        delay: 600,
        expires: 1,
        link: '#privacy',
        onAccept: function(){
            var myPreferences = $.fn.ihavecookies.cookie();
            console.log('Yay! The following preferences were saved...');
            console.log(myPreferences);
        },
        uncheckBoxes: true,
        acceptBtnLabel: 'Accept Cookies',
        moreInfoLabel: 'More information',
        cookieTypesTitle: 'Select which cookies you want to accept',
        fixedCookieTypeLabel: 'Essential',
        fixedCookieTypeDesc: 'These are essential for the website to work correctly.'
    }

    $(document).ready(function() {
        $('body').ihavecookies(options);

        if ($.fn.ihavecookies.preference('marketing') === true) {
            console.log('This should run because marketing is accepted.');
        }

        $('#ihavecookiesBtn').on('click', function(){
            $('body').ihavecookies(options, 'reinit');
        });
    });
    



    





//Login correcto 

    /* $("#btn_log").on("click", function(){

        var usuario= $("#inpt3").val();
        var contraseña= $("#inpt4").val();

        var usuario=usuario.toLowerCase();
        var contraseña=parseInt(contraseña);

        if (usuario=="bob@gmail.com" && contraseña=="12345") {
            $(".pantalla_registro").addClass("oculto")
            $(".login_correcto").removeClass("oculto")
            
        } else { 
            $(".pantalla_registro").addClass("oculto")
            $(".login_incorrecto").removeClass("oculto")
            
        }

    }); */

});