import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function DownloadPage() {
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
            Halli 다운로드
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            너의 PC에서 동작하는 개인용 AI 도구입니다.
          </p>

          <div className="space-y-6">
            {/* Windows */}
            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Windows</h3>
                  <p className="text-muted-foreground">Windows 10 이상</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    시스템 요구사항: 4GB RAM, 200MB 저장공간
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="https://github.com/Yunseong44/Yunseong-Industry/releases/download/halli-v0.1.0-beta/Halli-Windows.zip">
                    <Download className="w-4 h-4 mr-2" />
                    다운로드
                  </a>
                </Button>
              </div>
            </Card>

            {/* macOS */}
            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">macOS</h3>
                  <p className="text-muted-foreground">macOS 11 이상</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    시스템 요구사항: 4GB RAM, 200MB 저장공간
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled
                >
                  <Download className="w-4 h-4 mr-2" />
                  준비 중
                </Button>
              </div>
            </Card>

            {/* Linux */}
            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Linux</h3>
                  <p className="text-muted-foreground">Ubuntu 20.04 이상</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    시스템 요구사항: 4GB RAM, 200MB 저장공간
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled
                >
                  <Download className="w-4 h-4 mr-2" />
                  준비 중
                </Button>
              </div>
            </Card>
          </div>

          {/* 주의사항 */}
          <Card className="bg-card border-border p-6 mt-12">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">필수 요구사항</h3>
                <p className="text-muted-foreground mb-4">
                  Halli는 다음 LLM API 중 하나를 사용합니다:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Google Gemini API</li>
                  <li>OpenAI GPT API</li>
                  <li>Anthropic Claude API</li>
                  <li>DeepSeek API</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  너의 API 키로 동작합니다. 대화·기억은 너의 PC에만 저장됩니다.
                </p>
              </div>
            </div>
          </Card>

          {/* 베타 신청 */}
          <div className="mt-12 p-8 bg-secondary rounded-lg text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              아직 다운로드할 준비가 안 되셨나요?
            </h3>
            <p className="text-muted-foreground mb-6">
              베타 신청을 통해 출시 소식을 받으세요.
            </p>
            <Link href="/beta">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                베타 신청하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
