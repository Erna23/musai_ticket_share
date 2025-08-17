const S3_BASE = 'https://musai-ticket-images.s3.ap-northeast-2.amazonaws.com/tickets/';

export default function handler(req, res) {
  const { key = '', img = '' } = req.query;

  // 이미지 URL 결정
  let imageUrl = '';
  if (img) {
    imageUrl = img;
  } else if (key) {
    imageUrl = S3_BASE + key;
  } else {
    imageUrl = 'https://via.placeholder.com/1200x630?text=musai+ticket';
  }

  const title = 'Musai Ticket';
  const desc  = '티켓 이미지를 공유했습니다.';

  const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://${req.headers.host}${req.url}" />
</head>
<body>
  <h1>${title}</h1>
  <img src="${imageUrl}" alt="ticket preview" style="max-width:100%;"/>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
