const Joi = require('joi');

/*
sample agreement:
note- parameters are handled separately
{
  name: 'agreement title',
  archetype: '82335549119BF4C18B3C8D37EDB770A617ED6018',
  creator: '36ADA22D3A4B841EFB73414CD97C35C0A660C1C2',
  isPrivate: '1',
  parties: ['36ADA22D3A4B841EFB73414CD97C35C0A660C1C2'],
  hoardAddress: '',
  hoardSecret: '',
  eventLogHoardAddress: '',
  eventLogHoardSecret: '',
  maxNumberOfEvents: 10,
  collectionId: 'D37EDB770A6BF4C18B3C8D37EDB770A617ED601882335549119BF4C18B3C8D37',
  governingAgreements: [
    '686b6aefa7467db432903d4fed9cd23c2ee6bd57'
    '3a2629aa5ad584877212e16dc4b2b0e778acf4b9'
    'c969b9e29fb9f65299b474c18e4bbd5340124db2'
    'd2534600f8bdf6eadfe360bf2ff3f2c8e5514e71'
  ]
};
*/

const agreementSchema = Joi.object().keys({
  name: Joi.string()
    .required(),
  archetype: Joi.string()
    .hex()
    .required(),
  creator: Joi.string()
    .hex()
    .required(),
  isPrivate: [
    Joi.boolean(),
    Joi.number()
      .integer()
      .min(0)
      .max(1),
  ],
  maxNumberOfEvents: Joi.number()
    .min(0)
    .default(0),
  hoardAddress: Joi.string()
    .hex()
    .allow('')
    .default(''),
  hoardSecret: Joi.string()
    .hex()
    .allow('')
    .default(''),
  eventLogHoardAddress: Joi.string()
    .hex()
    .allow('')
    .default(''),
  eventLogHoardSecret: Joi.string()
    .hex()
    .allow('')
    .default(''),
  parties: Joi.array()
    .items(Joi.string().hex())
    .required(),
  collectionId: Joi.string()
    .allow('').default(''),
  governingAgreements: Joi.array().items(Joi.string().hex()).optional(),
});

module.exports = agreementSchema;
