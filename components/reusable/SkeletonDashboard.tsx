import React from "react";
import { Skeleton } from "../ui/skeleton";

export function SkeletonDashboard() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Esqueleto */}
      <div className="lg:w-[15%] p-4 bg-cardColor">
        <Skeleton className="h-10" /> {/* Logo placeholder */}
        <div className="space-y-2 mt-5">
          <Skeleton className="h-8" /> {/* Link placeholder */}
          <Skeleton className="h-8" /> {/* Link placeholder */}
          <Skeleton className="h-8" /> {/* Link placeholder */}
          {/* ... mais links do menu se necessário */}
        </div>
      </div>

      {/* Conteúdo principal Esqueleto */}
      <div className="flex-grow p-4 lg:p-12 space-y-6">
        {/* Cards no topo Esqueleto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Skeleton className="h-40" /> {/* Card de crédito placeholder */}
          <Skeleton className="h-40" /> {/* Carteira placeholder */}
        </div>
        {/* Conteúdo principal - Gráficos Esqueleto */}
        <Skeleton className="h-96" /> {/* Gráfico de barra placeholder */}
        <Skeleton className="h-96" /> {/* Gráfico de rosca placeholder */}
      </div>
    </div>
  );
}
