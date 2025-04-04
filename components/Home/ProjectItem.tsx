"use client";

import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface ProjectItemProps {
  title: string;
  description: any[]; // Changed to any[] to accept block content
  imageUrl: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <li>
      <div className="item">
        <div className="img_holder">
          <div
            className="abs_img"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <Link href={link}></Link>
        </div>
        <div className="title_holder">
          <h3>
            <Link href={link}>{title}</Link>
          </h3>
          <div className="desc">
            {/* Render the block content using PortableText */}
            <PortableText value={description} />
          </div>
          <p>
            <Link href={link}>
              <span className="text">Más Detalles</span>
              <span className="arrow">
                <Arrow_r className="fn__svg" />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
