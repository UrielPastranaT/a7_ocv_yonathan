function app()
{
    let canvas = document.getElementById("lienzo");
    var coordenadas = document.getElementById("coordenadas");

    var imgFondoGato  = new Image();
    imgFondoGato.src  = "./fondogato-r.png";


    /* Atributos de canvas */
    canvas.width = 800;
    canvas.height = 500;

    /* Estilos al canvas */
    canvas.style.border = "2px solid black";
    //canvas.style.backgroundColor = "lightgreen";
    canvas.style.backgroundImage = "url('./fondogato-r.png')";

    /* Contexto del canvas */
    var context = canvas.getContext("2d");

    /* Objeto del juego del gato */
    var cancelarMovimiento = false;
    var ganador = 0;
    var lineaGana = "";
    var turnoJugador = 1;
    

    const gato = 
    {
        drawBgImg: function() {

            var imgGato  = new Image();
            imgGato.src  = "./gato-r.png";
            var imgRaton = new Image();
            imgRaton.src = "./raton-r.png";

            imgGato.onload = () => 
            {
                context.drawImage(imgGato, 630, 140, 70, 70);
            }
            imgRaton.onload = () =>
            {
                context.drawImage(imgRaton, 630, 240, 70, 70);
            }
        },
        estados: 
        [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],

        rejilla: function()
        {   
            context.beginPath();
            for (var x=0; x<=500; x=x+100)
            {                
                context.moveTo(x,0);
                context.lineTo(x,500);
            }
            context.setLineDash([10, 5]);
            context.strokeStyle = "#6008CA";
            context.stroke();

            context.beginPath();
            for (var y=0; y<=500; y=y+100)
            {  
                context.moveTo(0,y);
                context.lineTo(500,y);
            }

            context.setLineDash([10, 5]);
            context.strokeStyle = "#6008CA";
            context.stroke();
            
        },
        escenario: function()
        {   
            context.beginPath();
            
            context.moveTo(200, 100);
            context.lineTo(200, 400);
            context.moveTo(300, 100);
            context.lineTo(300, 400);

            context.moveTo(100, 200);
            context.lineTo(400, 200);

            context.moveTo(100, 300);
            context.lineTo(400, 300);

            context.setLineDash([]);
            context.lineWidth = 6;
            context.strokeStyle = "#000000";
            context.stroke();

        },
        seleccionar: function(e)
        {
            var x = e.offsetX;
            var y = e.offsetY;

            var imgGato  = new Image();
            imgGato.src  = "./gato-r.png";
            var imgRaton = new Image();
            imgRaton.src = "./raton-r.png";
            

            coordenadas.innerHTML = " " + x + " " + y;

            //Dibujar Posicion 1,1
            if(x>=100 && x<=197 && y>=100 && y<=197 && gato.estados[0][0] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 103, 100);
                } else
                {
                    context.drawImage(imgRaton, 103, 100);
                }

            } else if(gato.estados[0][0] == 0)
            {
                context.clearRect(103, 100, 90, 90); //Borrar Posicion 1,1
            }

            //Dibujar Posicion 1,2
            if(x>=203 && x<=297 && y>=100 && y<=197 && gato.estados[0][1] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 206, 100);
                }else
                {
                    context.drawImage(imgRaton, 206, 100);
                }
                

            } else if(gato.estados[0][1] == 0)
            {
                context.clearRect(206, 100, 90, 90); //Borrar Posicion 1,2
            }

            //Dibujar Posicion 1,3
            if(x>=303 && x<=397 && y>=100 && y<=197 && gato.estados[0][2] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 306, 100);
                }else
                {
                    context.drawImage(imgRaton, 306, 100);
                }

            } else if(gato.estados[0][2] == 0)
            {
                context.clearRect(306, 100, 90, 90); //Borrar Posicion 1,3
            }

            //Dibujar Posicion 2,1
            if(x>=100 && x<=197 && y>=206 && y<=297 && gato.estados[1][0] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 103, 206);
                }else 
                {
                    context.drawImage(imgRaton, 103, 206);
                }

            } else if(gato.estados[1][0] == 0)
            {
                context.clearRect(103, 206, 90, 90); //Borrar Posicion 2,1
            }

            //Dibujar Posicion 2,2
            if(x>=203 && x<=297 && y>=206 && y<=297 && gato.estados[1][1] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 206, 206);
                }else
                {
                    context.drawImage(imgRaton, 206, 206);
                }

            } else if (gato.estados[1][1] == 0) 
            {
                context.clearRect(206, 206, 90, 90); //Borrar Posicion 2,2
            }
            
            //Dibujar Posicion 2,3
            if(x>=303 && x<=397 && y>=206 && y<=297 && gato.estados[1][2] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 306, 206);
                }else
                {
                    context.drawImage(imgRaton, 306, 206);
                }

            } else if(gato.estados[1][2] == 0)
            {
                context.clearRect(306, 206, 90, 90); //Borrar Posicion 2,3
            }

            //Dibujar Posicion 3,1
            if(x>=100 && x<=197 && y>=306 && y<=397 && gato.estados[2][0] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 103, 306);
                }else
                {
                    context.drawImage(imgRaton, 103, 306);
                }

            } else if(gato.estados[2][0] == 0)
            {
                context.clearRect(103, 306, 90, 90); //Borrar Posicion 3,1
            }

            //Dibujar Posicion 3,2
            if(x>=203 && x<=297 && y>=306 && y<=397 && gato.estados[2][1] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 206, 306);
                }else
                {
                    context.drawImage(imgRaton, 206, 306);
                }

            } else if(gato.estados[2][1] == 0)
            {
                context.clearRect(206, 306, 90, 90); //Borrar Posicion 3,2
            }

            //Dibujar Posicion 3,3
            if(x>=303 && x<=397 && y>=306 && y<=397 && gato.estados[2][2] == 0)
            {
                if(turnoJugador == 1)
                {
                    context.drawImage(imgGato, 306, 306);
                }else
                {
                    context.drawImage(imgRaton, 306, 306);
                }

            } else if(gato.estados[2][2] == 0)
            {
                context.clearRect(306, 306, 90, 90); //Borrar Posicion 3,3
            }
           
            if (x > 100 & x < 400 & y > 100 & y < 400) {
                cancelarMovimiento = true;
            } else {cancelarMovimiento = false;}

            if (x > 575 & x < 750 & y > 335 & y < 365 & ganador == 0) 
            {
                canvas.addEventListener("mousedown", gato.activarEstados);
                cancelarMovimiento = true;
            } else if (ganador != 0) 
            {
                canvas.removeEventListener("mousedown", gato.activarEstados);
            }
        },
        activarEstados: function(e) 
        {

            var x = e.offsetX;
            var y = e.offsetY;

            var imgGato = new Image();
            imgGato.src = "./gato-r.png";
            var imgRaton = new Image();
            imgRaton.src = "./raton-r.png"

            if(cancelarMovimiento)
            {
                //Dibujar Posicion 1,1
                if(x>=100 && x<=197 && y>=100 && y<=197 && gato.estados[0][0] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[0][0] = 1;
                        context.drawImage(imgGato, 103, 100);
                        turnoJugador = 2;
                    } else 
                    {
                        gato.estados[0][0] = 2;
                        context.drawImage(imgRaton, 103, 100);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 1,2
                else if(x>=203 && x<=297 && y>=100 && y<=197 && gato.estados[0][1] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[0][1] = 1;
                        context.drawImage(imgGato, 206, 100);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[0][1] = 2;
                        context.drawImage(imgRaton, 206, 100);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 1,3
                else if(x>=303 && x<=397 && y>=100 && y<=197 && gato.estados[0][2] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[0][2] = 1;
                        context.drawImage(imgGato, 306, 100);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[0][2] = 2;
                        context.drawImage(imgRaton, 306, 100);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 2,1
                else if(x>=100 && x<=197 && y>=206 && y<=297 && gato.estados[1][0] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[1][0] = 1;
                        context.drawImage(imgGato, 103, 206);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[1][0] = 2;
                        context.drawImage(imgRaton, 103, 206);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 2,2
                else if(x>=203 && x<=297 && y>=206 && y<=297 && gato.estados[1][1] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[1][1] = 1;
                        context.drawImage(imgGato, 206, 206);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[1][1] = 2;
                        context.drawImage(imgRaton, 206, 206);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 2,3
                else if(x>=303 && x<=397 && y>=206 && y<=297 && gato.estados[1][2] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[1][2] = 1;
                        context.drawImage(imgGato, 306, 206);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[1][2] = 2;
                        context.drawImage(imgRaton, 306, 206);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 3,1
                else if(x>=100 && x<=197 && y>=306 && y<=397 && gato.estados[2][0] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[2][0] = 1;
                        context.drawImage(imgGato, 103, 306);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[2][0] = 2;
                        context.drawImage(imgRaton, 103, 306);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 3,2
                else if(x>=203 && x<=297 && y>=306 && y<=397 && gato.estados[2][1] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[2][1] = 1;
                        context.drawImage(imgGato, 206, 306);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[2][1] = 2;
                        context.drawImage(imgRaton, 206, 306);
                        turnoJugador = 1;
                    }
                }
                //Dibujar Posicion 3,3
                else if(x>=303 && x<=397 && y>=306 && y<=397 && gato.estados[2][2] == 0)
                {
                    if(turnoJugador == 1)
                    {
                        gato.estados[2][2] = 1;
                        context.drawImage(imgGato, 306, 306);
                        turnoJugador = 2;
                    } else
                    {
                        gato.estados[2][2] = 2;
                        context.drawImage(imgRaton, 306, 306);
                        turnoJugador = 1;
                    }
                } else
                {
                    gato.limpiar();
                }

                if (x > 575 & x < 750 & y > 335 & y < 365 & ganador > 0) 
                {
                    gato.reiniciar();
                    gato.limpiar();
                }
                console.log(gato.estados);
                gato.analizar();
            }
        },
        analizar: function()
        {
            gato.gana();
        },
        gana: function()
        {
            if (gato.estados[0][0] == 1 & gato.estados[0][1] == 1 & gato.estados[0][2] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "H1";
            } else if (gato.estados[0][0] == 2 & gato.estados[0][1] == 2 & gato.estados[0][2] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "H1";
            }

            if (gato.estados[1][0] == 1 & gato.estados[1][1] == 1 & gato.estados[1][2] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "H2";
            } else if (gato.estados[1][0] == 2 & gato.estados[1][1] == 2 & gato.estados[1][2] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "H2";
            }

            if (gato.estados[2][0] == 1 & gato.estados[2][1] == 1 & gato.estados[2][2] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "H3";
            } else if (gato.estados[2][0] == 2 & gato.estados[2][1] == 2 & gato.estados[2][2] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "H3";
            }

            if (gato.estados[0][0] == 1 & gato.estados[1][0] == 1 & gato.estados[2][0] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "V1";
            } else if (gato.estados[0][0] == 2 & gato.estados[1][0] == 2 & gato.estados[2][0] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "V1";
            }

            if (gato.estados[0][1] == 1 & gato.estados[1][1] == 1 & gato.estados[2][1] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "V2";
            } else if (gato.estados[0][1] == 2 & gato.estados[1][1] == 2 & gato.estados[2][1] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "V2";
            }

            if (gato.estados[0][2] == 1 & gato.estados[1][2] == 1 & gato.estados[2][2] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "V3";
            } else if (gato.estados[0][2] == 2 & gato.estados[1][2] == 2 & gato.estados[2][2] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "V3";
            }

            if (gato.estados[0][0] == 1 & gato.estados[1][1] == 1 & gato.estados[2][2] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "D1";
            } else if (gato.estados[0][0] == 2 & gato.estados[1][1] == 2 & gato.estados[2][2] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "D1";
            }

            if (gato.estados[0][2] == 1 & gato.estados[1][1] == 1 & gato.estados[2][0] == 1) 
            {
                ganador = 1;
                Swal.fire(
                    {
                        imageUrl: 'ganogato-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR GATO'
                    });
                gato.reiniciar();
                lineaGana = "D2";
            } else if (gato.estados[0][2] == 2 & gato.estados[1][1] == 2 & gato.estados[2][0] == 2) 
            {
                ganador = 2;
                Swal.fire(
                    {
                        imageUrl: 'ganoraton-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'GANÓ EL JUGADOR RATÓN'
                    });
                gato.reiniciar();
                lineaGana = "D2";
            }
            if(gato.estados[0][0] != 0 & gato.estados[0][1] != 0 & gato.estados[0][2] != 0 & gato.estados[1][0] != 0
                & gato.estados[1][1] != 0 & gato.estados[1][2] != 0 & gato.estados[2][0] != 0 & gato.estados[2][1] != 0
                & gato.estados[2][2] != 0 & ganador == 0)
            {
                gato.reiniciar();
                Swal.fire(
                    {
                        imageUrl: 'empate-alert.png',
                        imageHeight: 300,
                        imageAlt: 'A tall image',
                        title: 'SEAMOS AMIGOS - EMPATE'
                    });
                
            }

            gato.pintarGanador();
        },
        pintarGanador()
        {
            if(lineaGana == "H1")
            {
                context.beginPath();
                context.moveTo(100, 150);
                context.lineTo(400, 150);
                    
                context.lineWidth = 3;
                context.strokeStyle = "#000000";
                context.stroke();
                
            }

            if(lineaGana == "H2")
            {
                context.beginPath();
                context.moveTo(100, 250);
                context.lineTo(400, 250);
                    
                context.lineWidth = 3;
                context.strokeStyle = "##000000";
                context.stroke();              
            }

            if(lineaGana == "H3")
            {
                context.beginPath();
                context.moveTo(100, 350);
                context.lineTo(400, 350);
                    
                context.lineWidth = 3;
                context.strokeStyle = "#000000";
                context.stroke();
                
            }

            if(lineaGana == "V1")
            {
                context.beginPath();
                context.moveTo(150, 100);
                context.lineTo(150, 400);
                    
                context.lineWidth = 3;
                context.strokeStyle = "#000000";
                context.stroke();      
            }

            if(lineaGana == "V2")
            {
                context.beginPath();
                context.moveTo(250, 100);
                context.lineTo(250, 400);
                    
                context.lineWidth = 3;
                context.strokeStyle = "#000000";
                context.stroke();      
            }

            if(lineaGana == "V3")
            {
                context.beginPath();
                context.moveTo(350, 100);
                context.lineTo(350, 400);
                    
                context.lineWidth = 3;
                context.strokeStyle = "#000000";
                context.stroke();      
            }

            if(lineaGana == "D1")
            {
                context.beginPath();
                context.moveTo(100, 100);
                context.lineTo(400, 400);
                    
                context.lineWidth = 3;
                context.strokeStyle = "#000000";
                context.stroke();      
            }

            if(lineaGana == "D2")
            {
                context.beginPath();
                context.moveTo(400, 100);
                context.lineTo(100, 400);
                    
                context.lineWidth = 3;
                context.strokeStyle = "#000000";
                context.stroke();      
            }
        },
        reiniciar: () => 
        {
            context.fillStyle = "#3CE9F8"
            context.fillRect(570, 335, 180, 30);
            context.fillStyle = "#5558F5"
            context.font = "15px Verdana";
            context.fillText("<<<Volver a jugar>>>", 575, 358);
            lineaGana = "";

            

            canvas.removeEventListener("mousedown", gato.activarEstados, false);
        },
        limpiar: () =>
        {
            for (a = 0; a < 3; a++) {
                for (b = 0; b < 3; b++) {
                    gato.estados[a][b] = 0;
                }
            };

            for(x=100;x<=300;x+=100){
                for(y=100;y<=300;y+=100){
                context.clearRect(x, y, 100, 100);
                }
            }

            gato.play();
            turnoJugador = 1;
        },
        mostrar: function()
        {

            context.fillStyle = "lightgreen"
            context.fillRect(500, 0, 300, 500);

            context.fillStyle = "#000000"
            context.font = "25px Arial";

            context.fillText("Gato y Ratón", 590, 50);
            context.fillStyle = "#00000";
            context.font = "20px Arial";

            context.fillText("Jugadores", 610, 100);
            context.fillText("Gato:", 530, 170);
            context.fillText("Ratón:", 530, 280);

            context.fillStyle = "#7F8C8D";
            context.fillRect(570, 335, 180, 30);
            context.fillStyle = "#000000";
            context.font = "20px";
            context.fillText("Volver a jugar", 600, 355);

        },
        play: function(pintarRegilla = false)
        {
            if(pintarRegilla)
                this.rejilla();
            this.drawBgImg();
            this.escenario();
            this.mostrar();

            lienzo.addEventListener("mousedown", gato.activarEstados, true);
            
        }
    }

    
    gato.play();
    lienzo.addEventListener("mousemove", gato.seleccionar);
    
    gato.escenario();

}

window.onload = function()
{
    app();
}