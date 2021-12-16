const mix = require("laravel-mix");
// const del = require('del');
const path = require('path');

// mix.webpackConfig({
//     resolve: {
//         alias: {
//             react: "preact/compat",
//             "react-dom": "preact/compat",
//         },
//     },
// });

mix.setPublicPath("public");

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
});

//########################
/// Preact Screens DEV ###
//########################

//####### App
// mix.js("resources/js/app.js", "js/app.js");

// mix.combine([
//      "resources/js/CustomElements/Logout.js",
//      "public/js/app.js",
// ], "public/js/main.js");

// del('public/js/app.js');

//####### Contact
// mix.js("resources/js/components/contact.js", "js/contact.js")
//     .preact();
// mix.js("resources/js/components/abonnez.js", "js/abonnez.js")
//     .preact();

//####### Login / Register
// mix.js('resources/js/components/Auth.js', 'js/auth.js')
//      .preact();

//####### reset password
// mix.js('resources/js/components/ResetPassword.js', 'js/ResetPassword.js')
//      .preact();

//####### profile
// mix.js('resources/js/components/Profile.js', 'js/profile.js')
//      .preact();

// mix.js('resources/js/components/Address/Address.js', 'js/address.js')
//      .preact();

//####### accueils
// mix.js("resources/js/components/Accueils/Accueil.js", "js/accueil.js")
//      .preact();

//############################################
//############ Admin Dashboard
//############################################
mix.js('resources/js/admin.js', 'js/admin.js')
     .css('resources/css/admin.css', 'css/admin/admin.css')
     .react();
