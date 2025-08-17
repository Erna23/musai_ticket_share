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
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;   /* 가로 중앙 */
      justify-content: flex-start; /* 위에서부터 배치 */
      font-family: Arial, sans-serif;
      text-align: center;
    }
    h1 {
      font-size: 3rem;      /* 글자 크기 */
      margin: 16px 0 16px;  /* 위/아래 여백 */
    }
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <img src="${imageUrl}" alt="ticket preview"/>
</body>
</html>`;

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
