import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  slug: string;
  description: string;
  detailedInfo: string;
  quote: string;
  value: string;
  client: string;
  architect: string;
  location: string;
  completionDate: string;
  squareFootage: string;
}

interface ProjectDetailProps {
  project: Project;
}

const PortfolioDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div>
      {/* Portfolio Content */}
      <div className="industify_fn_psingle_content">
        <div className="container flex flex-col items-left">
          <div className="w-full mb-10 relative h-[400px] md:h-[600px]">
            <Image
              src={project.img}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="content_in">
            <div className="flex-col">
              <div className="content_part">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="py-10 text-xl">{project.description}</p>

                <p className="py-10">{project.detailedInfo}</p>
                <blockquote>{project.quote}</blockquote>
                <div className="share_box">
                  <div className="industify_fn_share_icons">
                    <label>Share:</label>
                    <ul>
                      <li>
                        <Link
                          href={`http://www.facebook.com/sharer.php?u=https://example.com/proyectos/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`https://twitter.com/share?url=https://example.com/proyectos/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`https://plus.google.com/share?url=https://example.com/proyectos/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-gplus"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`http://pinterest.com/pin/create/button/?url=https://example.com/proyectos/${project.slug}&amp;`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-pinterest"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`https://www.vk.com/sharer.php?url=https://example.com/proyectos/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-vkontakte"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="helpful_part">
              <div className="hp_inner">
                <ul>
                  <li>
                    <p>Category</p>
                    <span>{project.category}</span>
                  </li>
                  <li>
                    <p>Value</p>
                    <span>{project.value}</span>
                  </li>
                  <li>
                    <p>Client</p>
                    <span>{project.client}</span>
                  </li>
                  <li>
                    <p>Architect</p>
                    <span>{project.architect}</span>
                  </li>
                  <li>
                    <p>Location</p>
                    <span>{project.location}</span>
                  </li>
                  <li>
                    <p>Completion Date</p>
                    <span>{project.completionDate}</span>
                  </li>
                  <li>
                    <p>Square Footage</p>
                    <span>{project.squareFootage}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Portfolio Content */}
    </div>
  );
};

export default PortfolioDetail;
