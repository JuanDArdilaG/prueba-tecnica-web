import React, { PropsWithChildren } from "react";
import "./FooterSection.css";

export default function FooterSection(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <div>
      <div className={`px-3 flex flex-col ${props.className || ""}`}>
        {props.children}
      </div>
    </div>
  );
}
