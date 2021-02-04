import React from "react";
import Link from "next/link";

export default function Clickable({
  href,
  children,
  ...props
}: any) {
  return (
    <Link href={href || ""}>
      <div {...props} style={{ cursor: "pointer" }}>
        {children}
      </div>
    </Link>
  );
}
