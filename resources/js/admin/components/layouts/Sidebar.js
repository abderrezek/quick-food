import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react';

const Sidebar = () => {
  const { appName, user } = usePage().props;

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link href={route('admin.index')} className="brand-link">
              {/*<img src="#" alt={`img ${appName}`} className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />*/}
              <span className="brand-text font-weight-light">{appName}</span>
            </Link>

            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                {/*<div className="image">
                  <img src="#" className="img-circle elevation-2" alt={`img ${user.name}`} />
                </div>*/}
                <div className="info">
                  <a href="#" className="d-block">{user.name}</a>
                </div>
              </div>

              {/* SidebarSearch Form */}
              {/*<div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                  <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-sidebar">
                      <i className="fas fa-search fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div>*/}

              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-th"></i>
                      <p>
                        Simple Link
                      </p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
    );
};

export default Sidebar;