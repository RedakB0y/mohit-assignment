module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
    coverageReporters: ['lcov', 'text'],
  };



// module.exports = {
//   // ...other configuration options...
//   collectCoverageFrom: [
//     'src/**/*.js', // Include all JS files under the src directory
//     '!src/index.js', // Exclude the main entry file if needed
//     '!src/__tests__/**/*.js', // Exclude test files
//     '!src/utils/**/*.js', // Exclude utility files from test coverage
//     'src/container/*.js',
//   ],
// };