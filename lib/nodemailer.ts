import nodemailer from 'nodemailer';

// export const nodeMailerOptionsYahoo = {
//   host: 'smtp.mail.yahoo.com',
//   port: 465,
//   auth: {
//     user: 'valery.mbele@yahoo.fr',
//     pass: 'zwxscuabzhyxtryr',
//   },
//   secure: true,
//   from: 'valery.mbele@yahoo.fr',
// };

export const nodeMailerOptionsYahoo = {
  host: process.env.EMAIL_SERVER_HOST_YAHOO,
  port: Number(process.env.EMAIL_SERVER_PORT_YAHOO),
  auth: {
    user: process.env.EMAIL_SERVER_USER_YAHOO,
    pass: process.env.EMAIL_SERVER_PASSWORD_YAHOO,
  },
  secure: true,
  from: process.env.EMAIL_FROM_YAHOO,
};

const nodemailerTransporterYAHOO = nodemailer.createTransport({
  host: nodeMailerOptionsYahoo.host,
  port: nodeMailerOptionsYahoo.port,
  auth: nodeMailerOptionsYahoo.auth,
  secure: nodeMailerOptionsYahoo.secure,
});

export default nodemailerTransporterYAHOO;
