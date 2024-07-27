export default Navbar;

function Navbar() {
  return (
    <>
      <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 rounded-2xl w-11/12 bg-white border border-gray-200 shadow-sm">
        <div className="flex flex-row gap-4 px-10 py-3 text-base font-normal items-center justify-between">
          <div className="text-3xl">Speculo</div>
          <div className="flex flex-row gap-8">
            <div className="self-center cursor-pointer">Contacts</div>
            <div className="self-center cursor-pointer">Sign out</div>
            <div className="bg-amber-900 p-2 rounded-full text-white cursor-pointer">
              Ava
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
