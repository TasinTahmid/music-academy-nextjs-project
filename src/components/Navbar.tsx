"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "absolute top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                <Link href={"#"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Home"
                    />
                </Link>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Our Courses"
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href={"#"}>All Courses</HoveredLink>
                        <HoveredLink href={"#"}>Basic Music</HoveredLink>
                        <HoveredLink href={"#"}>
                            Advanced Composition
                        </HoveredLink>
                        <HoveredLink href={"#"}>Song Writing</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"#"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact Us"
                    />
                </Link>
            </Menu>
        </div>
    );
};

export default Navbar;
