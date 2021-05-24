'use strict';

const repositories = require('../../infrastructure/repository');

class BaseController{
    constructor(){
        this.repositories = repositories;
        this.loadRepo();
    }

    loadRepo(){
        this.repositories.forEach(Repository => new Repository()); 
    }
}

module.exports = BaseController;