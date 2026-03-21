import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h2 className="text-center" style={{marginTop:"30px", marginBottom:"30px"}}>App List</h2>
      <ul className="menu flex flex-wrap gap-2 p-2 justify-center">
        <li><Link href="/acronym" className="hover:bg-sky-500 hover:!text-white "> Acronym Generator</Link></li>
        <li><Link href="/todo" className="hover:bg-sky-500 hover:!text-white"> TODO App</Link></li>
        <li><Link href="/counter" className="hover:bg-sky-500 hover:!text-white"> Counter</Link></li>
        <li><Link href="/chips" className="hover:bg-sky-500 hover:!text-white"> Chips Input</Link></li>
        <li><Link href="/client-side-pagination" className="hover:bg-sky-500 hover:!text-white"> Client Side Pagination</Link></li>
        <li><Link href="/auto-save-text" className="hover:bg-sky-500 hover:!text-white"> Auto Save Text</Link></li>
        <li><Link href="/color-explorer" className="hover:bg-sky-500 hover:!text-white">Color Explorer</Link></li>
        <li><Link href="/simple-authentication" className="hover:bg-sky-500 hover:!text-white">Simple Authentication</Link></li>
        <li><Link href="/faqs" className="hover:bg-sky-500 hover:!text-white">Faqs</Link></li>
        <li><Link href="/even-or-odd" className="hover:bg-sky-500 hover:!text-white">Even or Odd Checker</Link></li>
        <li><Link href="/toggle-password" className="hover:bg-sky-500 hover:!text-white">Toggle Password</Link></li>
        <li><Link href="/guess-the-number" className="hover:bg-sky-500 hover:!text-white">Guess The Number</Link></li>
        <li><Link href="/match-pair-game" className="hover:bg-sky-500 hover:!text-white">Match pair Game</Link></li>
        <li><Link href="/timer" className="hover:bg-sky-500 hover:!text-white">Timer</Link></li>
        <li><Link href="/age-calculator" className="hover:bg-sky-500 hover:!text-white">Age Calculator</Link></li>
        <li><Link href="/progress-bar" className="hover:bg-sky-500 hover:!text-white">Progress Bar</Link></li>
        <li><Link href="/mortgage-calculator" className="hover:bg-sky-500 hover:!text-white">Mortgage Calculator</Link></li>
        <li><Link href="/dynamic-greeting-app" className="hover:bg-sky-500 hover:!text-white">Dynamic Greeting App</Link></li>
        
        <li><Link href="/calculator" className="hover:bg-sky-500 hover:!text-white">Calculator</Link></li>
        <li><Link href="/weather-app" className="hover:bg-sky-500 hover:!text-white">Weather App</Link></li>
        <li><Link href="/quizz-app" className="hover:bg-sky-500 hover:!text-white">Quizz App</Link></li>
        <li><Link href="/quizz-app" className="hover:bg-sky-500 hover:!text-white">Price range slider</Link></li>
      </ul>
    </>
  );
}
