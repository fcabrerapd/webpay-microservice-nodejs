import pkg from "transbank-sdk";

const { WebpayPlus, Options, IntegrationCommerceCodes, IntegrationApiKeys, Environment } = pkg;

const environment = Environment.Integration;
const commerceCode = process.env.TBK_CC || IntegrationCommerceCodes.WEBPAY_PLUS;

const apiKey = process.env.TBK_API_KEY || IntegrationApiKeys.WEBPAY;

const txOptions = new Options(commerceCode, apiKey, environment);

const wp = new WebpayPlus.Transaction(txOptions);

export default wp;