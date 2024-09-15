import React from "react";
import "./ProjectLinks.css";

function ProjectLinks(props) {
  // Helper function to format the list of language names
  function formatLanguages(languages) {
    return languages.map((language) => language.name).join(" | ");
  }

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos && props.logos.length > 0 ? (
            <li
              className="software-skill-inline-languages"
              style={{ fontSize: "0.7em", textAlign: "left" }}
            >
              {formatLanguages(props.logos)}
            </li>
          ) : (
            <p>No technologies available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLinks;

// import React from "react";
// import "./ProjectLinks.css";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

// function ProjectLinks(props) {
//   function openRepoinNewTab(url) {
//     var win = window.open(url, "_blank");
//     win.focus();
//   }

//   console.log(props);
//   return (
//     <div>
//       <div className="software-skills-main-div">
//         <ul className="dev-icons-languages">
//           {props.logos && props.logos.length > 0 ? (
//             props.logos.map((logo) => {
//               return (
//                 <OverlayTrigger
//                   key={logo.name}
//                   placement={"top"}
//                   overlay={
//                     <Tooltip id={`tooltip-top`}>
//                       <strong>{logo.name}</strong>
//                     </Tooltip>
//                   }
//                 >
//                   <li
//                     className="software-skill-inline-languages"
//                     name={logo.skillName}
//                     onClick={() => openRepoinNewTab(logo.url)}
//                   >
//                     <span
//                       className="iconify"
//                       data-icon={logo.iconifyClass}
//                       data-inline="false"
//                     ></span>
//                   </li>
//                 </OverlayTrigger>
//               );
//             })
//           ) : (
//             <p>No logos available</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ProjectLinks;
