# musai_ticket_share
Musai ticket URL share for KakaoTalk (subdomain) : Musai 티켓 이미지 URL 공유용 동적 페이지 서비스

카카오톡 등 메신저에서 티켓 URL을 공유할 때, 미리보기 이미지와 제목/설명을 표시하고  
“이미지 보기” 클릭 시 티켓 전용 미리보기 페이지를 노출합니다.

본 프로젝트는 Vercel에 배포되며, API Route를 활용해 동적 HTML을 생성합니다.  

예시 URL:  
[https://musai-ticket-share.vercel.app/s/sample.png](https://musai-ticket-share.vercel.app/s/sample.png)



## 📌 주요 기능

### 🔹 동적 Open Graph(OG) 메타태그 생성
- `/s/:key` → `/api/ticket?key=:key` 형태로 리라이트되어 S3 이미지 URL을 자동 생성
- `?img=` 파라미터로 외부 이미지 직접 지정 가능

### 🔹 티켓 이미지 미리보기
- OG 태그에 반영된 이미지가 KakaoTalk 미리보기에 표시됨
- 실제 페이지 방문 시 **제목 + 이미지**가 중앙 정렬된 HTML로 렌더링

### 🔹 캐시 무효화
- `Cache-Control: no-store` 설정으로 카카오 크롤러가 항상 최신 이미지 요청


<img width="407" height="562" alt="image" src="https://github.com/user-attachments/assets/36c8ac81-2dbc-45e4-8837-24c8183e183a" />




