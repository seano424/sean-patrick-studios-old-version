
function Header() {
  return (
    <header className="bg-[#394FF4]/90 w-full fixed top-0 z-50 pr-20 h-20">
      <ul className="hidden lg:flex justify-end gap-12 p-6">
        <a href="#" className="link">
          Home
        </a>

        <a href="#" className="link">
          About
        </a>

        <a href="#" className="link">
          Skills & Tools
        </a>

        <a href="#" className="link">
          Work
        </a>

        <a href="#" className="link">
          testimonials
        </a>

        <a href="#" className="link">
          contact
        </a>

        <a href="#" className="link">
          blog
        </a>

        <a href="#" className="link">
          updates
        </a>
      </ul>
      <div className="lg:hidden p-6">
        <span className="link">x</span>
      </div>
    </header>
  )
}

export default Header
