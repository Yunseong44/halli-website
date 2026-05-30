import { Link } from "wouter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <span className="text-lg font-bold text-foreground cursor-pointer">Halli</span>
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            돌아가기
          </Link>
        </div>
      </header>

      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            개인정보처리방침
          </h1>
          <p className="text-muted-foreground mb-8">
            최종 수정일: 2026년 5월 30일
          </p>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. 개요</h2>
            <p className="text-muted-foreground mb-4">
              Halli("회사")는 개인정보보호법을 준수하며, 사용자의 개인정보를 보호하기 위해 최선을 다합니다.
              본 방침은 Halli 데스크톱 애플리케이션 사용 시 개인정보 처리 방식을 설명합니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. 수집하는 정보</h2>
            <p className="text-muted-foreground mb-4">
              Halli는 다음 정보를 수집합니다:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>베타 신청 시:</strong> 이름, 이메일, 회사/소속(선택), 메시지(선택)</li>
              <li><strong>애플리케이션 사용 시:</strong> 프로젝트 데이터, 대화 기록 (모두 로컬 저장)</li>
              <li><strong>API 키:</strong> 너의 LLM API 키 (로컬 저장, 외부 전송 안 함)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. 정보 저장 위치</h2>
            <p className="text-muted-foreground mb-4">
              <strong>로컬 저장:</strong> Halli의 모든 프로젝트 데이터, 대화 기록, API 키는 너의 PC에만 저장됩니다.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>베타 신청 데이터:</strong> 베타 신청 정보는 Tally.so(한국 개인정보보호법 준수)에 저장됩니다.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>외부 전송 없음:</strong> 너의 대화나 프로젝트 데이터는 절대 외부 서버로 전송되지 않습니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. LLM API 사용</h2>
            <p className="text-muted-foreground mb-4">
              Halli는 다음 LLM 서비스를 사용합니다:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Google Gemini (Google 개인정보처리방침 준수)</li>
              <li>OpenAI GPT (OpenAI 개인정보처리방침 준수)</li>
              <li>Anthropic Claude (Anthropic 개인정보처리방침 준수)</li>
              <li>DeepSeek (DeepSeek 개인정보처리방침 준수)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              너의 API 키로 요청이 직접 LLM 서비스로 전송됩니다. 각 서비스의 개인정보처리방침을 확인하세요.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. 데이터 보안</h2>
            <p className="text-muted-foreground mb-4">
              - 로컬 데이터: 너의 PC 파일 시스템 보안에 의존
            </p>
            <p className="text-muted-foreground mb-4">
              - API 키: 암호화되어 로컬 저장
            </p>
            <p className="text-muted-foreground mb-4">
              - 전송: HTTPS를 통한 암호화된 통신
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. 사용자 권리</h2>
            <p className="text-muted-foreground mb-4">
              너는 다음 권리를 가집니다:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>너의 데이터 접근 요청</li>
              <li>너의 데이터 수정 요청</li>
              <li>너의 데이터 삭제 요청</li>
              <li>데이터 처리 거부</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. 쿠키 및 추적</h2>
            <p className="text-muted-foreground mb-4">
              Halli 데스크톱 애플리케이션은 쿠키를 사용하지 않습니다.
              웹사이트(ysitox.com)는 최소한의 분석 도구만 사용합니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. 정책 변경</h2>
            <p className="text-muted-foreground mb-4">
              본 정책은 언제든 변경될 수 있습니다. 변경 시 웹사이트에 공지합니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. 문의</h2>
            <p className="text-muted-foreground mb-4">
              개인정보 처리에 대한 질문이 있으신가요? 베타 신청 폼을 통해 연락주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
