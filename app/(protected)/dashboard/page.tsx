import Loading from "@/app/loading";
import { auth } from "@/auth";
import { CardsTitle } from "@/components/dashboard/CardsTitle";
import { CreditCards } from "@/components/dashboard/CreditCards";
import { NewBalance } from "@/components/dashboard/NewBalance";
import { NewCreditCard } from "@/components/dashboard/NewCreditCard";
import { NewExpense } from "@/components/dashboard/NewExpense";
import { ShowBalance } from "@/components/dashboard/ShowBalance";
import { ShowExpense } from "@/components/dashboard/ShowExpense";
import { SidebarMobile } from "@/components/dashboard/SidebarMobile";
import { SidebarLinks } from "@/components/reusable/SidebarLinks";
import { SkeletonDashboard } from "@/components/reusable/SkeletonDashboard";
import { getUserByEmail } from "@/data";
import { User } from "@/types";
import Link from "next/link";
import { Suspense } from "react";

export default async function Dashboard() {
  const userAuth = await auth();
  const user: User = await getUserByEmail(userAuth?.user?.email ?? "");

  return (
    <Suspense fallback={<SkeletonDashboard />}>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <Suspense fallback={<Loading />}>
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
        </Suspense>

        <div className="lg:flex-1 p-4 lg:p-12 space-y-10">
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10">
            <Suspense fallback={<Loading />}>
              <div className="lg:w-[30%]">
                <div className="text-xl font-medium mb-4 flex items-center justify-between w-full">
                  <h2>Meus cartões</h2>
                  <NewCreditCard user={user} />
                </div>
                <CreditCards />
              </div>
            </Suspense>

            <Suspense fallback={<Loading />}>
              <div className="lg:ml-10 lg:w-72 p-4">
                <div className="mb-4 flex items-start justify-between w-full">
                  <CardsTitle
                    title="Minha Carteira"
                    alt="carteira"
                    img="wallet"
                  />
                  <NewBalance user={user} />
                </div>
                <ShowBalance balance={user?.balance} />
              </div>
              <div></div>
            </Suspense>
          </div>

          {/* Main Content */}
          <div className="border border-borderColor rounded-lg p-4 space-y-4">
            <div className="w-full flex items-center justify-between">
              <CardsTitle
                title="Minhas Despesas"
                alt="despesas"
                img="expense"
              />
              <NewExpense user={user} />
            </div>
            <ShowExpense userId={user?.id} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
