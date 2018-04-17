'use strict';

const routes = require('./app');
const port = 3000;

routes.listen(port, () => {
  console.log('Server running on port %d', port);
});