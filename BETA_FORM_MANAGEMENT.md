# Halli 베타 신청 폼 데이터 관리 가이드

## 개요

Halli 홈페이지의 베타 신청 폼은 **Tally**를 통해 관리됩니다. Tally는 한국 개인정보보호법(PIPA)과 GDPR을 준수하는 안전한 폼 백엔드 서비스입니다.

---

## 1. 폼 데이터 저장 위치

### Tally 클라우드 저장소

- **서버 위치**: EU 데이터 센터 (GDPR 준수)
- **암호화**: 전송 중 TLS 1.2+ 암호화, 저장 시 AES-256 암호화
- **백업**: 자동 일일 백업
- **접근**: Tally 대시보드 또는 API를 통해 접근

### 폼 구조

```json
{
  "name": "사용자 이름",
  "email": "사용자 이메일",
  "company": "회사/소속",
  "message": "피드백 메시지"
}
```

---

## 2. 운영자 접근 방법

### 2.1 Tally 대시보드 접근

#### 단계 1: Tally 계정 로그인

1. [tally.so](https://tally.so)에 접속
2. 이메일 또는 Google 계정으로 로그인
3. 대시보드 접속

#### 단계 2: 폼 선택

1. 대시보드에서 "Halli Beta Signup" 폼 선택
2. 또는 직접 링크: `https://tally.so/r/nXEqKx`

#### 단계 3: 응답 확인

1. "Responses" 탭 클릭
2. 모든 베타 신청 데이터 확인

**표시되는 정보:**
- 제출 시간
- 사용자 이름
- 이메일 주소
- 회사/소속
- 메시지
- 제출 IP 주소 (선택)

### 2.2 데이터 관리 기능

#### 필터링 및 검색

```
"Responses" 탭 → 검색창 또는 필터 버튼
- 이메일로 검색
- 제출 날짜로 필터링
- 특정 필드로 정렬
```

#### CSV 내보내기

```
"Responses" 탭 → "Export" 버튼 → "CSV" 선택
```

내보낸 CSV 파일:
- 모든 응답 포함
- Excel 또는 Google Sheets에서 열기 가능
- 정기적으로 백업 권장

#### 개별 응답 관리

```
각 응답 행 → 클릭 → 상세 정보 확인
- 수정 (선택)
- 삭제 (선택)
- 메모 추가 (선택)
```

### 2.3 자동 알림 설정

#### 이메일 알림

1. 폼 설정 → "Notifications"
2. "Email notifications" 활성화
3. 이메일 주소 입력
4. 새 제출 시 자동 이메일 수신

#### Slack 통합 (선택)

1. 폼 설정 → "Integrations"
2. "Slack" 선택
3. Slack 워크스페이스 연결
4. 채널 선택
5. 새 제출 시 Slack 메시지 수신

#### Webhook (고급)

```
폼 설정 → "Integrations" → "Webhook"

새 제출 시 다음 URL로 POST 요청:
https://your-server.com/api/beta-signup

요청 본문:
{
  "data": [
    {"key": "name", "value": "..."},
    {"key": "email", "value": "..."},
    {"key": "company", "value": "..."},
    {"key": "message", "value": "..."}
  ]
}
```

---

## 3. 데이터 보안 및 개인정보 보호

### 3.1 Tally 보안 정책

| 항목 | 상태 |
|------|------|
| **암호화** | TLS 1.2+ (전송), AES-256 (저장) |
| **GDPR 준수** | ✅ EU 데이터 센터 |
| **PIPA 준수** | ✅ 한국 개인정보보호법 준수 |
| **SOC 2 Type II** | ✅ 감사 완료 |
| **자동 백업** | ✅ 일일 백업 |
| **2FA 지원** | ✅ 계정 보안 |

### 3.2 운영자 보안 조치

#### 계정 보안

1. **강력한 비밀번호** 설정
   - 12자 이상, 대문자/소문자/숫자/특수문자 포함

2. **2단계 인증(2FA)** 활성화
   - Tally 계정 설정 → "Security"
   - "Two-factor authentication" 활성화
   - Google Authenticator 또는 Authy 사용

3. **정기적인 비밀번호 변경**
   - 3개월마다 변경 권장

#### 데이터 접근 제한

1. **팀 멤버 관리**
   - 폼 설정 → "Team"
   - 필요한 사람만 초대
   - 역할 설정 (Editor, Viewer)

2. **접근 로그 확인**
   - Tally 계정 설정 → "Activity Log"
   - 모든 접근 기록 확인

#### 데이터 삭제

1. **개별 응답 삭제**
   ```
   응답 선택 → "Delete" → 확인
   ```

2. **모든 응답 삭제**
   ```
   폼 설정 → "Danger Zone" → "Delete all responses"
   ```

3. **폼 삭제**
   ```
   폼 설정 → "Danger Zone" → "Delete form"
   ```

---

## 4. 데이터 분석 및 활용

### 4.1 기본 분석

Tally 대시보드에서 제공하는 정보:

- **총 제출 수**: 베타 신청자 수
- **제출 시간대**: 언제 신청이 많이 들어오는지
- **응답률**: 각 필드의 응답 비율
- **완성률**: 폼 완성도

### 4.2 CSV 분석

내보낸 CSV를 다음 도구로 분석:

#### Google Sheets

```
1. CSV 파일을 Google Drive에 업로드
2. Google Sheets로 열기
3. 피벗 테이블, 차트 생성
4. 공유 가능한 대시보드 구성
```

#### Excel

```
1. CSV 파일을 Excel에서 열기
2. 필터, 정렬, 피벗 테이블 생성
3. 그래프 및 차트 생성
```

#### Python 분석

```python
import pandas as pd

# CSV 로드
df = pd.read_csv('beta_signups.csv')

# 기본 통계
print(df.describe())

# 회사별 신청자 수
print(df['company'].value_counts())

# 이메일 도메인 분석
df['email_domain'] = df['email'].str.split('@').str[1]
print(df['email_domain'].value_counts())
```

### 4.3 자동화된 분석

#### Google Apps Script (자동 분석)

```javascript
function analyzeSignups() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // 분석 로직
  const totalSignups = data.length - 1;
  const uniqueEmails = new Set(data.map(row => row[1])).size;
  
  // 결과 출력
  Logger.log(`Total: ${totalSignups}, Unique: ${uniqueEmails}`);
}
```

---

## 5. 베타 테스터 관리

### 5.1 신청자 분류

제출된 데이터를 기반으로 신청자 분류:

| 분류 | 기준 | 조치 |
|------|------|------|
| **우선 대상** | 회사/소속 있음 + 메시지 상세 | 먼저 초대 |
| **일반 대상** | 회사/소속 없음 + 메시지 간단 | 순차 초대 |
| **추적 필요** | 메시지 없음 | 추가 확인 후 결정 |

### 5.2 초대 프로세스

#### 이메일 초대 템플릿

```
제목: Halli 베타 테스터 초대

안녕하세요, [이름]님!

Halli 베타 테스터로 초대해드립니다.

다운로드 링크: [링크]
베타 버전: v0.1.0
테스트 기간: 2026년 6월 ~ 7월

피드백 제출: [피드백 폼 링크]

감사합니다!
Halli 팀
```

#### 피드백 수집

1. Tally에서 새로운 "Feedback" 폼 생성
2. 베타 테스터에게 피드백 폼 링크 공유
3. 정기적으로 피드백 검토

### 5.3 추적 및 보고

#### 추적 스프레드시트

```
| 이메일 | 이름 | 회사 | 신청일 | 초대일 | 상태 | 피드백 |
|--------|------|------|--------|--------|------|--------|
| ... | ... | ... | ... | ... | 진행중 | ... |
```

#### 월간 보고서

```
1. 총 신청자 수
2. 초대된 테스터 수
3. 피드백 수
4. 주요 이슈
5. 다음 달 계획
```

---

## 6. 트러블슈팅

### 문제: 폼 제출이 기록되지 않음

**해결 방법:**

1. Tally 서버 상태 확인: [status.tally.so](https://status.tally.so)
2. 브라우저 콘솔에서 오류 확인 (F12)
3. 폼 ID 정확성 확인
4. 네트워크 요청 확인 (Network 탭)

### 문제: 이메일 알림을 받지 못함

**해결 방법:**

1. Tally 설정에서 이메일 주소 확인
2. 스팸 폴더 확인
3. 이메일 알림 설정 다시 활성화
4. Tally 지원팀에 문의

### 문제: CSV 내보내기 실패

**해결 방법:**

1. 브라우저 캐시 삭제
2. 다른 브라우저에서 시도
3. 응답 수가 많은 경우 날짜 범위로 필터링 후 내보내기
4. API를 통한 프로그래밍 방식 내보내기 고려

---

## 7. API를 통한 프로그래밍 접근

### 7.1 Tally API

Tally는 공식 API를 제공합니다.

#### 인증

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.tally.so/forms/nXEqKx/responses
```

#### API 키 생성

1. Tally 계정 설정 → "API"
2. "Generate API Key" 클릭
3. 키 복사 및 안전하게 저장

#### 응답 조회

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.tally.so/forms/nXEqKx/responses
```

응답 예시:

```json
{
  "data": [
    {
      "id": "response_1",
      "createdAt": "2026-05-30T06:00:00Z",
      "fields": [
        {"key": "name", "value": "홍길동"},
        {"key": "email", "value": "hong@example.com"},
        {"key": "company", "value": "Example Corp"},
        {"key": "message", "value": "좋은 서비스입니다!"}
      ]
    }
  ]
}
```

### 7.2 자동화 스크립트 (Node.js)

```javascript
const axios = require('axios');

async function fetchBetaSignups() {
  const apiKey = process.env.TALLY_API_KEY;
  const formId = 'nXEqKx';
  
  try {
    const response = await axios.get(
      `https://api.tally.so/forms/${formId}/responses`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    
    console.log('Total signups:', response.data.data.length);
    
    // 데이터 처리
    response.data.data.forEach(signup => {
      const fields = {};
      signup.fields.forEach(field => {
        fields[field.key] = field.value;
      });
      console.log(fields);
    });
  } catch (error) {
    console.error('Error fetching signups:', error);
  }
}

fetchBetaSignups();
```

---

## 8. 정기 유지보수

### 월간 작업

- [ ] CSV 내보내기 및 백업
- [ ] 데이터 분석 및 보고서 작성
- [ ] 베타 테스터 상태 업데이트
- [ ] 피드백 검토 및 정리

### 분기별 작업

- [ ] 보안 감사 (2FA, 비밀번호 변경)
- [ ] 팀 멤버 접근 권한 검토
- [ ] 데이터 보관 정책 검토
- [ ] Tally 요금제 검토

### 연간 작업

- [ ] 개인정보 보호 정책 검토
- [ ] 데이터 보관 기간 결정
- [ ] 아카이브 데이터 정리
- [ ] 보안 업데이트 확인

---

## 9. 추가 리소스

- [Tally 공식 문서](https://tally.so/help)
- [Tally API 문서](https://tally.so/developers)
- [한국 개인정보보호법 가이드](https://www.pipc.go.kr)
- [GDPR 가이드](https://gdpr-info.eu)

---

**마지막 업데이트**: 2026년 5월 30일
**버전**: 1.0.0
