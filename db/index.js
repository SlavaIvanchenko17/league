const Sequelize = require('sequelize');

const MODELS = [
  'match',
  'team',
];

class Database {
  constructor(options) {
    this.sequelize = new Sequelize(options);
    this.models = {};
  }

  static async start(options) {
    const db = new Database(options);
    await db.sequelize.authenticate();
    await db.load(MODELS);
    return db;
  }

  async load(list) {
    const assocations = [];
    list.forEach((name) => {
      const { model, associate } = require(`./models/${name}.js`)(this.sequelize);
      this.models[name] = model;
      assocations.push(associate);
    });
    assocations.forEach((associate) => associate(this.models));
  }
}

module.exports = Database;
