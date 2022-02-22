//clientID: 6213fdb89afd86001205ab02
//sandboxID: 98f270885e7b410c7dc2279567ad0b


//I'm on step 2 of the backend


const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const mongoose = require("mongoose");

// Load Account and User models
const Account = require("../../models/Account");
const User = require("../../models/User");
const PLAID_CLIENT_ID = "6213fdb89afd86001205ab02"; //implement - placed
const PLAID_SECRET = "98f270885e7b410c7dc2279567ad0b"; // implement - placed
const PLAID_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; //implement
const client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments.sandbox,
  { version: "2018-05-22" }
);
var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;
// Routes will go here
module.exports = router;