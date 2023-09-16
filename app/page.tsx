//pages.tsx
"use client";

interface Section {
 title: string;
 items: Item[];
}
interface NavigationProps {
 sections: Section[];
}

interface Item {
 name: string;
 url: string;
}

function Navigation({ sections }: NavigationProps) {
 function closeOthers() {
  const summaries = document.querySelectorAll("summary");
  summaries.forEach((summary) => {
   const detail = summary.parentElement as HTMLDetailsElement;
   if (detail) {
    detail.removeAttribute("open");
   }
  });
 }
 return (
  <div className="p-10">
   {sections.map((section, index) => (
    <details className="select-none pb-4" key={index}>
     <summary
      onClick={closeOthers}
      className={`flex cursor-pointer hover:underline text-7xl [&::-webkit-details-marker]:hidden ${index === 0 ? "font-bold" : ""}`}
     >
      {section.title}
     </summary>
     {section.items.map((item, i) => (
      <p className="text-2xl" key={i}>
       <a target="_blank" href={item.url}>
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
     url: "",
    },
    {
     name: "software tester",
     url: "",
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
