# Leads no Google Sheets

O site continua salvando cada lead no Vercel Blob e também envia uma cópia para uma planilha do Google Sheets quando a integração está configurada.

## 1. Preparar a planilha

1. Crie uma planilha no Google Sheets.
2. Na planilha, abra **Extensões → Apps Script**.
3. Substitua o conteúdo do editor pelo arquivo `google-apps-script/Code.gs` deste projeto.
4. Em `setupGoogleSheetsWebhook`, troque o texto de exemplo por um segredo longo e aleatório.
5. Execute `setupGoogleSheetsWebhook` uma vez e autorize o acesso à planilha.

O script cria automaticamente a aba `Leads` e os cabeçalhos.

## 2. Publicar o webhook

1. No Apps Script, selecione **Implantar → Nova implantação**.
2. Escolha **Aplicativo da Web**.
3. Em **Executar como**, escolha sua própria conta.
4. Em **Quem pode acessar**, escolha **Qualquer pessoa**.
5. Conclua a implantação e copie a URL terminada em `/exec`.

O endpoint é público, mas só aceita gravações que contenham o segredo configurado.

## 3. Configurar a Vercel

Crie estas variáveis no projeto Vercel para Production, Preview e Development:

- `GOOGLE_SHEETS_WEBHOOK_URL`: URL `/exec` copiada na implantação.
- `GOOGLE_SHEETS_WEBHOOK_SECRET`: o mesmo segredo usado em `setupGoogleSheetsWebhook`.

Depois, faça um novo deployment.

## 4. Testar

Envie um cadastro real pelo formulário. O registro deve continuar aparecendo na área privada do site e também na aba `Leads` da planilha.

Se o Google Sheets estiver indisponível, o cadastro permanece salvo no Vercel Blob. O erro da sincronização aparece nos logs da função, sem bloquear o redirecionamento do visitante para o Sympla.
