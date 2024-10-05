import React from 'react';
import { Segment, Container, Grid, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '3em 0em', marginTop: '3em', backgroundColor: '#0C88D1' }}>
      <Container textAlign='center'>
        <Grid columns={1} divided inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <List horizontal inverted style={{ justifyContent: 'space-evenly' }}>
                <List.Item as='a' href="#" className="icon-twitter" style={{ margin: '0 4em' }}>
                  <Icon name='twitter' link size='huge' />
                </List.Item>
                <List.Item as='a' href="#" className="icon-facebook" style={{ margin: '0 4em' }}>
                  <Icon name='facebook' link size='huge' />
                </List.Item>
                <List.Item as='a' href="#" className="icon-instagram" style={{ margin: '0 4em' }}>
                  <Icon name='instagram' link size='huge' />
                </List.Item>
                <List.Item as='a' href="#" className="icon-youtube" style={{ margin: '0 4em' }}>
                  <Icon name='youtube' link size='huge' />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={3} divided inverted stackable style={{ marginTop: '2em' }}>
          <Grid.Row>
            <Grid.Column>
              <List.Item as={Link} to="/about" style={{ color: 'white' }}>Sobre nosotros</List.Item>
            </Grid.Column>
            <Grid.Column>
              <List.Item as='a' style={{ color: 'white' }}>
                <span style={{ fontSize: '1.5em', textDecoration: 'none' }}>Tiendas D2</span>
              </List.Item>
            </Grid.Column>
            <Grid.Column>
              <List.Item as={Link} to="/legal" style={{ color: 'white' }}>Avisos legales</List.Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
