import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Menu } from "lucide-react";
import { 
  MotionDiv, 
  MotionButton, 
  MotionSpan,
  MotionH1,
  fadeInDown,
  hoverScale,
  staggerContainer,
  staggerItem
} from "@/components/ui/motion";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for navigation height - 64px on mobile, 80px on desktop
      const navHeight = window.innerWidth >= 768 ? 80 : 64;
      const offsetTop = element.offsetTop - navHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Contact", href: "contact" }
  ];

  return (
    <MotionDiv 
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <MotionDiv 
            className="flex items-center space-x-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MotionButton 
              className="text-xl font-bold text-foreground" 
              data-testid="logo"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              SV
            </MotionButton>
          </MotionDiv>
          
          <MotionDiv 
            className="hidden md:flex items-center space-x-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {navItems.map((item, index) => (
              <MotionButton
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none p-0"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  color: "hsl(var(--foreground))"
                }}
                whileTap={{ scale: 0.95 }}
                data-testid={`nav-${item.href}`}
              >
                {item.label}
              </MotionButton>
            ))}
          </MotionDiv>

          <MotionDiv 
            className="flex items-center space-x-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MotionButton
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
              whileHover={{ 
                scale: 1.1, 
                rotate: 180,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              data-testid="theme-toggle"
            >
              <MotionSpan
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </MotionSpan>
            </MotionButton>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <MotionButton
                  variant="ghost"
                  size="icon"
                  className="md:hidden p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-testid="mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </MotionButton>
              </SheetTrigger>
              <SheetContent>
                <MotionDiv 
                  className="flex flex-col space-y-4 mt-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {navItems.map((item, index) => (
                    <MotionButton
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 bg-transparent border-none p-0 justify-start"
                      variants={staggerItem}
                      whileHover={{ 
                        x: 10,
                        color: "hsl(var(--foreground))"
                      }}
                      data-testid={`mobile-nav-${item.href}`}
                    >
                      {item.label}
                    </MotionButton>
                  ))}
                </MotionDiv>
              </SheetContent>
            </Sheet>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Navigation;
