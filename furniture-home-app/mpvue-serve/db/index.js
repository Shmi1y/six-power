const mongoose = require('mongoose');
const { DB_CONFIG } = require('../config');

mongoose.connect(`mongodb://${DB_CONFIG.host}:${DB_CONFIG.port}/vue-six-power`, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.once('open', (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('数据库连接失败~', err);
  } else {
    // eslint-disable-next-line no-console
    console.log('数据库连接成功~');
  }
});