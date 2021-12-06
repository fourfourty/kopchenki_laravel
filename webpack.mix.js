const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

    mix.ts('resources/js/app.js', 'public/js').react();
    // mix.styles(['resources/css/about.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/App.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/contacts.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/footer.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/header.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/index.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/modal.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/products.scss',], 'public/css/style.css');
    // mix.styles(['resources/css/styles.scss',], 'public/css/style.css');
    // mix.sass([
    //     'resources/css/about.scss',
    //     'resources/css/App.scss',
    //     'resources/css/contacts.scss',
    //     'resources/css/footer.scss',
    //     'resources/css/header.scss',
    //     'resources/css/index.scss',
    //     'resources/css/modal.scss',
    //     'resources/css/products.scss',
    //     'resources/css/styles.scss'
    // ], 'public/css/app.css');
    mix.sass('resources/css/about.scss', 'public/css')
    .sass('resources/css/App.scss', 'public/css')
    .sass('resources/css/contacts.scss', 'public/css')
    .sass('resources/css/footer.scss', 'public/css')
    .sass('resources/css/header.scss', 'public/css')
    .sass('resources/css/index.scss', 'public/css')
    .sass('resources/css/modal.scss', 'public/css')
    .sass('resources/css/products.scss', 'public/css')
    .sass('resources/css/styles.scss', 'public/css');

    mix.copy('resources/assets/img', 'public/assets/img');
    mix.copy('resources/assets/fonts', 'public/assets/fonts');
    