//pages.tsx

interface Section {
 title: string;
 items: string[];
}
interface NavigationProps {
 sections: Section[];
}

function Navigation({ sections }: NavigationProps) {
 return (
  <div className="p-10">
   {sections.map((section, index) => (
    <details className="select-none pb-4" key={index}>
     <summary className={`flex cursor-pointer hover:underline text-7xl ${index === 0 ? "font-bold" : ""}`}>{section.title}</summary>
     {section.items.map((item, i) => (
      <p className="" key={i}>
       {item}
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
   items: ["number 1", "number 2", "number 3"],
  },
  {
   title: "Projects",
   items: ["discrr.com", "boardmate.app", "apexcollisioncenters.com"],
  },
  {
   title: "Socials",
   items: ["number 1", "number 2", "number 3"],
  },
  {
   title: "Contact",
   items: ["number 1", "number 2", "number 3"],
  },
 ];

 return <Navigation sections={sections} />;
}
