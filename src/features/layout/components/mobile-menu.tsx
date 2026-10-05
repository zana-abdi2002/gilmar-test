"use client";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { navItems } from "../constants/nav-items";
import NavLink from "./nav-link";
import { CloseIcon, MenuIcon } from "./navbar-icons";

function MobileMenu() {
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = () => setOpen(false);

  return (
    <>
      <IconButton
        aria-label={t("openMenu")}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen(true)}
        className="text-foreground focus-ring rounded-full min-[830px]:hidden"
      >
        <MenuIcon className="size-6" />
      </IconButton>

      <Drawer
        id={menuId}
        anchor="right"
        open={open}
        onClose={close}
        slotProps={{
          paper: {
            className:
              "w-[min(20rem,85vw)] bg-navbar-surface p-5 text-foreground",
          },
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-high text-base font-bold">{t("menu")}</span>
          <IconButton
            aria-label={t("closeMenu")}
            onClick={close}
            className="text-foreground focus-ring"
          >
            <CloseIcon className="size-6" />
          </IconButton>
        </div>

        <nav aria-label={t("mobileNavigation")} className="mt-6">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ key, href }) => (
              <li key={key}>
                <NavLink href={href} variant="mobile" onNavigate={close}>
                  {t(key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
}

export default MobileMenu;
