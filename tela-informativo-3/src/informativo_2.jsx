import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import img_banner from './assets/Tel_03.png';
import pasta from './assets/pasta_de_dente_infantil_colgate_smiles_minions_com_100g_-_7509546069593-removebg-preview 1.png';
import img5 from './assets/Botao_da_tela_inicial5.png';
import img2 from './assets/Botao_da_tela_inicial2.png';
import img3 from './assets/Botao_da_tela_inicial3.png';
import user from './assets/user.png';
import prod2 from './assets/produto_2.png';
import prod3 from './assets/produto_3.png';
import prod4 from './assets/produto_4.png';




function App() {
  return (
    <Container fluid className="app-container">
      {/* Layout principal: Menu lateral + Conteúdo principal */}
      <Row className="main-content">
        {/* Menu lateral */}
        <Col xs={3} md={2} className="sidebar d-flex flex-column">
          <div className="user mt-4">
            <div className="avatar mb-2"></div>
            <img src={user} alt="" />
            <p>Olá Usuário!</p>
          </div>
          <div className="menu-items mt-5">
            <div className="menu-item text-center">
              <img src={img2} alt="" />
            </div>
            <div className="menu-item text-center">
              <img src={img3} alt="" />
            </div>
            <div className="menu-item text-center">
              <img src={img5} alt="" />
            </div>
          </div>
        </Col>

        {/* Conteúdo principal */}
        <Col xs={9} md={15} className="content" style={{paddingLeft: '400px', paddingBottom: '100px', paddingRight: '240px'}}>
          {/* Banner principal */}
          <div className="banner d-flex justify-content-center align-items-center">
            <img
              src={img_banner} // Substitua pelo caminho correto da sua imagem
              alt="Banner"
              className="banner-img2"
            />
          </div>
        </Col>
      </Row>

      {/* Rodapé */}
      <Row className="footer">
        <Col className="footer-item">
          <span role="img" aria-label="localização">📍</span>
          <span>Taguatinga Sul - Taguatinga, Brasília</span>
        </Col>
        <Col className="footer-item text-center">
          <span role="img" aria-label="email">✉️</span>
          <a href="mailto:contato@ortomagic.com">contato@ortomagic.com</a>
        </Col>
        <Col className="footer-item text-end">
          <span role="img" aria-label="telefone">📞</span>
          <span>+55 (61) 0000-0000</span>
        </Col>
      </Row>
      <Row className="subfooter">
        <Col className="subfooter-item">
          <span style={{fontWeight: 'bold'}}>© 2024 - OrtoMagic</span>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
