"use client";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { navItems } from "../constants/nav-items";
import { isCurrentPath } from "../utils/isCurrentPath";
import { ChevronDownIcon } from "./NavbarIcons";

const overflowItems = navItems.filter(({ essential }) => !essential);

function MoreMenu() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const id = useId();
  const open = Boolean(anchorEl);

  // Highlight the trigger when the current page lives inside the menu
  const hasCurrent = overflowItems.some(({ href }) =>
    isCurrentPath(pathname, href),
  );

  const close = () => setAnchorEl(null);

  return (
    <>
      <button
        type="button"
        id={`${id}-button`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        data-active={hasCurrent || undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        className="font-mid text-foreground hover:text-primary-start data-active:text-primary-start focus-ring inline-flex min-h-11 cursor-pointer items-center gap-1 rounded-lg px-1 text-sm leading-8 font-semibold"
      >
        {t("more")}
        <ChevronDownIcon
          className={`size-4 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
        />
      </button>

      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        // Centered origins keep the menu aligned regardless of text direction
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{
          paper: { className: "mt-2 rounded-xl" },
          list: { "aria-labelledby": `${id}-button` },
        }}
      >
        {overflowItems.map(({ key, href }) => (
          <MenuItem
            key={key}
            component={Link}
            href={href}
            onClick={close}
            aria-current={isCurrentPath(pathname, href) ? "page" : undefined}
            className="font-mid text-foreground aria-[current=page]:text-primary-start min-h-11 text-sm font-semibold"
          >
            {t(key)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MoreMenu;
