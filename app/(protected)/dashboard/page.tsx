import { auth } from "@/auth";
import { CreditCards } from "@/components/dashboard/CreditCards";
import { NewCreditCard } from "@/components/dashboard/NewCreditCard";
import { SidebarMobile } from "@/components/dashboard/SidebarMobile";
import { SidebarLinks } from "@/components/reusable/SidebarLinks";
import { getUserByEmail } from "@/data";
import Link from "next/link";

export default async function Dashboard() {
  const userAuth = await auth();
  const user = await getUserByEmail(userAuth?.user?.email ?? "");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="lg:w-[15%] p-4 lg:bg-cardColor">
        <div className="lg:hidden flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold italic">
            Finance
          </Link>
          <SidebarMobile />
        </div>

        <div className="flex flex-col h-full py-5 max-lg:hidden">
          <SidebarLinks />
        </div>
      </div>

      {/* Cards and Main Content */}
      <div className="lg:flex-1 p-4 lg:p-12">
        <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-20">
          {/* Card 1 */}
          <div className="lg:w-[30%]">
            <div className="text-xl font-medium mb-4 flex items-center justify-between w-full">
              <h2>Meus cartões</h2>
              <NewCreditCard user={user} />
            </div>

            <CreditCards />
          </div>

          {/* Card 2 */}
          <div className="lg:flex-1 p-4 rounded-2xl shadow-lg bg-cardColor">
            <p>Card 2 Content</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-4 p-4 rounded-2xl shadow-lg bg-cardColor">
          <p>Main Content</p>
        </div>
      </div>
    </div>
  );
}
