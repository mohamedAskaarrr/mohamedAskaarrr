import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Protofolio
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              Built with Next.js, Tailwind CSS, and a passion for security
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 Protofolio. Securing the web, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
