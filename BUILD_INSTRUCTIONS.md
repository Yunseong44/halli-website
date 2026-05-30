# Halli 홈페이지 빌드 가이드

## 프로젝트 구조

```
halli-website/
├── client/                          # 프론트엔드 소스 코드
│   ├── public/                      # 정적 파일 (favicon, robots.txt 등)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # 메인 홈페이지 (새벽 톤 디자인)
│   │   │   └── NotFound.tsx        # 404 페이지
│   │   ├── components/
│   │   │   ├── ui/                 # shadcn/ui 컴포넌트
│   │   │   ├── ErrorBoundary.tsx   # 에러 처리
│   │   │   └── ...
│   │   ├── contexts/               # React Context
│   │   ├── hooks/                  # 커스텀 훅
│   │   ├── lib/                    # 유틸리티 함수
│   │   ├── App.tsx                 # 라우팅 및 레이아웃
│   │   ├── main.tsx                # React 진입점
│   │   └── index.css               # 새벽 톤 색상 및 글로벌 스타일
│   └── index.html                  # HTML 템플릿 (Pretendard 폰트 포함)
├── dist/                            # 빌드 결과물
│   └── public/                      # 정적 사이트 (배포 가능)
│       ├── index.html
│       ├── assets/
│       │   ├── index-*.css
│       │   └── index-*.js
│       └── __manus__/
├── server/                          # 서버 코드 (정적 사이트에서는 미사용)
├── shared/                          # 공유 타입 (호환성)
├── package.json                     # 프로젝트 메타데이터 및 의존성
├── pnpm-lock.yaml                   # 의존성 잠금 파일
├── vite.config.ts                   # Vite 빌드 설정
├── tsconfig.json                    # TypeScript 설정
├── tailwind.config.ts               # Tailwind CSS 설정
├── postcss.config.js                # PostCSS 설정
├── README.md                        # 프로젝트 개요
├── DEPLOYMENT_GUIDE.md              # 배포 가이드
└── BUILD_INSTRUCTIONS.md            # 이 파일

```

## 필수 요구사항

- **Node.js**: 18.x 이상
- **pnpm**: 10.x 이상 (패키지 관리자)
- **Git**: 버전 관리 (선택)

## 설치 및 빌드

### 1단계: 의존성 설치

```bash
cd /home/ubuntu/halli-website
pnpm install
```

### 2단계: 개발 서버 실행 (선택)

```bash
pnpm dev
```

브라우저에서 `http://localhost:3000` 접속

### 3단계: 프로덕션 빌드

```bash
pnpm build
```

빌드 완료 후 다음 디렉토리에 정적 사이트 생성:

```
dist/public/
├── index.html           # 메인 HTML (367KB)
├── assets/
│   ├── index-*.css      # 스타일시트 (116KB)
│   └── index-*.js       # JavaScript 번들 (558KB)
└── __manus__/           # 분석 도구
```

### 4단계: 로컬 프리뷰

```bash
pnpm preview
```

## 빌드 결과물 설명

### index.html

- 모든 페이지가 하나의 HTML 파일로 번들됨
- React 라우팅은 클라이언트 사이드에서 처리
- Pretendard 폰트 CDN 링크 포함
- 다크 모드 자동 적용 (`class="dark"`)

### assets/index-*.css

- Tailwind CSS + 새벽 톤 색상 변수 포함
- 전역 스타일 및 컴포넌트 스타일
- 자동 최소화 및 최적화

### assets/index-*.js

- React 19 + Wouter (라우팅) 번들
- 모든 컴포넌트 포함
- 자동 코드 분할 및 트리 셰이킹

## 배포 준비

### 정적 호스팅 플랫폼

`dist/public/` 디렉토리의 모든 파일을 다음 플랫폼에 업로드:

| 플랫폼 | 설정 | 링크 |
|--------|------|------|
| **Vercel** | Build: `pnpm build`, Output: `dist/public` | [vercel.com](https://vercel.com) |
| **Netlify** | Build: `pnpm build`, Publish: `dist/public` | [netlify.com](https://netlify.com) |
| **GitHub Pages** | 수동 업로드 또는 Actions 자동화 | [pages.github.com](https://pages.github.com) |
| **AWS S3 + CloudFront** | S3에 업로드, CloudFront 캐싱 | [aws.amazon.com](https://aws.amazon.com) |

### 배포 체크리스트

- [ ] `pnpm build` 성공 (에러 없음)
- [ ] `dist/public/index.html` 존재 확인
- [ ] 모든 에셋 파일 생성 확인
- [ ] 로컬 프리뷰에서 정상 작동 확인
- [ ] 배포 플랫폼 설정 완료
- [ ] 도메인 DNS 설정 완료 (가비아)
- [ ] 배포된 사이트에서 모든 기능 테스트

## 주요 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 19.2.1 | UI 프레임워크 |
| **TypeScript** | 5.6.3 | 타입 안정성 |
| **Vite** | 7.1.7 | 빌드 도구 |
| **Tailwind CSS** | 4.1.14 | 유틸리티 CSS |
| **shadcn/ui** | 최신 | UI 컴포넌트 라이브러리 |
| **Wouter** | 3.3.5 | 클라이언트 라우팅 |
| **Lucide React** | 0.453.0 | 아이콘 라이브러리 |
| **Sonner** | 2.0.7 | 토스트 알림 |
| **Framer Motion** | 12.23.22 | 애니메이션 |

## 디자인 시스템

### 색상 팔레트 (새벽 톤)

```css
/* 배경 */
--background: #0a0e27;      /* 거의 검정 */
--foreground: #e5e7eb;      /* 밝은 회색 텍스트 */

/* 카드 및 컨테이너 */
--card: #0f1229;            /* 약간 밝은 어둠 */
--card-foreground: #e5e7eb;

/* 강조색 */
--primary: #60a5fa;         /* 부드러운 파란색 (새벽의 미세한 빛) */
--primary-foreground: #0a0e27;

/* 보조 색상 */
--secondary: #1f2937;       /* 중간 어둠 */
--muted: #1f2937;
--muted-foreground: #9ca3af; /* 중간 회색 */

/* 경계선 */
--border: rgba(255, 255, 255, 0.1); /* 미세한 경계선 */
```

### 타이포그래피

- **폰트**: Pretendard (한국어 최적화)
- **제목**: 600-700 weight, 높은 명도
- **본문**: 400 weight, 1.6 라인 높이
- **라인 높이**: 1.6 (한국어 가독성)

### 컴포넌트

- **버튼**: 100-160ms 전환, 호버/액티브 상태
- **카드**: 미세한 경계선, 호버 시 강조색 변화
- **입력**: 반투명 배경, 포커스 시 강조색 테두리
- **토스트**: Sonner로 자동 관리

## 환경 변수

### 개발 환경 (.env.local)

```env
# Tally 폼 ID (선택)
VITE_TALLY_FORM_ID=nXEqKx

# 분석 (Manus 자동 제공)
VITE_ANALYTICS_ENDPOINT=...
VITE_ANALYTICS_WEBSITE_ID=...
```

### 빌드 시 환경 변수

`import.meta.env.VITE_*` 형태로 접근 가능:

```typescript
const formId = import.meta.env.VITE_TALLY_FORM_ID;
```

## 성능 최적화

### 현재 상태

- **번들 크기**: ~558KB (gzip: 164KB)
- **CSS 크기**: ~116KB (gzip: 18KB)
- **로드 시간**: < 2초 (3G)

### 최적화 팁

1. **이미지 최적화**: WebP 형식 사용
2. **코드 분할**: 동적 import 활용
3. **캐싱**: 배포 플랫폼의 캐싱 설정
4. **CDN**: 글로벌 CDN 사용 (Vercel, Netlify 기본 제공)

## 문제 해결

### 빌드 실패

```bash
# 캐시 삭제 후 재빌드
rm -rf node_modules dist
pnpm install
pnpm build
```

### 개발 서버 오류

```bash
# 포트 충돌 확인
lsof -i :3000

# 다른 포트에서 실행
pnpm dev -- --port 3001
```

### 스타일 미적용

```bash
# Tailwind CSS 재생성
pnpm build --force
```

## 추가 리소스

- [Vite 공식 문서](https://vitejs.dev)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [shadcn/ui 공식 문서](https://ui.shadcn.com)

---

**마지막 업데이트**: 2026년 5월 30일
**버전**: 1.0.0
