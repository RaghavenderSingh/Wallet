import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import {
  Menu,
  Wallet,
  Coins,
  PlugZap,
  ArrowRight,
  Briefcase,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Session } from "next-auth";
import Logo from "../icons/Logo";
import SignOut from "../auth/signout-button";

export default function UserActionPanel({
  session,
}: {
  session: Session | null;
}) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center justify-between gap-2 p-1 px-5 rounded-lg border border-black">
          <div className="flex items-center justify-center gap-2">
            <div className="relative flex select-none items-center justify-center">
              <Image
                width={30}
                height={30}
                alt="user avatar"
                className="rounded-full border border-[#E0E7EB] mr-1 h-9 w-9 mobile:mr-2 mobile:h-[30px] mobile:w-[30px] mobile:min-w-[30px] mobile:max-w-[30px]"
                src={session?.user?.image || "https://via.placeholder.com/30"}
                draggable="false"
              />
            </div>
            <Menu size={20} />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="!p-0 flex flex-col h-full">
        <div className="flex-shrink-0">
          <div className="w-max px-5 py-4">
            <Logo />
          </div>

          {session?.user && (
            <div className="w-full select-none p-5 pt-0">
              <div className="flex w-full items-center justify-start">
                <Image
                  width={60}
                  height={60}
                  alt="user avatar"
                  className="rounded-full border border-[#E0E7EB] mr-3 h-[60px] w-[60px]"
                  src={session.user.image || "https://via.placeholder.com/60"}
                  draggable="false"
                />
                <div className="w-max cursor-pointer flex-col items-start justify-center">
                  <p className="line-clamp-1 break-all text-left font-bold text-grey-800">
                    {session.user.name}
                  </p>
                  <p className="line-clamp-1 break-all text-left text-sm text-grey-800">
                    {session.user.email}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex w-full items-center gap-2">
                <Button
                  variant="outline"
                  className="w-1/2 !px-2 !text-sm mobile:!px-4 mobile:!text-base"
                >
                  <Wallet className="h-5 w-5 mr-2" />
                  Wallet Address
                </Button>
                <Button
                  variant="outline"
                  className="w-1/2 !px-2 !text-sm mobile:!px-4 mobile:!text-base"
                >
                  <Coins className="h-5 w-5 mr-2" />
                  Crowdfund Link
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-3 p-5 pb-3 pt-0 border-b border-b-grey-100">
            <Button className="w-full justify-center !bg-white !text-blue-500 border border-blue-500 hover:!bg-blue-50">
              <Wallet className="h-5 w-5 mr-2 text-blue-500" />
              Connect Wallet
            </Button>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="space-y-3 border-b border-b-grey-100 px-5 py-6">
            <p className="text-xs font-bold text-gray-500">Products</p>
            <div className="space-y-2">
              <OptionItem
                icon={<Wallet className="h-5 w-5" />}
                title="Hyperlink Wallet"
                description="The world's simplest wallet"
              />
              <OptionItem
                icon={<Coins className="h-5 w-5" />}
                title="Hyperlink Pro"
                description="Send digital assets at scale, even to non-crypto users"
              />
              <OptionItem
                icon={<PlugZap className="h-5 w-5" />}
                title="Hyperlink Wallet Adapter"
                description="Making blockchain apps consumer-ready"
              />
            </div>
          </div>

          <SimpleOption title="API & Docs" />
          <SimpleOption title="FAQ" />

          <div className="space-y-3 px-5 py-6">
            <p className="text-xs font-bold text-gray-500">Company</p>
            <div className="space-y-2">
              <OptionItem
                icon={<Briefcase className="h-5 w-5" />}
                title="Career"
              />
              <OptionItem
                icon={<Newspaper className="h-5 w-5" />}
                title="Blog"
              />
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 mt-auto mb-4">
          <SignOut />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function OptionItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="group relative flex cursor-pointer select-none items-start space-x-2 rounded-lg bg-gray-50 px-5 py-3 pr-12 text-gray-700 transition-colors duration-150 ease-linear hover:bg-blue-50 hover:text-blue-500">
      {icon}
      <div className="space-y-[2px]">
        <p className="font-medium">{title}</p>
        {description && (
          <p className="text-xs text-gray-500 group-hover:text-blue-500">
            {description}
          </p>
        )}
      </div>
      <ArrowRight className="absolute right-5 top-[50%] h-5 w-5 translate-y-[-50%]" />
    </div>
  );
}

function SimpleOption({ title }: { title: string }) {
  return (
    <div className="flex cursor-pointer items-center justify-between px-5 py-6 font-medium text-gray-700 hover:font-bold border-b border-b-grey-100">
      <div className="text-base">{title}</div>
      <ArrowRight className="h-5 w-5" />
    </div>
  );
}
