import CommunityButtonInside from "./community-button";
import WikiButtonInside from "./wiki-button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import type { labels } from "~/lib/consts";
import HomeButtonInside from "./home-button";
import LegalButtonInside from "./legal-button";

export function CommunityButton({ label, labelSide }: labels) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CommunityButtonInside label={label} labelSide={labelSide} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Community</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function WikiButton({ label, labelSide }: labels) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <WikiButtonInside label={label} labelSide={labelSide} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Wiki</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function HomeButton({ label, labelSide }: labels) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HomeButtonInside label={label} labelSide={labelSide} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Home</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function LegalButton({ label, labelSide }: labels) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <LegalButtonInside label={label} labelSide={labelSide} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Legal</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}