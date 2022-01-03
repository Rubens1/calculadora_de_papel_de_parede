
    //calculadora de rolos [Nova calculadora]
    $('.calculator__button').click(function(event) {
        event.preventDefault();
        productId = $('#form_comprar').find('#menuVars').attr('data-product-id');
        var ua = navigator.userAgent.toLowerCase()
          , platform = navigator.platform.toLowerCase();
        platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0],
        isMobile = /ios|android|webos/.test(platformName);

        /*
            Ativar o calculo ao selecionar o tamanho sem precisar aperta o entrer ou o botÃ£o calcular
        */

        if ($('#calculator__height').val() == '') {
            $('#calculator__height').addClass('erro_calculo');
            var resultHTML = $('#calculator__result');
            resultHTML.html("Selecione uma altura");
        } else if ($('#calculator__width').val() == '' || $('#calculator__width').val() == ',') {
            $('#calculator__width').addClass('erro_calculo');
            $('#calculator__width').focus();
            var resultHTML = $('#calculator__result');
            resultHTML.html("Insira uma largura");
        } else {
            $('#calculator__height').removeClass('erro_calculo');
            $('#calculator__width').removeClass('erro_calculo');

            calculadora();
            if (!isMobile) {
                window.scrollTo({
                    top: 100 * 4.2,
                    behavior: "smooth"
                });
            } else {
                window.scrollTo({
                    top: 100 * 9.4,
                    behavior: "smooth"
                });
            }
            $('.calculator__result').css('height', '300px');
        }

    });

    //botao comprar da calculadora 
    $('#calculator__buy').click(function() {
        $('#form_comprar').submit();
    });

    //INPUT CALCULADORA [Nova]
    $('.calculator__input').keyup(function() {
        var text = $(this).val().replace(/,+/g, '');
        text = text.substr(0, text.length - 2) + ',' + text.substr(-2);
        if (text == ',') {
            $(this).val('');
        } else {
            $(this).val(text);
        }

    })



    function calculadora() {
        var cWidth = parseFloat($('#calculator__width').val().replace(',', '.'));
        var cHeight = parseFloat($('#calculator__height').val().replace(',', '.'));
        var resultHTML = $('#calculator__result');
        var result = Math.ceil(cWidth / .50);
        var HTML = "0,50 x 1,00 metros";
        var variant = 1;

        if (cHeight > 1 && cHeight <= 1.30) {
            HTML = "0,50 x 1,30 metros";
            variant = 2;
        } else if (cHeight > 1.30 && cHeight <= 1.50) {
            HTML = "0,50 x 1,50 metros";
            variant = 3;
        } else if (cHeight > 1.50 && cHeight <= 2) {
            HTML = "0,50 x 2,00 metros";
            variant = 4;
        } else if (cHeight > 2 && cHeight <= 2.30) {
            HTML = "0,50 x 2,30 metros";
            variant = 5;
        } else if (cHeight > 2.30 && cHeight <= 2.50) {
            HTML = "0,50 x 2,50 metros";
            variant = 6;
        } else if (cHeight > 2.50 && cHeight <= 2.60) {
            HTML = "0,50 x 2,60 metros";
            variant = 7;
        } else if (cHeight > 2.60 && cHeight <= 2.70) {
            HTML = "0,50 x 2,70 metros";
            variant = 8;
        } else if (cHeight > 2.70 && cHeight <= 2.80) {
            HTML = "0,50 x 2,80 metros";
            variant = 9;
        } else if (cHeight > 2.80 && cHeight <= 3) {
            HTML = "0,50 x 3,00 metros";
            variant = 10;
        } else if (cHeight > 3 && cHeight <= 3.30) {
            HTML = "0,50 x 3,30 metros";
            variant = 11;
        } else if (cHeight > 3.30 && cHeight <= 3.50) {
            HTML = "0,50 x 3,50 metros";
            variant = 12;
        }

        resultHTML.html("<div class='suss'><strong>Voc&ecirc; ir&aacute; precisar de " + result + " Rolo(s) </strong>" + HTML + "</div>");
        $('#calculator__buy').css('display', 'inline-block');
        $(".lista_cor_variacao li:nth-child(" + variant + ")").trigger('click');
        var clear = 0;
        var invervalId = setInterval(function() {
            $('#quant').val(parseInt(result));
            clear += 200;
            if (clear > 3000) {
                clearInterval(invervalId)
            }
        }, 200);
        $('#variante_click').html(HTML);
        $('#variante_valor').html('');

        $('#quant').keyup(function(e) {
            e.preventDefault();
            var cWidth = parseFloat($('#calculator__width').val().replace(',', '.'));
            var result = Math.ceil(cWidth / .50);
            if ($(this).val() < parseInt(result) && $(this).val() != '') {
                alert('Se voc\u00ea diminuir a quantidade, as folhas n\u00e3o ser\u00e3o suficientes para cobrir a altura e largura da parede que voc\u00ea informou acima. Caso queira uma quantidade menor, altere as medidas da parede');
                var clear = 0;
                var invervalId = setInterval(function() {
                    $('#quant').val(parseInt(result));
                    clear += 200;
                    if (clear > 3000) {
                        clearInterval(invervalId)
                    }
                }, 200);

            }
        })

    }

  