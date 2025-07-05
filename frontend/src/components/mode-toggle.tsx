import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"

import { useTheme } from "@/components/theme-provider"
import lightImg from '../assets/light.png'
import darkImg from '../assets/dark.png'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-4">
      <div
        className="relative w-24 h-12 cursor-pointer"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        style={{
          backgroundImage: `url(${isDark ? darkImg : lightImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '9999px',
          transition: 'background-image 0.3s',
        }}
      >
        <div
          className="absolute top-1 w-10 h-10 rounded-full transition-all"
          style={{
            left: isDark ? '4px' : 'calc(100% - 44px)',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            transition: 'left 0.3s',
          }}
        />
      </div>
    </div>
  )
}