/**
 * Contém a lógica da api do cliente
 */

const {v4 : uuidv4} = require("uuid");
const Client = require("../models/clients.models");
const clientes = require("../database/db")
const {json} = require("express");

/**
 * inserir o cliente
 * post/clients
 * responsavel por criar clients
 */