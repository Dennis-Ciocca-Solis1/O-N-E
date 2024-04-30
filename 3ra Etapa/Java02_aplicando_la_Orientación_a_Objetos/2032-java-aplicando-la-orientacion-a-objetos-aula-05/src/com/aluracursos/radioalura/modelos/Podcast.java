package com.aluracursos.radioalura.modelos;

public class Podcast extends Audio {
    private String presentador;
    private String descripcion;

    //sobreescribiendo el método getClasificacion de la clase padre en la clase hija (Podcast)
    @Override
    public int getClasificacion() {
        if (getTotalDeReproducciones() >= 2000){
            return 9;
        } else {
            return 2;
        }
    }

    //getters and setters
    public String getPresentador() {
        return presentador;
    }

    public void setPresentador(String presentador) {
        this.presentador = presentador;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
