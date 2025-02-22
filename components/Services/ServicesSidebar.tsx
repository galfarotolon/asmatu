"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigation } from "@/sanity/queries";
import { findNavItemByKey } from "@/app/lib/routing"; // or your own helper

interface NavItem {
  key: string;
  title: { es: string; eu: string };
  es: { current: string };
  eu: { current: string };
  submenu?: Array<{
    _id: string;
    title: { es: string; eu: string };
    slug: { es: { current: string }; eu: { current: string } };
  }>;
}

interface SidebarProps {
  lang: "es" | "eu";
}

const ServicesSidebar: FC<SidebarProps> = ({ lang }) => {
  const [submenu, setSubmenu] = useState<NavItem["submenu"]>([]);
  const [baseRoute, setBaseRoute] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    getNavigation().then((nav) => {
      // Use your helper to find the services menu item from nav.menuItems
      const servicesItem: NavItem | null = findNavItemByKey(
        nav.menuItems,
        "services"
      );
      if (servicesItem) {
        setSubmenu(servicesItem.submenu || []);
        // Also extract the base route from the main item (the 'es' or 'eu' field)
        const base = servicesItem[lang]?.current || "";
        setBaseRoute(base.replace(/^\//, ""));
      }
    });
  }, [lang]);

  if (!submenu) return null;

  return (
    <div className="service_list_as_function">
      <div className="title">
        <h3>Lista Completa de Servicios</h3>
      </div>
      <div className="list_holder">
        <ul>
          {submenu.map((sub, idx) => {
            const serviceSlug = sub.slug?.[lang]?.current;
            const href = serviceSlug
              ? `/${lang}/${baseRoute}/${serviceSlug}`
              : `/${lang}`;
            return (
              <li key={sub._id || idx}>
                <Link href={href}>{sub.title ? sub.title[lang] : ""}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServicesSidebar;
