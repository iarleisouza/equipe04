const emailTemplateMentor = (user) => `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Mentores</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
        </head>
        <body style="background-color: #F0F0F0;">
          <center>
            <table style="width: 600px; background-color: #F6F5FA; color:#000; vertical-align: middle;" cellpadding="0" cellspacing="0">
              <thead>
                <tr>
                  <th colspan="2">
                    <img src="https://servidor-estatico-eight-murex.vercel.app/banner2.png" alt="banner código certo coders" style="width: 100%;">
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <h1 style="font-family: Rubik, sans-serif; font-size: 24px; font-weight: 400;">
                      Bem-vindo à <strong style="font-weight: 500; color: #D53535;">Código Certo Coders!</strong>
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 20px 30px; font-family: Roboto, sans-serif; font-size: 20px; font-weight: 400;">
                    Olá, <strong style="color: #D53535; text-transform: capitalize;">${user.nome}!</strong> <span style="font-size: 24px;">👋</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <h3 style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
                      Seja bem-vindo(a) à nossa comunidade!!
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em;">
                      Somos apaixonados por tecnologia e comprometidos em usar nossas habilidades
                      para fazer a diferença, trabalhando juntos em projetos que beneficiam 
                      organizações sem fins lucrativos e iniciativas sociais. Aqui, valorizamos
                      a colaboração, o aprendizado e a troca de conhecimentos, e estamos bem animados
                      para ver as contribuições valiosas que você trará.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em;">
                      Seu cadastro foi recebido com sucesso e agora estamos ansiosos para conhecer
                      mais sobre você. Como próximo passo, faremos uma análise nos seus dados cadastrais
                      e, em seguida, nosso gestor da comunidade entrará em contato para agendar um bate-papo.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em;">
                      Agradecemos imensamente por seu interesse em contribuir com seu tempo e 
                      conhecimento. Em breve, você receberá um e-mail do nosso gestor para agendar
                      a conversa. Caso tenha qualquer dúvida ou precise de mais informações,
                      por favor, não hesite em nos contatar. Estamos ansiosos para começar essa jornada juntos!
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 10px 30px 30px 30px;">
                    <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px; font-family: Roboto, sans-serif; font-size: 18px; text-align: start; font-weight: 400;">
                    Conecte-se com a gente e fique sabendo de todas as nossas novidades.
                  </td>
                </tr>

                <tr>
                  <td colspan="2" style="padding: 20px 30px 30px 30px;">
                    <div style="width: 100%; text-align: center;">
                      <a target="_blank" href="https://www.linkedin.com/company/codigocertocoders/" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/linkedin.png" alt="">
                      </a>
                      <a target="_blank" href="https://discord.com/invite/y3GHwPvsMK" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/discord.png" alt="">
                      </a>
                      <a target="_blank" href="https://chat.whatsapp.com/CDJL6tRT5apLRXW5PWqYLe" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/whatsapp.png" alt="">
                      </a>
                      <a target="_blank" href="https://github.com/codigocerto" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/github.png" alt="">
                      </a>
                    </div>
                  </td>
                </tr>
              
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 30px 30px 24px 30px; font-family: Roboto, sans-serif; font-size: 18px; color: #979797;">
                    Este e-mail é oficial da Código Certo Coders.
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px 20px 30px; font-family: Roboto, sans-serif; font-size: 18px; color: #979797; line-height: 1.4em;">
                    Você recebeu esse e-mail porque optou por receber o formulário de 
                    comunicação da CODIGO CERTO CODERS. Se você não quiser mais receber nossos
                    e-mails, é só <a href="https://equipe04-production.up.railway.app/update-newsletter?email=${user.email}" style="color: #FB2CBF; text-decoration: none;">clicar aqui.</a>
                  </td>
                </tr>
              </tbody>

            </table>
          </center>
        </body>
        </html>
      `;

module.exports = emailTemplateMentor;
