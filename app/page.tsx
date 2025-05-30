import FilterNav from "@/components/FilterNav";
import Team from "@/components/Team";
import ActiveMemberProvider from "@/contexts/ActiveMember";
import FilterProvider from "@/contexts/FilterProvider";

export default function Home() {

  return (
    <FilterProvider>
      <ActiveMemberProvider>
        <div className="flex flex-col gap-4 sm:flex-row">
          <FilterNav />
          <Team />
        </div>
      </ActiveMemberProvider>
    </FilterProvider>
  );
}