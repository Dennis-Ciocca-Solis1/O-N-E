package com.aluracursos.radioalura.modelos;

public class MisFavoritos {

    //Adicione un nuevo audio a la lista de favoritos
    public void adicione(Audio audio){
        if(audio.getClasificacion() >= 8){
            System.out.println(audio.getTitulo() + " es uno de los favoritos del momento");
        } else {
            System.out.println(audio.getTitulo() + " también es uno de los favoritos");
        }
    }
}
