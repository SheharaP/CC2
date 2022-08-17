module.exports = {
  
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    "no-mixed-spaces-and-tabs": 0,
    'vue/no-deprecated-slot-attribute': 'off',
    
  }
}
