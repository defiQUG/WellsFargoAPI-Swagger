const Joi = require('joi');

const wirePaymentSchema = Joi.object({
  destinationAccount: Joi.string().required(),
  amount: Joi.number().positive().required(),
  currency: Joi.string().length(3).required()
});

module.exports = {
  wirePaymentSchema
};