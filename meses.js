const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingrese un numero del 1 al 12: ');

let meses = {
 1 : "enero",
 2 : "febrero",
 3 : "marzo",
 4 : "abril",
 5 : "mayo",
 6 : "junio",
 7 : "julio",
 8 : "agosto",
 9 : "septiembre",
 10 : "octubre",
 11 : "noviembre",
 12 : "diciembre"
 };

 if (numero == 1)
 {console.log("La cantidad de dias de " + meses[1] + " es 31")}
    
        else if(numero == 2)
        {console.log("La cantidad de dias de " + meses[2] + " es 28")}

            else if(numero == 3)
            {console.log("La cantidad de dias de " + meses[3] + " es 31")}    

                else if(numero == 4)
                {console.log("La cantidad de dias de " + meses[4] + " es 30")}   

                    else if(numero == 5)
                    {console.log("La cantidad de dias de " + meses[5] + " es 31")}    
                        
                        else if(numero == 6)
                        {console.log("La cantidad de dias de " + meses[6] + " es 30")}   
                        
                                else if(numero == 7)
                                {console.log("La cantidad de dias de " + meses[7] + " es 31")}
                                    
                                    else if(numero == 8)
                                    {console.log("La cantidad de dias de " + meses[8] + " es 30")}    
                                        
                                        else if(numero == 9)
                                        {console.log("La cantidad de dias de " + meses[9] + " es 31")}    
                                            
                                            else if(numero == 10)
                                            {console.log("La cantidad de dias de " + meses[10] + " es 30")}

                                                else if(numero == 11)
                                                {console.log("La cantidad de dias de " + meses[11] + " es 31")}  
                                                    
                                                    else if(numero == 12)
                                                    {console.log("La cantidad de dias de " + meses[12] + " es 31")};
