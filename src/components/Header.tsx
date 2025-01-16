import { Link } from "react-router-dom"
// import { useTheme } from "./theme-provider"
import { ModeToggle } from "./mode-toggle"
import { Zap } from "lucide-react"
import { CitySearch } from "./city-search"


const Header = () => {
    // const { theme } = useTheme()
    // const isDark = theme === "dark"
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
            <Link to={"/"}>
            <span className="text-3xl font-semibold inline-flex gap-3 items-center"><Zap size={32}/>KLIMATE</span>
            </Link>
            <div className="flex items-center gap-4">
                {/* search  */}
                <CitySearch/>
                {/* theme toggle  */}
                <ModeToggle/>
            </div>
        </div>
    </header>
  )
}

export default Header