import NavItems from "./NavItems";

const MobileNavigationFooter = () => {
  return (
    <footer className="fixed bottom-0 h-[72px] left-0 right-0 z-10 bg-black/80 backdrop-blur-xl border-t border-[#2E3030]">
      <nav className="flex justify-around items-center h-full">
        <NavItems/>
      </nav>
    </footer>
  );
};

export default MobileNavigationFooter;
