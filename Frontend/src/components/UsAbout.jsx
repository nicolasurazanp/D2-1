import React from 'react';
import {
  Container,
  Header,
  Segment,
  Grid,
  Icon,
} from 'semantic-ui-react';

const UsAbout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1' textAlign='center'>Acerca de Nosotros</Header>

      <Segment>
        <Header as='h2' textAlign='center'>Nuestra Historia</Header>
        <p>Somos D2, un supermercado comprometido con ofrecer a nuestros clientes la mejor experiencia de compra. Desde nuestros humildes comienzos como una pequeña tienda de barrio, hemos crecido y nos hemos expandido para convertirnos en una de las cadenas de supermercados más reconocidas en la región.</p>
      </Segment>

      <Segment>
        <Header as='h2' textAlign='center'>Nuestra Visión</Header>
        <div className="ui three column divided grid">
          <div className="row">
            <div className="column">
              <p>Nuestra visión en D2 es convertirnos en el destino preferido para las familias y hogares de nuestra comunidad.</p>
            </div>
            <div className="column">
              <p>Nos esforzamos por ofrecer una experiencia de compra excepcional que va más allá de simplemente adquirir productos básicos.</p>
            </div>
            <div className="column">
              <p>Queremos ser reconocidos como el lugar donde nuestros clientes encuentran no solo lo que necesitan, sino también lo que desean.</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <p>Gracias a nuestra amplia variedad de productos frescos, alimentos de calidad y artículos esenciales para el hogar.</p>
            </div>
            <div className="column">
              <p>Buscamos construir relaciones sólidas con nuestros clientes, siendo su socio confiable en su día a día.</p>
            </div>
            <div className="column">
              <p>Proporcionándoles conveniencia, calidad y valor en cada visita.</p>
            </div>
          </div>
        </div>
      </Segment>

      <Segment>
        <Header as='h2' textAlign='center'>Nuestros Valores</Header>
        <Grid columns={3} stackable textAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <Icon name='check circle' size='big' className='icon-contacto-checks' />
              <p>Honestidad</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='check circle' size='big' className='icon-contacto-checks' />
              <p>Respeto</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='check circle' size='big' className='icon-contacto-checks' />
              <p>Excelencia</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Icon name='check circle' size='big' className='icon-contacto-checks' />
              <p>Integridad</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='check circle' size='big' className='icon-contacto-checks' />
              <p>Ética</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='check circle' size='big' className='icon-contacto-checks' />
              <p>Responsabilidad Social</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <div className='Contacto'>
          <Header as='h2' textAlign='center'>Contáctanos</Header>
          <p>Si deseas obtener más información sobre D2 o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros:</p>
          <i className="mobile icon"></i> <a href="tel:123-456-789">123-456-789</a> <br />
          <i className="envelope icon"></i><a href="mailto:info@supermercadoD2.com">info@supermercadoD2.com</a> <br />
          <i className="map pin icon"></i>Calle quinta, Neiva, Colombia
        </div>
      </Segment>

      <Segment textAlign='center' className="mt-5">
        <div className="ui center aligned">
          <h2>Donde Encontrarnos</h2>
          <div className="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4072387.3676979123!2d-77.57770536993873!3d4.6046249432240325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44f32b91369f79%3A0x9791aa662522ae21!2sTiendas%20D2!5e0!3m2!1ses-419!2sco!4v1716161217621!5m2!1ses-419!2sco" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </Segment>
    </Container>
  </div>
);

export default UsAbout;
