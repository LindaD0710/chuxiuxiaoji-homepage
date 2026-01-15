import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1b4b] to-[#2e1065] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-serif text-white mb-4 drop-shadow-lg">
          初秀小集
        </h1>
        <p className="text-xl text-slate-300 mb-12">
          我的产品集合
        </p>
        
        <div className="space-y-4">
          <a
            href="https://ielts-novel.chuxiuxiaoji.com"
            className="block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-200 shadow-lg hover:shadow-cyan-500/30"
          >
            <div className="text-lg mb-1">IELTS Novel Flow</div>
            <div className="text-sm opacity-90">通过阅读小说学习雅思词汇</div>
          </a>
          
          {/* 将来可以添加更多产品 */}
          {/* 
          <Link
            href="/another-product"
            className="block px-8 py-4 bg-slate-800/50 border border-white/10 text-slate-300 rounded-xl hover:border-cyan-400/50 hover:text-white transition-all"
          >
            <div className="text-lg mb-1">下一个产品</div>
            <div className="text-sm opacity-70">产品描述</div>
          </Link>
          */}
        </div>
      </div>
    </main>
  );
}
