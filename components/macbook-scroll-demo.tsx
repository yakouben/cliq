import { MacbookScroll } from "@/components/ui/macbook-scroll"

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:bg-gradient-to-br dark:from-purple-950 dark:via-[#0B0B0F] dark:to-purple-950 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-0 relative">
      <MacbookScroll
        title={
          <div className="text-center space-y-3 sm:space-y-4 px-4">
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent font-black tracking-tight text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
              Suivez-nous sur Instagram
            </span>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <span className="text-purple-600 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                pour découvrir nos créations
              </span>
              <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        }
        badge={
          <a href="https://instagram.com/cliqevents" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative">
              <Badge className="h-12 w-12 sm:h-14 sm:w-14 -rotate-12 transform group-hover:rotate-0 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">@</span>
              </div>
            </div>
          </a>
        }
        src={`/cliq-ig.png`}
        showGradient={false}
      />
    </div>
  )
}

// Cliq logo without animation
const Badge = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 p-2 shadow-lg`}>
      <img
        src="/logo-without-bg.png"
        alt="Cliq Logo"
        className="object-contain w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
    </div>
  )
}
