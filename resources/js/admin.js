import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

// import DefaultLayout from "./admin/layouts/DefaultLayout";
// import Layout from "./admin/layouts/Layout";
import TheLayout from "./admin/layouts/TheLayout";
// import Dashboard from "./admin/layouts/Dashboard";

window._ = require("lodash");

InertiaProgress.init({
  delay: 250,
  color: '#29d',
  includeCSS: true,
  showSpinner: false,
});

const layout = page => <TheLayout children={page} />

createInertiaApp({
  // resolve: name => import(`./Pages/${name}`).then((module) => {
  //   module.default.layout = module.default.layout || DefaultLayout
  //   return module.default
  // }),
  resolve: name => {
    const page = require(`./Pages/${name}`).default
    page.layout = page.layout || layout
    return page
  },
  // resolve: name => require(`./Pages/${name}`).default,
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
});