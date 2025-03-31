module.exports = function (config) {
  config.set({
      frameworks: ['jasmine'],
      files: [
          { pattern: 'src/**/*.js', included: false }, // Source files
          { pattern: 'spec/**/*.spec.js' }             // Test files
      ],
      preprocessors: {
          'src/**/*.js': ['webpack'],                 // Preprocess source files
          'spec/**/*.spec.js': ['webpack']            // Preprocess test files
      },
      webpack: {
          mode: 'development',
          module: {
              rules: [
                  {
                      test: /\.js$/,
                      exclude: /node_modules/,
                      use: {
                          loader: 'babel-loader',
                          options: {
                              presets: ['@babel/preset-env']
                          }
                      }
                  }
              ]
          }
      },
      reporters: ['progress'],
      browsers: ['Chrome'],
      singleRun: true
  });
};
