import React from "react";
import "./App.css";
import {
  Layout,
  Header,
  Textfield,
  Navigation,
  Content,
  footer
} from "react-mdl";
import Main from "./components/main";

var icon = (
  <span class="logo">
    <a href="/">
      <img
        src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-0/p280x280/80552708_446001666090932_4504844253058301952_n.png?_nc_cat=110&_nc_ohc=FhIt7GfhNz4AQnlcMk_F7CQPG1BaYX-phLzSnUdJ7KwAsjcgWQOKS0kLQ&_nc_ht=scontent.ftun10-1.fna&oh=146599e690ad8e907d0994548dc2d07d&oe=5E7C9960"
        height="33"
        width="120"
        alt="navbar-logo"
      />
    </a>
  </span>
);

function App() {
  return (
    <div style={{ height: "1000px", position: "relative" }}>
      <Layout>
        <Header className="header-color" title="e-Learning">
          <Navigation brand={icon} toggleNavKey={0}>
            <a href="/home">Leading dashboard</a>
            <a href="/connect">Connect</a>
            <a href="/contact">Contact us</a>
            <a href="/aboutme">About</a>

            <Textfield
              value="Search"
              onChange={() => {}}
              label="Search"
              expandable
              expandableIcon="search"
            />
          </Navigation>
        </Header>
      </Layout>
      <Content>
        <Main />
      </Content>
      <div>
        <footer className="page-footer">
          <div class="footer-copyright text-center py-3">
            © 2019 Copyright All Rights Resereved
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

/* first attempt
<div >
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Menu" scroll>
            <Navigation>      
                <Link to="/home">H</Link >        
                <Link to="/aboutme">About me</Link >
                <Link to="/contact">Contact</Link >
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>  
                <br/>
                <br/>
                <Link to="/professor">Professor</Link >
                <br/>
                <br/>
                <br/>
                <Link to="/student">Student</Link >
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    </div>*/
