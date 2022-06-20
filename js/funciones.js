

function holamundo(){
    alert("hola desde funciones.js")
    }
     
    function vari(){
        var numero = 5;
        var num2 = prompt("numero a multiplicar")
        var num3 = numero * num2
        alert("El resultado de la multiplicacion es de: "+ num3)
    }
     
    function palabra(){
        var str = new String();
        str = "Arturo";
     
        alert("El tamaño del la palabra "+str.length);
        alert("la primera letra "+str.charAt(0));
        alert("en mayusculas "+str.toUpperCase());
    }
     
    function updates(){
        var fecha = new Date();
        var hora = fecha. getHours();
        var minutes = fecha.getMinutes();
     
        if (hora>=12) {
            alert (hora+":"+minutes+" Buenas tardes");
           
        } else {
            alert (hora+":"+minutes+" Buenos dias");
        }
    }

    
    function llamarId(){
        var elemento=document.getElementById('idicito')
        console.log(elemento.innerHTML);
        elemento.style.color = 'white'; 
        elemento.style.background = 'black'; 
    }

    function llamarNombre(){
        var elemento=document.getElementsByName('nombrecito')
        console.log(elemento.innerHTML);
        alert(elemento[1].innerHTML)
        elemento[0].style.color="blue"
        elemento[2].style.background="red"
    }

    function llamarClase(){
        var elemento =document.getElementsByClassName('verdecito');
        console.log(elemento);
        for(var i=0; i<elemento.length; i++) {
            elemento[i].style.color="blue"
            elemento[i].style.background="red"


        }
    }
    function llamarEtiqueta(){
        var elemento =document.getElementsByTagName("button")
        console.log(elemento);
        for(var i=0; i<elemento.length; i++) {
            elemento[i].style.border="1px solid red"
            elemento[i].style.color="white"
            elemento[i].style.background="black"
            elemento[i].style.borderRadius="3px"
        }        
    }

    function crearElemento() 
        {
            var elemento =document.getElementById("id-divs")
            elemento.innerHTML='<br><Button>modificar</Button>'
        }

        function mofificarElementos() 
        {
            var elemento =document.getElementById("id-divs")
            elemento.innerHTML='<br><Button>modificar</Button>'
        }

        function mensajeClick(){
                alert ( "Hola desde mensajeClick")
        }

        function mensajesobre(){
            alert ( "Hola desde onmouseover")
        }

        function mensajeCarga(){
            alert ( "Por que recargas la pagina :)")
            var elemento =document.getElementsByTagName("body")
            elemento[0].style.background="black"
        }
