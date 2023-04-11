const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "saborlicorde@gmail.com", // generated ethereal user
    // pass: "uyhnjazojskuvuuy", // generated ethereal password
    pass: "jpwlbozfqeobxuua", // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("listo para enviar emails");
});

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/send-validate-email", async (req, res) => {
  const { email, id } = req.body;
  try {
    await transporter.sendMail({
      from: "Licor de sabor Pura Caña <saborlicorde@gmail.com>",
      to: email,
      subject: "Comfirma tu cuenta",
      html: getCadenaValidateEmail(id),
    });
  } catch (error) {
    return res.status(400).json({ message: "Error al enviar email validator" });
  }
  res.status(200).json({});
});

router.post("/send-forgot-password", async (req, res) => {
  const { email, id } = req.body;
  try {
    await transporter.sendMail({
      from: "Licor de sabor Pura Caña <saborlicorde@gmail.com>",
      to: email,
      subject: "Recuperación de contraseña",
      html: getCadenaForgotMail(id),
    });
  } catch (error) {
    return res.status(400).json({ message: "Error al enviar email", err : error });
  }
  res.status(200).json({});
});

function getCadenaForgotMail(id) {
  return `
<html>

<head>
    <style>
        table,
        td,
        div,
        h1,
        p {
            font-family: Arial, sans-serif;
        }

        .button-28 {
            appearance: none;
            background-color: transparent;
            border: 3px solid #1A1A1A;
            border-radius: 30px;
            box-sizing: border-box;
            color: #3B3B3B;
            cursor: pointer;
            display: inline-block;
            font-size: 16px;
            font-weight: 600;
            line-height: normal;
            margin: 0;
            min-height: 60px;
            min-width: 0;
            outline: none;
            padding: 16px 24px;
            text-align: center;
            text-decoration: none;
            transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: 200px;
            will-change: transform;
        }

        .button-28:disabled {
            pointer-events: none;
        }

        .button-28:hover {
            color: #fff;
            background-color: #1A1A1A;
            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
            transform: translateY(-2px);
        }

        .button-28:active {
            box-shadow: none;
            transform: translateY(0);
        }
    </style>
</head>

<body style="margin: 0; padding: 0">
    <table role="presentation" style="
        width: 100%;
        border-collapse: collapse;
        border: 0;
        border-spacing: 0;
        background: #ffffff;
      ">
        <tr>
            <td align="center" style="padding: 0">
                <table role="presentation" style="
              width: 602px;
              border-collapse: collapse;
              border: 1px solid #cccccc;
              border-spacing: 0;
              text-align: left;
            ">
                    <tr>
                        <td style="padding: 60px 0 10px 0; text-align: center;">
                            <h1 style="font-size: 40px;"><b>Licor de sabor "Pura Caña"</b></h1>
                            <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-olvide-contrasena_114360-1123.jpg?w=740&t=st=1681069471~exp=1681070071~hmac=e4f844905f0a02b778d7f71ff4cd04448ded80ad50d6e9c4eb5846f1f9a15442"
                                alt="" width="60%">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 30px 20px 30px">
                            <table role="presentation" style="
                    width: 100%;
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                  ">
                                <tr>
                                    <td style="padding: 0 0 36px 0; color: #153643">
                                        <h1 style="
                          font-size: 24px;
                          margin: 0 0 20px 0;
                          font-family: Arial, sans-serif;
                          text-align: center;
                        ">
                                            <b>¿Olvidaste tu contraseña?</b>
                                        </h1>
                                        <p style="
                          margin: 0 0 12px 0;
                          font-size: 16px;
                          line-height: 24px;
                          text-align: center;
                          font-family: Arial, sans-serif;
                        ">
                                            Hemos recibido una petición para la restauración de
                                            contraseña de tu cuenta en
                                            <b>Licor de sabor "Pura Caña"</b>, para continuar solo
                                            tienes que hacer click en el siguiente botón.
                                        </p>
                                        <p style="
                          margin: 0;
                          font-size: 16px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                          text-align: center;
                        ">
                                            <a class="button-28" style="margin-top: 15px;"
                                                href="http://sastrerialospajaritos.proyectowebuni.com/#/reset-password?id=${id}">
                                                Click aquí</a>
                                        </p>
                                        <p style="
                          margin: 30px 0 0 0;
                          font-size: 16px;
                          font-family: Arial, sans-serif;
                          text-align: center;
                        ">
                                            Si usted no solicitó un restablecimiento de contraseña,
                                            no se requiere ninguna otra acción.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0">
                                        <table role="presentation" style="
                          width: 100%;
                          border-collapse: collapse;
                          border: 0;
                          border-spacing: 0;
                        "></table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px; background: #eeeff0">
                            <table style="
                                    border-collapse: collapse;
                                    border: 0;
                                    border-spacing: 0;
                                    font-size: 9px;
                                    font-family: Arial, sans-serif;
                                ">
                                <tr>
                                    <td style="width: 100%;">
                                        <p style="
                                            font-size: 14px;
                                            line-height: 16px;
                                            font-family: Arial, sans-serif;
                                            color: #0000009e;
                                            ">
                                            &reg; Copyright, Licor de sabor "Pura Caña" 2023<br />
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
`;
}

function getCadenaValidateEmail(id) {
  return `
  <html>

  <head>
      <style>
          table,
          td,
          div,
          h1,
          p {
              font-family: Arial, sans-serif;
          }
  
          .button-28 {
              appearance: none;
              background-color: transparent;
              border: 3px solid #1A1A1A;
              border-radius: 30px;
              box-sizing: border-box;
              color: #3B3B3B;
              cursor: pointer;
              display: inline-block;
              font-size: 16px;
              font-weight: 600;
              line-height: normal;
              margin: 0;
              min-height: 60px;
              min-width: 0;
              outline: none;
              padding: 16px 24px;
              text-align: center;
              text-decoration: none;
              transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
              user-select: none;
              -webkit-user-select: none;
              touch-action: manipulation;
              width: 200px;
              will-change: transform;
          }
  
          .button-28:disabled {
              pointer-events: none;
          }
  
          .button-28:hover {
              color: #fff;
              background-color: #1A1A1A;
              box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
              transform: translateY(-2px);
          }
  
          .button-28:active {
              box-shadow: none;
              transform: translateY(0);
          }
      </style>
  </head>
  
  <body style="margin: 0; padding: 0">
      <table role="presentation" style="
          width: 100%;
          border-collapse: collapse;
          border: 0;
          border-spacing: 0;
          background: #ffffff;
        ">
          <tr>
              <td align="center" style="padding: 0">
                  <table role="presentation" style="
                width: 602px;
                border-collapse: collapse;
                border: 1px solid #cccccc;
                border-spacing: 0;
                text-align: left;
              ">
                      <tr>
                          <td style="padding: 60px 0 10px 0; text-align: center;">
                              <h1 style="font-size: 40px;"><b>Licor de sabor "Pura Caña"</b></h1>
                              <img style="padding-top: 15px;"
                                  src="https://img.freepik.com/vector-gratis/iniciar-sesion-ilustracion-concepto_114360-125.jpg?w=740&t=st=1681074335~exp=1681074935~hmac=679b34216273d0b59fd99b79f050cc5a3a778dff9f750ca2a1d73e422c5bbb79"
                                  alt="" width="60%">
                          </td>
                      </tr>
                      <tr>
                          <td style="padding: 10px 30px 20px 30px">
                              <table role="presentation" style="
                      width: 100%;
                      border-collapse: collapse;
                      border: 0;
                      border-spacing: 0;
                    ">
                                  <tr>
                                      <td style="padding: 0 0 36px 0; color: #153643">
                                          <h1 style="
                            font-size: 24px;
                            text-align: center;
                            margin: 0 0 20px 0;
                            font-family: Arial, sans-serif;
                          ">
                                              <b>Correo de confirmación</b>
                                          </h1>
                                          <p style="
                            margin: 0 0 12px 0;
                            font-size: 16px;
                            line-height: 24px;
                            font-family: Arial, sans-serif;
                            text-align: center;
                          ">
                                              Por favor pulsa en el siguiente botón para confirmar tu correo electrónico.
                                          </p>
                                          <p style="
                            margin: 0;
                            font-size: 16px;
                            line-height: 24px;
                            font-family: Arial, sans-serif;
                            text-align: center;
                          ">
                                              <a class="button-28" style="margin-top: 15px;"
                                                  href="http://sastrerialospajaritos.proyectowebuni.com/#/reset-password?id=${id}">
                                              Click aquí</a>
                                          </p>
                                          <p style="
                            margin: 30px 0 0 0;
                            font-size: 16px;
                            font-family: Arial, sans-serif;
                            text-align: center;
                          ">
                                              Si no has creado ninguna cuenta en esta página, puedes ignorar este mensaje.
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding: 0">
                                          <table role="presentation" style="
                            width: 100%;
                            border-collapse: collapse;
                            border: 0;
                            border-spacing: 0;
                          "></table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding: 30px; background: #eeeff0">
                              <table style="
                                      border-collapse: collapse;
                                      border: 0;
                                      border-spacing: 0;
                                      font-size: 9px;
                                      font-family: Arial, sans-serif;
                                  ">
                                  <tr>
                                      <td style="width: 100%;">
                                          <p style="
                                              font-size: 14px;
                                              line-height: 16px;
                                              font-family: Arial, sans-serif;
                                              color: #0000009e;
                                              ">
                                              &reg; Copyright, Licor de sabor "Pura Caña" 2023<br />
                                          </p>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </body>
  
  </html>
  `;
}
module.exports = router;
