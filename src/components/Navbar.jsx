const Navbar = () => {
    return (
        <nav className="bg-[#F9F9F9] max-md:h-[75px] h-[80px] border-b border-b-[#5C5C5C] px-2">
            <div className="container mx-auto h-full flex justify-between items-center max-md:flex-col max-md:justify-center">
                <img
                    src="/images/Logo.svg"
                    alt="Hazem Elgindy Logo"
                    className="max-md:h-[50px] h-full"
                    loading="eager"
                />
                <div className="flex items-center justify-center gap-8">
                    <a
                        className="font-semibold font-inter hover:translate-y-[-2px] transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1GVgXe_aUxJ8ZvRqdbibcXDMIwd_eHK53/view?usp=sharing"
                    >
                        Resume
                    </a>
                    <a
                        className="font-semibold font-inter hover:translate-y-[-2px] transition-all duration-300"
                        href="#Work"
                    >
                        Work
                    </a>
                    <a
                        className="hover:translate-y-[-2px] transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/hazemelgindy/"
                        aria-label="LinkedIn"
                    >
                        <img
                            src="/images/linkedin.svg"
                            alt="LinkedIn icon"
                            className="max-md:size-5 size-8"
                        />
                    </a>
                    <a
                        className="hover:translate-y-[-2px] transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/therealhazem"
                        aria-label="GitHub"
                    >
                        <img
                            src="/images/github.svg"
                            alt="GitHub icon"
                            className="max-md:size-5 size-8"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
