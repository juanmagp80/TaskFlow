"use client";
import { useEffect } from "react";
import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  return null;
};
