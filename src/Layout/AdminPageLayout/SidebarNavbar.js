import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './SidebarNavbar.css';

class SidebarNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplaySidebar: true,
      title: 'Quản lý sản phẩm'
    }
  }

  onClick = () => {

    this.setState({
      isDisplaySidebar: !this.state.isDisplaySidebar
    })
  }

  setTitleNavbar =(title) => {
    this.setState({
      title:title
    })
  }

  render() {
    return (
      <div>
        <nav id="sidebar" className={this.state.isDisplaySidebar ? "sidebarActive" : "sidebarDeactive"} >
          <div className="sidebar-header">
            <h4>Xuân tình nguyện 2019</h4>
          </div>

          <ul className="list-unstyled components">
            <p> <h5>Chức năng chính</h5></p>

            <NavLink  to="/product" onClick = {()=>this.setTitleNavbar('Quản lý sản phẩm')}>
              <li>
                <a>Quản lý sản phẩm</a>
              </li>
            </NavLink>

            <NavLink to="/client"onClick = {()=>this.setTitleNavbar('Quản lý khách hàng')}>
              <li>
                <a>Quản lý khách hàng</a>
              </li>
            </NavLink>

            <NavLink to="/bill"onClick = {()=>this.setTitleNavbar('Quản lý chi tiết hóa đơn')}>
              <li>
                <a>Quản lý chi tiết hóa đơn</a>
              </li>
            </NavLink>

            <NavLink to="/team"onClick = {()=>this.setTitleNavbar('Quản lý đội hình')}>
              <li>
                <a>Quản lý đội hình</a>
              </li>
            </NavLink>

            <NavLink to="/post"onClick = {()=>this.setTitleNavbar('Quản lý bài viết')}>
              <li>
                <a>Quản lý bài viết</a>
              </li>
            </NavLink>

            <NavLink to="/feedback"onClick = {()=>this.setTitleNavbar('Hộp thư góp ý')}>
              <li>
                <a>Hộp thư góp ý</a>
              </li>
            </NavLink>
          </ul>
        </nav>

        <nav className="navbar navbar-default ">
          <div className="container-fluid">
            <div className="navbar-header">

              {/* <div class="row"> */}
              <button style={{float:'left'}} type="button" id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.onClick}>
                <i className="fas fa-bars"></i>
                <span></span>
              </button>
              <h3 style={{float:'left',marginLeft:10}}>{this.state.title}</h3>
              {/* </div> */}
              
            </div>
          </div>
        </nav>

      </div>

      // {/* <Route exact path="/home">
      //   <Home />
      // </Route>
      // <Route path="/about">
      //   <About />
      // </Route>
      // <Route path="/contact">
      //   <Contact />
      // </Route> */}


    )
  }
}

export default SidebarNavbar;