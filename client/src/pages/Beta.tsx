import { useEffect } from "react";
import { Link } from "wouter";

export default function BetaPage() {
  useEffect(() => {
    // Tally 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Halli 베타 신청
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Halli의 최신 기능을 먼저 경험하고 피드백을 주세요.
            <br />
            출시 소식을 가장 먼저 받을 수 있습니다.
          </p>

          {/* Tally 폼 임베드 */}
          <div className="bg-card border border-border rounded-lg p-8">
            <iframe
              data-tally-src="https://tally.so/embed/nXEqKx"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Halli 베타 신청"
              style={{ borderRadius: "0.65rem" }}
            ></iframe>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8">
            개인정보는 베타 테스터 모집 목적으로만 사용됩니다.
            <br />
            <Link href="/privacy" className="text-primary hover:text-primary/80">
              개인정보처리방침
            </Link>
            을 확인하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
