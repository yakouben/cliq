import { MacbookScroll } from "@/components/ui/macbook-scroll"
import Image from "next/image"

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-0 relative">
      <MacbookScroll
        title={
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-4">
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent font-black tracking-tight text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Suivez-nous sur Instagram
            </span>
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
              <div className="h-px w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <span className="text-purple-600 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                pour découvrir nos créations
              </span>
              <div className="h-px w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-2 sm:mt-4 md:mt-6">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        }
        badge={
          <a href="https://www.instagram.com/cliqevents_off?igsh=MTlqNW43OXpwMGE2eQ==" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative">
              <Badge className="h-12 w-12 sm:h-14 sm:w-14 -rotate-12 transform group-hover:rotate-0 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">@</span>
              </div>
            </div>
          </a>
        }
        src={`/cliq-ig.png?v=${Date.now()}`}
        showGradient={false}
      />
    </div>
  )
}

// Cliq logo without animation
const Badge = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 p-2 shadow-lg`}>
      <Image
        src="/logo-without-bg.png"
        alt="Cliq Logo"
        fill
        className="object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
    </div>
  )
}
