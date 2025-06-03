import FilterNav from "@/components/FilterNav";
import Team from "@/components/Team";
import ActiveMemberProvider from "@/contexts/ActiveMember";
import FilterProvider from "@/contexts/FilterProvider";
import { View } from "react-native";

export default function Home() {

  return (
    <FilterProvider>
      <ActiveMemberProvider>
        <View className="flex flex-col gap-4 sm:flex-row mt-16 px-5">
          <FilterNav />
          <Team />
        </View>
      </ActiveMemberProvider>
    </FilterProvider>
  );
}