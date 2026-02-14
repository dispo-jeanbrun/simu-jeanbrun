/**
 * Build the HTML for the verification email sent to leads.
 */
export function buildVerificationEmail({
  firstName,
  economieFormatted,
  verificationUrl,
}: {
  firstName: string;
  economieFormatted: string;
  verificationUrl: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Votre simulation Jeanbrun</title>
</head>
<body style="margin:0;padding:0;background-color:#F8FAFC;font-family:Inter,Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E2E8F0;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1B3A5C;padding:24px 32px;text-align:center;">
              <span style="color:#FFFFFF;font-size:20px;font-weight:700;letter-spacing:-0.5px;">Simu-Jeanbrun</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 24px;">
              <p style="margin:0 0 16px;color:#1E293B;font-size:16px;line-height:1.6;">
                Bonjour ${firstName},
              </p>
              <p style="margin:0 0 24px;color:#1E293B;font-size:16px;line-height:1.6;">
                Votre simulation Jeanbrun est prête&nbsp;! Cliquez ci-dessous pour accéder à vos résultats détaillés.
              </p>

              <!-- Economy highlight -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#1B3A5C 0%,#2A5580 100%);border-radius:12px;padding:20px;text-align:center;">
                    <p style="margin:0 0 4px;color:rgba(255,255,255,0.7);font-size:13px;">
                      Économie d'impôt estimée
                    </p>
                    <p style="margin:0;color:#22C55E;font-size:32px;font-weight:800;letter-spacing:-1px;">
                      ${economieFormatted}
                    </p>
                    <p style="margin:4px 0 0;color:rgba(255,255,255,0.6);font-size:12px;">
                      sur 9 ans
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${verificationUrl}" target="_blank" style="display:inline-block;background-color:#22C55E;color:#FFFFFF;text-decoration:none;font-size:16px;font-weight:700;padding:16px 40px;border-radius:10px;letter-spacing:-0.3px;">
                      Voir ma simulation complète
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0;color:#64748B;font-size:13px;text-align:center;line-height:1.5;">
                Ce lien est valable 24 heures.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #E2E8F0;text-align:center;">
              <p style="margin:0 0 4px;color:#64748B;font-size:12px;">
                Simu-Jeanbrun.fr — Simulation gratuite du dispositif Jeanbrun 2026
              </p>
              <p style="margin:0;color:#94A3B8;font-size:11px;">
                Vous recevez cet email car vous avez réalisé une simulation sur notre site.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}
