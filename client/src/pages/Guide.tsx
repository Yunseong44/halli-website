import { Link } from "wouter";

export default function GuidePage() {
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
            Halli 사용 가이드
          </h1>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">설치</h2>
            <p className="text-muted-foreground mb-4">
              1. 다운로드 페이지에서 너의 OS에 맞는 버전을 받으세요.
            </p>
            <p className="text-muted-foreground mb-4">
              2. 설치 파일을 실행하고 지시를 따르세요.
            </p>
            <p className="text-muted-foreground mb-4">
              3. Halli를 시작하고 API 키를 설정하세요.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">API 키 설정</h2>
            <p className="text-muted-foreground mb-4">
              Halli는 다음 LLM 중 하나를 사용할 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Google Gemini</strong>: https://ai.google.dev</li>
              <li><strong>OpenAI</strong>: https://platform.openai.com/api-keys</li>
              <li><strong>Anthropic Claude</strong>: https://console.anthropic.com</li>
              <li><strong>DeepSeek</strong>: https://platform.deepseek.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">기본 사용법</h2>
            <p className="text-muted-foreground mb-4">
              1. 왼쪽 패널에서 새 프로젝트를 만들거나 기존 프로젝트를 열으세요.
            </p>
            <p className="text-muted-foreground mb-4">
              2. 오른쪽 채팅창에 너의 생각을 입력하세요.
            </p>
            <p className="text-muted-foreground mb-4">
              3. Halli가 너의 프로젝트·말투·취향을 기억하며 대화합니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">프라이버시</h2>
            <p className="text-muted-foreground mb-4">
              - 모든 대화와 기억은 너의 PC에만 저장됩니다.
            </p>
            <p className="text-muted-foreground mb-4">
              - 외부 서버로 전송되지 않습니다.
            </p>
            <p className="text-muted-foreground mb-4">
              - 너의 API 키만 사용됩니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">자주 묻는 질문</h2>
            <p className="text-muted-foreground mb-2"><strong>Q: Halli는 무료인가요?</strong></p>
            <p className="text-muted-foreground mb-4">
              A: Halli 자체는 무료입니다. 다만 LLM API 사용료가 발생합니다.
            </p>
            <p className="text-muted-foreground mb-2"><strong>Q: 인터넷 연결이 필요한가요?</strong></p>
            <p className="text-muted-foreground mb-4">
              A: LLM API를 사용하므로 인터넷 연결이 필요합니다.
            </p>
            <p className="text-muted-foreground mb-2"><strong>Q: 기억은 얼마나 오래 유지되나요?</strong></p>
            <p className="text-muted-foreground mb-4">
              A: 너의 PC에 저장되는 한 계속 유지됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
