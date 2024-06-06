import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "../imagens/logo.png";
import "../css/navegacao.css";
import { GrWheelchair } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function Navegacao({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className='logo' />
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" className='pesquisabotao'>Pesquisar</Button>
          </Form>

          <Button variant="primary" onClick={handleShow} className='botaocadeira' size="sm">
            <GrWheelchair className='iconsnav' />
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>PCD - Lei Federal 12.933/2013</Modal.Title>
            </Modal.Header>
            <Modal.Body>PCD - Pessoas com Deficiência (PCD) e/ou Portadores de Necessidades Especiais (PNE) (Lei Federal 12.933/2013):
              Possuem o benefício da meia-entrada o portador com deficiência (PCD) e/ou portadores de necessidades especiais e o seu acompanhante. Para a compra, retirada e acesso ao evento, é obrigatório apresentar o documento de PCD ou laudo médico e o Documento de Identidade original (RG) ou cópia autenticada, (o acompanhante poderá adquirir os dois ingressos, desde que o mesmo esteja com todos comprovantes em mãos). Caso não seja comprovado o direito a meia-entrada tipo (PCD) o evento/organizador poderá cobrar a diferença do preço da inteira do lote vigente no acesso ao evento.</Modal.Body>
          </Modal>

          <Button variant="primary" onClick={handleShow} className='botaocadeira' size="sm">
          <GrCart className='iconsnav' />
          </Button>

          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item >
              <Nav.Link href="/" className='linknav'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contato" className='linknav'>Contato</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/cadastro" className='linknav'>Cadastro</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/listaUsuarios" className='linknav'>Lista de Usuários</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/cadastroClientes" className='linknav'>Cadastre-se</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="navbar2">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Casas & Clubes" id="navbarScrollingDropdown" className='links'>
                <NavDropdown.Item href="#action3"> Espaço Unimed</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Villa Country
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Audio
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Farmasi Arena
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Quintal do Espeto
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Templo
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  CA Juventus
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Estâcia Alto da Serra
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  CA Aramaçan
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Audio
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Músicas" id="navbarScrollingDropdown" className='links'>
                <NavDropdown.Item href="#action3">Sertanejo & Country</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Forró
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Piseiro
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Funk
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Trap
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  MPB
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Pop
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Rap/Hip-Hop
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Artistas" id="navbarScrollingDropdown" className='links'>
                <NavDropdown.Item href="#action3">Zeca Pagodinho</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Jota Quest
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Péricles
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Raça Negra
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Ferrugem
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Belo
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Doce Encontro
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Henry e Klauss
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Eventos" id="navbarScrollingDropdown" className='links'>
                <NavDropdown.Item href="#action3">Restart Turnê</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Festa de São Vito
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Jota25
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  São Paulo Coffe Festival
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Boate Show 2024
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Camarote Essepê
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Anime Friends
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Arte e Teatro" id="navbarScrollingDropdown" className='links'>
                <NavDropdown.Item href="#action3">Stand Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Comédia
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Mágica
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Orquestra
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Especiais" id="navbarScrollingDropdown" className='links'>
                <NavDropdown.Item href="#action3">Festa Junina</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Carnaval
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Automobilistico
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Covers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Gastronomia
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Feiras
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Estados" id="navbarScrollingDropdown" className='links'>
                <NavDropdown.Item href="#action3">São Paulo</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Rio De Janeiro
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Bahia
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Minas Gerais
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Paraná
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Santa Catarina
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Goias
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Rio Grande do Sul
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Navegacao;
