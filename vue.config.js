module.exports = {
    // https://cli.vuejs.org/zh/config/#lintonsave
    lintOnSave: 'error', // [true, false, 'error', 'warning', 'default']
    publicPath: './', // 线上构建出来是相对路径在demo页才好展示
    configureWebpack: config => {
        // 线上允许debugger
        if (config.mode === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = false;
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '2023-2024年会';
            return args;
        });
    },
    devServer: {
        port: 8080,
        host: '',
        disableHostCheck: true
    }
};
