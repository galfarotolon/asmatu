import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description: string;
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
          <span className="desc">{description}</span>
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
