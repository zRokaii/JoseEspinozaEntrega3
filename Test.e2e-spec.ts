import {browser, element, by } from 'protractor';
 
describe('Tester', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Opciones de Menú");
    });  
    //creacion de prueba 2
    it("La descripcion de noticias se muestra por defecto", ()=>{
        expect(element(by.css(".noticia-description ion-card-content")).getText()).toContain("Descripcion");
    });  
});


 















