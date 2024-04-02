import EditTask from "@/components/EditTask";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="w-full flex justify-between text-center">
      <SideBar />
      <EditTask />
    </main>
  );
}
