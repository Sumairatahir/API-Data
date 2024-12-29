import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-7">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-lg font-semibold">Created by Sumaira Tahir</h1>
        <div className="flex gap-6">
          <Link href="https://www.linkedin.com/in/sumaira-tahir-b1b186224/" target="_blank" rel="noopener noreferrer">
            <span className="hover:underline">LinkedIn</span>
          </Link>
          
          
          
          <Link href="https://github.com/Sumairatahir/my-app" target="_blank" rel="noopener noreferrer">
            <span className="hover:underline">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
