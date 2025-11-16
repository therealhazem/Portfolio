const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9] border-t border-t-[#5c5c5c] py-10 max-md:py-6 font-poppins max-md:text-[3.5vw] mt-10 max-md:mt-8">
            <div className="container mx-auto text-center max-md:px-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center space-y-4 max-md:space-y-3">
                <h1 className="text-[2vw] font-bold max-md:text-[7vw]">Nice to see You here!</h1>
                <h2>Curious? Feedback? Collaboration?</h2>
                <h3>
                    Feel free to grab a virtual coffee with me via{" "}
                    <a
                        href="mailto:therealhazemelgindy@gmail.com"
                        className="underline inline-block transition-all underline-offset-3 duration-300 hover:translate-y-[-2px]"
                    >
                        email
                    </a>{" "}
                    or{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/hazemelgindy/"
                        className="underline inline-block transition-all underline-offset-3 duration-300 hover:translate-y-[-2px]"
                    >
                        LinkedIn
                    </a>{" "}
                    !
                </h3>

                <div className="max-md:flex-col flex items-center justify-between text-inter mt-6 max-md:mt-4">
                    <h4 className="text-pretty">
                        &copy; 2025 Hazem Elgindy
                        <br />
                        Fueled by Egyptian Songs & a Lot of Coffee
                    </h4>

                    <div className="flex items-center max-md:my-4 space-x-3">
                        <a
                            href="mailto:therealhazemelgindy@gmail.com"
                            aria-label="Send email to Hazem Elgindy"
                        >
                            <img
                                src="/images/mail.svg"
                                alt="Mail icon"
                                className="max-md:h-8 max-md:w-8 h-10 w-10 hover:translate-y-[-2px] transition-all duration-300"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hazemelgindy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Hazem Elgindy's LinkedIn"
                        >
                            <img
                                src="/images/linkedin.svg"
                                alt="LinkedIn icon"
                                className="max-md:h-7 max-md:w-7 h-8 w-8 hover:translate-y-[-2px] transition-all duration-300"
                            />
                        </a>
                        <a
                            href="https://github.com/therealhazem"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Hazem Elgindy's GitHub"
                        >
                            <img
                                src="/images/github.svg"
                                alt="GitHub icon"
                                className="max-md:h-7 max-md:w-7 h-8 w-8 hover:translate-y-[-2px] transition-all duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
