# Halli 홈페이지 배포 가이드

## 목차
1. [정적 사이트 빌드](#정적-사이트-빌드)
2. [Vercel 배포](#vercel-배포)
3. [Netlify 배포](#netlify-배포)
4. [가비아 DNS 설정](#가비아-dns-설정)
5. [베타 신청 폼 데이터 관리](#베타-신청-폼-데이터-관리)

---

## 정적 사이트 빌드

### 빌드 명령어

```bash
cd /home/ubuntu/halli-website
pnpm build
```

### 빌드 결과물

빌드 완료 후 다음 디렉토리에 정적 사이트 파일이 생성됩니다:

```
/home/ubuntu/halli-website/dist/public/
├── index.html           # 메인 HTML 파일
├── assets/
│   ├── index-*.css      # 스타일시트
│   └── index-*.js       # JavaScript 번들
└── __manus__/           # 분석 도구 (선택)
```

### 배포 가능한 파일

`dist/public/` 디렉토리의 모든 파일을 호스팅 서버에 업로드하면 됩니다.

---

## Vercel 배포

### 1단계: Vercel 계정 생성

1. [vercel.com](https://vercel.com)에 접속
2. GitHub, GitLab, Bitbucket 계정으로 로그인 (또는 이메일로 가입)

### 2단계: 프로젝트 배포

#### 방법 A: Git 연동 (권장)

1. GitHub에 `halli-website` 저장소 생성
2. 로컬 프로젝트를 GitHub에 푸시:

```bash
cd /home/ubuntu/halli-website
git init
git add .
git commit -m "Initial commit: Halli website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/halli-website.git
git push -u origin main
```

3. Vercel 대시보드에서 "New Project" 클릭
4. GitHub 저장소 선택
5. 다음 설정 적용:
   - **Framework Preset**: Other
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `pnpm install`

6. "Deploy" 클릭

#### 방법 B: 수동 배포

1. Vercel CLI 설치:

```bash
npm i -g vercel
```

2. 배포:

```bash
cd /home/ubuntu/halli-website
vercel
```

3. 프롬프트에 따라 설정 완료

### 3단계: 배포 확인

배포 완료 후 Vercel에서 제공하는 URL로 접속하여 사이트 확인:

```
https://halli-website.vercel.app
```

---

## Netlify 배포

### 1단계: Netlify 계정 생성

1. [netlify.com](https://netlify.com)에 접속
2. GitHub, GitLab, Bitbucket 계정으로 로그인

### 2단계: 프로젝트 배포

#### 방법 A: Git 연동 (권장)

1. GitHub에 저장소 생성 (위의 Vercel 섹션 참조)
2. Netlify 대시보드에서 "Add new site" → "Import an existing project"
3. GitHub 연결
4. 저장소 선택
5. 빌드 설정:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist/public`

6. "Deploy site" 클릭

#### 방법 B: 드래그 앤 드롭

1. `dist/public` 디렉토리 전체를 Netlify 대시보드로 드래그
2. 배포 자동 시작

### 3단계: 배포 확인

배포 완료 후 Netlify에서 제공하는 URL로 접속:

```
https://halli-website.netlify.app
```

---

## 가비아 DNS 설정

### 사전 준비

- 가비아에서 구매한 도메인: `ysitox.com`
- Vercel 또는 Netlify 배포 완료

### Vercel과 가비아 DNS 연결

#### 1단계: Vercel에서 도메인 추가

1. Vercel 프로젝트 설정 → "Domains"
2. "Add Domain" 클릭
3. `ysitox.com` 입력

#### 2단계: Vercel의 DNS 레코드 확인

Vercel 대시보드에서 다음 정보 확인:

```
Type: CNAME
Name: (root 또는 @)
Value: cname.vercel-dns.com.

또는

Type: A
Name: (root 또는 @)
Value: 76.76.19.163
```

#### 3단계: 가비아에서 DNS 설정

1. [가비아 MyPage](https://www.gabia.com/mypage)에 로그인
2. "서비스 관리" → "도메인"
3. `ysitox.com` 선택
4. "DNS 관리" 클릭
5. "DNS 레코드 추가" 클릭

**A 레코드 추가:**

```
호스트명(Subdomain): @ (또는 빈칸)
타입: A
값: 76.76.19.163
TTL: 3600 (기본값)
```

또는 **CNAME 레코드 추가:**

```
호스트명(Subdomain): www
타입: CNAME
값: cname.vercel-dns.com
TTL: 3600
```

#### 4단계: DNS 전파 대기

DNS 변경사항이 전파되는 데 15분~24시간 소요됩니다.

```bash
# DNS 전파 확인
nslookup ysitox.com
```

### Netlify와 가비아 DNS 연결

#### 1단계: Netlify에서 도메인 추가

1. Netlify 사이트 설정 → "Domain management"
2. "Add custom domain" 클릭
3. `ysitox.com` 입력

#### 2단계: Netlify의 DNS 레코드 확인

Netlify에서 제공하는 네임서버 정보 확인:

```
NS 레코드:
ns1.netlify.com
ns2.netlify.com
ns3.netlify.com
```

#### 3단계: 가비아에서 네임서버 변경

1. 가비아 MyPage → "도메인" → `ysitox.com`
2. "네임서버 변경" 클릭
3. 다음 네임서버 입력:
   - `ns1.netlify.com`
   - `ns2.netlify.com`
   - `ns3.netlify.com`

4. 저장

#### 4단계: DNS 전파 대기

15분~24시간 후 `ysitox.com`으로 접속 가능합니다.

---

## 베타 신청 폼 데이터 관리

### 폼 백엔드: Tally

Halli 홈페이지의 베타 신청 폼은 **Tally**를 통해 관리됩니다.

**Tally 선택 이유:**
- 한국 개인정보보호법(PIPA) 준수
- GDPR 준수
- 무료 플랜 지원
- 한국어 인터페이스 미지원이지만 데이터 수집 기능은 완벽

### 데이터 접근 방법

#### 1단계: Tally 계정 생성

1. [tally.so](https://tally.so)에 접속
2. 이메일로 가입 또는 Google 계정으로 로그인

#### 2단계: 폼 생성

1. "Create a new form" 클릭
2. 폼 이름: "Halli Beta Signup"
3. 다음 필드 추가:
   - **name** (텍스트): 이름
   - **email** (이메일): 이메일
   - **company** (텍스트): 회사/소속
   - **message** (긴 텍스트): 메시지

#### 3단계: 폼 ID 확인

폼 생성 후 URL에서 폼 ID 확인:

```
https://tally.so/r/nXEqKx
                    ^^^^^^ <- 폼 ID
```

#### 4단계: 홈페이지에 폼 ID 연결

`client/src/pages/Home.tsx`의 폼 제출 함수에서 다음 부분을 수정:

```typescript
const response = await fetch("https://tally.so/api/v1/forms/YOUR_FORM_ID/submissions", {
  // YOUR_FORM_ID를 실제 폼 ID로 변경
});
```

### 제출된 데이터 확인

#### Tally 대시보드에서 확인

1. [Tally 대시보드](https://tally.so/dashboard)에 로그인
2. "Halli Beta Signup" 폼 선택
3. "Responses" 탭에서 모든 제출 데이터 확인

#### 기능

- **실시간 알림**: 새 제출 시 이메일 알림
- **CSV 내보내기**: "Export" 버튼으로 CSV 파일 다운로드
- **필터링**: 제출 데이터 필터링 및 검색
- **자동 회신**: 제출자에게 자동 이메일 발송 설정 가능

### 개인정보 보호

**Tally 개인정보 보호 정책:**

- 데이터는 Tally 서버에 암호화되어 저장
- EU 데이터 센터 사용 (GDPR 준수)
- 한국 개인정보보호법 준수
- 자동 백업 제공

**추가 보안 조치:**

1. Tally 계정에 2단계 인증 활성화
2. 정기적으로 데이터 백업 (CSV 내보내기)
3. 불필요한 데이터는 정기적으로 삭제

---

## 환경 변수 설정 (선택)

배포 플랫폼에서 환경 변수를 설정하여 폼 ID를 관리할 수 있습니다.

### Vercel에서 환경 변수 설정

1. Vercel 프로젝트 → "Settings" → "Environment Variables"
2. 변수 추가:
   - **Name**: `VITE_TALLY_FORM_ID`
   - **Value**: `nXEqKx`

3. 홈페이지 코드에서 사용:

```typescript
const formId = import.meta.env.VITE_TALLY_FORM_ID;
const response = await fetch(`https://tally.so/api/v1/forms/${formId}/submissions`, {
  // ...
});
```

### Netlify에서 환경 변수 설정

1. Netlify 사이트 → "Site settings" → "Build & deploy" → "Environment"
2. "Edit variables" 클릭
3. 변수 추가:
   - **Key**: `VITE_TALLY_FORM_ID`
   - **Value**: `nXEqKx`

---

## 트러블슈팅

### 배포 후 페이지가 로드되지 않음

**해결 방법:**

1. 빌드 로그 확인
2. `dist/public/index.html` 파일 존재 확인
3. 배포 플랫폼의 "Publish directory" 설정 확인 (`dist/public`)

### DNS 변경 후에도 이전 사이트가 표시됨

**해결 방법:**

1. 브라우저 캐시 삭제 (Ctrl+Shift+Delete)
2. DNS 캐시 플러시:

```bash
# macOS
sudo dscacheutil -flushcache

# Windows (관리자 권한)
ipconfig /flushdns

# Linux
sudo systemctl restart systemd-resolved
```

3. DNS 전파 확인: [whatsmydns.net](https://whatsmydns.net)

### 베타 신청 폼 제출 실패

**해결 방법:**

1. 브라우저 콘솔에서 오류 메시지 확인 (F12)
2. Tally 폼 ID 정확성 확인
3. 네트워크 요청 확인 (Network 탭)
4. Tally 서버 상태 확인: [status.tally.so](https://status.tally.so)

---

## 추가 리소스

- [Vercel 공식 문서](https://vercel.com/docs)
- [Netlify 공식 문서](https://docs.netlify.com)
- [Tally 공식 문서](https://tally.so/help)
- [가비아 DNS 설정 가이드](https://www.gabia.com/guide/domain/dns)

---

**마지막 업데이트**: 2026년 5월 30일
**버전**: 1.0.0
