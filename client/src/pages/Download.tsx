import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Link } from "wouter";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <span className="cursor-pointer text-lg font-bold text-foreground">Halli</span>
          </Link>
          <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
            돌아가기
          </Link>
        </div>
      </header>

      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Halli 다운로드
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            내 PC에서 조용히 동작하는 개인형 AI 도구입니다.
          </p>

          <div className="space-y-6">
            <Card className="border-border bg-card p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Windows</h3>
                  <p className="text-muted-foreground">Windows 10 이상</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    버전 0.1.1 설치 파일을 내려받은 뒤 더블 클릭해서 설치해 주세요.
                    파일 크기는 약 100MB입니다.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="https://github.com/Yunseong44/Yunseong-Industry/releases/download/halli-v0.1.1-beta/Halli-Setup-0.1.1.exe">
                    <Download className="mr-2 h-4 w-4" />
                    0.1.1 설치 파일 받기
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="border-border bg-card p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">macOS</h3>
                  <p className="text-muted-foreground">macOS 11 이상</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    macOS용 설치 파일은 준비 중입니다.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled
                >
                  <Download className="mr-2 h-4 w-4" />
                  준비 중
                </Button>
              </div>
            </Card>

            <Card className="border-border bg-card p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Linux</h3>
                  <p className="text-muted-foreground">Ubuntu 20.04 이상</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Linux용 설치 파일은 준비 중입니다.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled
                >
                  <Download className="mr-2 h-4 w-4" />
                  준비 중
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-12 rounded-lg bg-secondary p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              아직 다운로드가 열리지 않았나요?
            </h3>
            <p className="mb-6 text-muted-foreground">
              베타 신청을 남겨 주시면 출시 소식을 차분히 전해드릴게요.
            </p>
            <Link href="/beta">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                베타 신청하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
