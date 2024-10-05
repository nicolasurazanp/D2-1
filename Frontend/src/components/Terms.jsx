import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const Terms = () => (
  <div className='containerTerms'>
       
    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Términos y Condiciones</Header>

<p>¡Bienvenido a nuestro supermercado! Antes de continuar, por favor, asegúrate de leer detenidamente los siguientes términos y condiciones:</p>

<p>1. Responsabilidad del usuario: Al utilizar nuestro servicio y realizar compras en nuestro supermercado, el usuario acepta ser responsable de cualquier acción realizada bajo su cuenta.</p>

<p>2. Privacidad y protección de datos: Nos comprometemos a proteger la privacidad de nuestros clientes. Cualquier información personal proporcionada será tratada de acuerdo con nuestra política de privacidad.</p>

<p>3. Precios y disponibilidad: Nos esforzamos por mantener los precios de los productos actualizados y garantizar su disponibilidad. Sin embargo, los precios y la disponibilidad pueden estar sujetos a cambios sin previo aviso.</p>

<p>4. Política de devolución y reembolso: Consulta nuestra política de devolución y reembolso para obtener información sobre cómo proceder en caso de productos defectuosos o insatisfactorios.</p>

<p>5. Derechos de propiedad intelectual: Todos los derechos de propiedad intelectual relacionados con nuestro sitio web y servicios son propiedad exclusiva de nuestro supermercado.</p>

<p>6. Comunicaciones: Al registrarse en nuestro sitio web, el usuario acepta recibir comunicaciones de nuestra parte, incluidos correos electrónicos promocionales y boletines informativos.</p>

<p>7. Ley aplicable: Estos términos y condiciones están sujetos a las leyes vigentes en la jurisdicción en la que operamos.</p>



<Header as='h4'>Información Legal</Header>

<List as='ul'>
        <List.Item as='li'>
          <strong>Nombre:</strong> Supertiendas y Droguerías D2 S.A.S
        </List.Item>
        <List.Item as='li'>
          <strong>NIT:</strong> 821.204.420
        </List.Item>
        <List.Item as='li'>
          <strong>Dirección de Notificación Fiscal:</strong> Calle 20 No. 30 - 126 Local 4-20
        </List.Item>
        <List.Item as='li'>
          <strong>Teléfono:</strong> 34574985
        </List.Item>
        <List.Item as='li'>
          <strong>Correo:</strong> <a href='monje:servicioalcliente@D2.com.co'>servicioalcliente@D2.com.co</a>
        </List.Item>
      </List>


      <p>¡Gracias por elegir nuestro supermercado! Si tienes alguna pregunta o inquietud sobre estos términos y condiciones, no dudes en contactarnos.</p>


    </Container>

   
  </div>
)

export default Terms