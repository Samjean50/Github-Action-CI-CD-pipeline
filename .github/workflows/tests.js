name: test

on:
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    container: node:20
    
    strategy:
matrix:
    node-version: [12.x, 14.x, 16.x]
    # This matrix will run the job multiple times, once for each specified Node.js version (12.x, 14.x, 16.x).
    # The job will be executed separately for each version, ensuring compatibility across these versions. 
    
    steps:
    - uses: actions/checkout@v2


    - name: Cache Node Modules
  uses: actions/cache@v2
  with:
      path: ~/.npm
      key: ${{" runner.os "}}-node-${{" hashFiles('**/package-lock.json') "}}
      restore-keys: |
      ${{" runner.os "}}-node-
  # This snippet caches the installed node modules based on the hash of the 'package-lock.json' file.
  # It helps in speeding up the installation process by reusing the cached modules when the 'package-lock.json' file hasn't changed.

  


    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test
    
      - name: Run build
      run: npm run build 