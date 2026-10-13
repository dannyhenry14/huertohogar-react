module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'webpack'],

    files: [{ pattern: 'src/pruebas/**/*.spec.jsx', watched: false }],

    preprocessors: {
      'src/pruebas/**/*.spec.jsx': ['webpack'],
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { chrome: '100' } }],
                  ['@babel/preset-react', { runtime: 'automatic' }],
                ],
                plugins: [['babel-plugin-istanbul', { exclude: ['src/pruebas/**'] }]],
              },
            },
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly', subdir: 'lcov' },
      ],
    },

    browsers: ['ChromeHeadless'],

    singleRun: true,
  });
};