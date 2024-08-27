# Actividades

**Ahora es tu turno!**\
Continuando con la app que creamos en la clase anterior, vamos a agregarle funcionalidades que vimos en esta segunda clase de React Basics.\
El objetivo será mejorar nuestra applicación anterior para lograr algo similar a este ejemplo:\
![Quotes app gif](./quotes-final.gif)

## Requisitos

- [ ] Agregar formulario que reciba Nombre y Autor.
  - [ ] Validar que no haya campos vacíos.
  - [ ] Al agregar la quote exitosamente, debe limpiar los campos.
- [ ] Agregar listado de quotes.
  - [ ] El listado debe cargar los datos de una API de quotes (ver sección de recursos).
  - [ ] La API devuelve a los nombres de los autores con una marca de agua  -*type.fit*-, busca el método de formatear el autor para quitarle esta marca.
  - [ ] Debe permitir eliminar quotes mediante un boton.
  - [ ] Al clickear en cualquier card de las quotes se debe setear esa quote como destacada.
- [ ] Intenta estilar tu aplicación y saca a flote tu creatividad!

## Recursos y aclaraciones

- API de quotes: `https://type.fit/api/quotes`
- Para estilar puedes utilizar Tailwind, Css, Sass o la tecnología/método que desees.

## Solo para valientes 💪🏻

Si has estado atento, en el gif de la app finalizada se puede ver que al recargar la pagina las quotes quedan almacenadas (tanto las de la API como las propias que creamos). Esto se logra gracias a [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).

*¿Te animas a implementar la carga y el guardado del listado en localStorage?*
