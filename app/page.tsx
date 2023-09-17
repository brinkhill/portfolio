"use client";
// pages.tsx
import { useEffect } from "react";

interface Section {
 title: string;
 items: Item[];
}

interface Item {
 name: string;
 url: string;
}

interface NavigationProps {
 sections: Section[];
}

function Navigation({ sections }: NavigationProps) {
 useEffect(() => {
  function closeOthers(details: HTMLDetailsElement) {
   const detailsElements = Array.from(document.querySelectorAll("details"));
   detailsElements.forEach((otherDetails) => {
    if (otherDetails !== details) {
     otherDetails.removeAttribute("open");
    }
   });
  }

  const detailsElements = document.querySelectorAll("details");
  detailsElements.forEach((details) => {
   details.addEventListener("click", () => {
    closeOthers(details);
   });
  });

  return () => {
   // Cleanup event listeners on unmount
   detailsElements.forEach((details) => {
    details.removeEventListener("click", () => {
     closeOthers(details);
    });
   });
  };
 }, []);

 return (
  <div className="p-10">
   {sections.map((section, index) => (
    <details className="select-none pb-4" key={index}>
     <summary
      onClick={() => {}}
      className={`flex cursor-pointer hover:underline text-7xl [&::-webkit-details-marker]:hidden ${index === 0 ? "font-bold" : ""}`}
     >
      {section.title}
     </summary>
     {section.items.map((item, i) => (
      <p className="text-2xl " key={i}>
       <a target="_blank" className="hover:underline " href={item.url}>
        {item.name}
       </a>
      </p>
     ))}
    </details>
   ))}
  </div>
 );
}

export default function Main() {
 const sections: Section[] = [
  {
   title: "Brinkley Hill",
   items: [
    {
     name: "web developer &",
     url: "https://nextjs.org/",
    },
    {
     name: "software tester",
     url: "https://playwright.dev/",
    },
   ],
  },
  {
   title: "Projects",
   items: [
    {
     name: "Discrr",
     url: "https://discrr.com",
    },

    {
     name: "Apex Collision",
     url: "https://apexcollisioncenters.com",
    },
    {
     name: "BoardMate",
     url: "https://boardmate.app",
    },
   ],
  },
  {
   title: "Socials",
   items: [
    {
     name: "github",
     url: "https://github.com/brinkhill",
    },
    {
     name: "linkedin",
     url: "https://www.linkedin.com/in/brinkhill/",
    },
    {
     name: "twitter",
     url: "https://twitter.com/brink514",
    },
   ],
  },
  {
   title: "Contact",
   items: [
    {
     name: "8brink@gmail.com",
     url: "mailto:8brink@gmail.com",
    },
   ],
  },
 ];

 return <Navigation sections={sections} />;
}
