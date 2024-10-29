import WorkProjects from "./components/Work Projects";

export default function Home() {
  return (
    <section className="mt-32 space-y-20">
      {/* HEADLINE */}
      <div className="md:flex items-center md:space-y-0 space-y-10">
        <div className="md:space-y-32 space-y-10">
          <h1 className="font-medium text-[60px] text-[#181717] leading-[58px]">
            Hello, I am Mehmet Akif.
          </h1>
          <svg
            className="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <h2 className="font-normal text-[32px] leading-9 text-[#606060]">
          A senior-year design student who trying to specialize in 3D modeling &
          texturing.
        </h2>
      </div>

      <WorkProjects
        ProjectNumber={1}
        para1="Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development."
        para2="Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold."
        link="More shots from this project"
        image="/Image/img1.webp"
        svg={
          <svg
            className="h-8 w-8 md:flex hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="17" y1="7" x2="7" y2="17" />{" "}
            <polyline points="8 7 17 7 17 16" />
          </svg>
        }
      />
      <WorkProjects
        ProjectNumber={2}
        para1="Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques."
        link="See case study "
         image="/Image/img2.png"
        svg={
          <svg
            className="h-6 w-6 md:flex hidden "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        }
      />
      <WorkProjects
        ProjectNumber={3}
        para1="Experimental creature modeling for school project."
        link="Project WIP"
        linkColor={606060}
        image="/Image/img3.jpeg"
      />
    </section>
  );
}
