import { Link } from "wouter";

export default function AboutPage() {
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
            Halli에 대해
          </h1>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Halli는 무엇인가요?</h2>
            <p className="text-muted-foreground mb-4">
              Halli는 <strong>사람의 흐름을 기억하는 AI</strong>입니다.
              단순한 질문-답변 봇이 아니라, 너의 프로젝트·말투·취향·작업 흐름을 기억하는 동반자입니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">왜 Halli를 만들었나요?</h2>
            <p className="text-muted-foreground mb-4">
              기존 AI 도구들은:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>매번 처음부터 설명해야 함</li>
              <li>너의 작업 흐름을 모름</li>
              <li>과하게 친절하거나 형식적임</li>
              <li>클라우드에 데이터를 저장함</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Halli는 이 모든 문제를 해결합니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Halli의 4가지 정체성</h2>
            <p className="text-muted-foreground mb-2"><strong>기억</strong></p>
            <p className="text-muted-foreground mb-4">
              너의 프로젝트·말투·취향·작업 흐름을 기억합니다. 매번 처음부터 시작하지 않아도 됩니다.
            </p>
            <p className="text-muted-foreground mb-2"><strong>분위기</strong></p>
            <p className="text-muted-foreground mb-4">
              차분하고 잔잔한 새벽 톤. 과하지 않게, 옆에 있는 존재처럼.
            </p>
            <p className="text-muted-foreground mb-2"><strong>투자 분석</strong></p>
            <p className="text-muted-foreground mb-4">
              한국·미국 주식과 코인 흐름을 같이 봅니다. 추천 봇이 아니라, 같이 보는 동반자.
            </p>
            <p className="text-muted-foreground mb-2"><strong>동반자</strong></p>
            <p className="text-muted-foreground mb-4">
              너의 생각을 그대로 구현합니다. 혼자가 아닙니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">기술</h2>
            <p className="text-muted-foreground mb-4">
              Halli는 다음 기술을 사용합니다:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>최신 LLM API (Google Gemini, OpenAI, Anthropic, DeepSeek)</li>
              <li>로컬 저장소 (모든 데이터는 너의 PC에 저장)</li>
              <li>프라이빗 프로젝트 관리</li>
              <li>자동 기억 시스템</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">가격</h2>
            <p className="text-muted-foreground mb-4">
              Halli는 <strong>무료</strong>입니다. 다만 LLM API 사용료가 발생합니다.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">연락</h2>
            <p className="text-muted-foreground mb-4">
              질문이나 피드백이 있으신가요? 베타 신청 폼을 통해 연락주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
