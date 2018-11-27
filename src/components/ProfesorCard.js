import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import factory from '../../ethereum/lectorContratos/factory';
import profesor from '../../ethereum/lectorContratos/profesoresContrato';


import {Bytes32AString} from '../../transformers';

class MiInfoProfe extends Component {

    state = {
        address: '',
        errorMessage: '',
        loading: false,
        GymsActuales:'',
        rating: [],
        numClase: 0,
        nombre: ""
    };
 
    _onPressButton = async (event) => {
        event.preventDefault();
        console.log(this.state.address);
        this.setState({ loading: true, errorMessage: '' });

    try {
        console.log(this.state.address);
        //const nombreYrating = 0;         
        const dirTipos = await factory.methods.verDireccionesMaestras().call();   
        console.log(dirTipos);
        const nombreYrating = await profesor(dirTipos[2]).methods.verProfesorNombreRating(this.state.address).call();
        //const GymsActuales = await factory.methods.checkGananciasProfesor(this.state.address).call();
        console.log(nombreYrating);
        const nombreTrans = Bytes32AString(nombreYrating[0]);

        console.log(nombreYrating[0]);
        
                            
        this.setState({ nombre: nombreTrans, rating: nombreYrating[1]});//

         
      } catch (err){
          this.setState({ errorMessage: err.message});
      }

          this.setState({ loading: false });

    };
 

    render() {
        return (
        <Container>
            <Header />
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                    <Button full info>
                        <Text>Info</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
        );
    }
}


export default MiInfoProfe;