function sumar(n1, n2){
    var resultado = n1+n2;
    var res=document.getElementById("resultado");
    if(n1 !=0 && n2 !=0){
        respuesta.style.display="block";
        res.innerHTML= `${resultado}`
        res.style.color="green";
    }else{
        respuesta.style.display="block";
        res.innerHTML= "No se pueden sumar cero"
        res.style.color="red";
    }
}

    function restar(n1, n2){
        var resultado = n1-n2;
        var res=document.getElementById("resultado");
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML= `${resultado}`
            res.style.color="green";
        }else{
            respuesta.style.display="block";
            res.innerHTML= "No se pueden restar cero"
            res.style.color="red";
        }
    }

    function multiplicar(n1, n2){
        var resultado = n1*n2;
        var res=document.getElementById("resultado");
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML= `${resultado}`
            res.style.color="green";
        }else{
            respuesta.style.display="block";
            res.innerHTML= "No se pueden multiplicar cero"
            res.style.color="red";
        }
    }

        function dividir(n1, n2){
            var resultado = n1/n2;
            var res=document.getElementById("resultado");
            if(n1!=0 && n2!=0){
                respuesta.style.display="block";
                res.innerHTML= `${resultado}`
                res.style.color="green";
            }else{
                respuesta.style.display="block";
                res.innerHTML= "No se pueden dividir cero"
                res.style.color="red";
            }
        }
    
    function potencia(n1, n2){
        var resultado = n1**n2;
        var res=document.getElementById("resultado");
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML= `${resultado}`
            res.style.color="green";
        }else{
            respuesta.style.display="block";
            res.innerHTML= "No se pueden potencia cero"
            res.style.color="red";
        }
    }

    function mostrar(){
        let n1 = parseInt(document.getElementById("n1").value);
        let n2 = parseInt(document.getElementById("n2").value);
        let opc=parseInt(document.getElementById("opc").value);
    

    switch(opc){
        case 1:
            sumar(n1, n2);
            break;
        case 2:
            restar(n1, n2);
            break;
        case 3:
            multiplicar(n1, n2);
            break;
        case 4:
            dividir(n1, n2);
            break;
        case 5:
            potencia(n1, n2);
            break;
        default:
            alert("No se encontro lo que pides")
    }
    }



    