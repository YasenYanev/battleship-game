module.exports = {
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.js$": "babel-jest", // Use babel-jest to transpile JavaScript files
  },
};
