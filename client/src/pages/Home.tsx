import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground">Halli</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              소개
            </Link>
            <Link href="/guide" className="text-muted-foreground hover:text-foreground transition-colors">
              가이드
            </Link>
            <Link href="/download" className="text-muted-foreground hover:text-foreground transition-colors">
              다운로드
            </Link>
            <Link href="/beta" className="text-muted-foreground hover:text-foreground transition-colors">
              베타
            </Link>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="container py-16 md:py-32 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            사람의 흐름을 기억하는 AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Halli — 도구가 아니라, 옆에 있는 존재.
            <br />
            너의 프로젝트, 말투, 취향, 작업 흐름을 기억합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                베타 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/download">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-foreground"
              >
                지금 다운로드
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4축 특징 섹션 */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Halli는 이런 AI입니다
          </h2>
          <p className="text-muted-foreground text-lg">
            질문에 답하는 봇이 아니라, 흐름을 기억하는 동반자.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 기억 */}
          <Card className="bg-card border-border p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">기억</h3>
            <p className="text-muted-foreground">
              너의 프로젝트·말투·취향·작업 흐름을 기억합니다.
              <br />
              매번 처음부터 시작하지 않아도 됩니다.
            </p>
          </Card>

          {/* 분위기 */}
          <Card className="bg-card border-border p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">분위기</h3>
            <p className="text-muted-foreground">
              차분하고 잔잔한 새벽 톤.
              <br />
              과하지 않게, 옆에 있는 존재처럼.
            </p>
          </Card>

          {/* 투자 분석 */}
          <Card className="bg-card border-border p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">투자 분석</h3>
            <p className="text-muted-foreground">
              한국·미국 주식과 코인 흐름을 같이 봅니다.
              <br />
              추천 봇이 아니라, 같이 보는 동반자.
            </p>
          </Card>

          {/* 동반자 */}
          <Card className="bg-card border-border p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">동반자</h3>
            <p className="text-muted-foreground">
              너의 생각을 그대로 구현합니다.
              <br />
              혼자가 아닙니다.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="container py-16 md:py-24">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Halli와 함께 시작하세요
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            너의 PC에서 동작하는 개인용 AI 도구입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                베타 신청하기
              </Button>
            </Link>
            <Link href="/download">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-foreground"
              >
                다운로드 페이지
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-border/50 bg-secondary/30 py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-foreground">Halli</span>
              </div>
              <p className="text-sm text-muted-foreground">
                사람의 흐름을 기억하는 AI
              </p>
            </div>

            <div className="flex gap-8 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                소개
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2026 Halli
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
