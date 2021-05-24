'use strict';

const repositories = require('../../infrastructure/repository');

const controller = fn => async (req, reply) => {
    try {
        const args = [];
        if(req.params.id){
            const id = Number(req.params.id);
            args.push(id);
        }
        if(req.body){
            args.push(req.body);
        }
        console.log(req.method);
        const result = await fn(...args, repositories);
        reply.send(result);
    } catch (error) {
        console.log('Not found');
    }
};

module.exports = controller;