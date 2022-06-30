import React from 'react';
import { Button } from 'react-bootstrap';

function Contact() {
  return (
    <section class="container form my-5 d-flex flex-column justify-content-center align-items-center">
    <h1 class="my-5">Contacto</h1>
    <form>
        <input type="text" placeholder="Nombre y Apellido" /><br /><br />
        <input type="mail" placeholder="Email" /><br /><br />
        <input type="number" placeholder="Teléfono" /><br /><br />
        <textarea name="textarea" cols="30" rows="10" placeholder="Escriba su mensaje"></textarea><br />
        <Button class="buttons">Enviar</Button>
    </form>
  </section>
  )
}

export default Contact;