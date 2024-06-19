export default function Layout({ sidebar, children }: any) {
  return (
    <div className="container mx-auto flex pt-16">
      {/* Sidebar */}
      <aside className="sticky top-16 hidden h-[calc(100vh-5rem)] self-start overflow-y-auto xl:w-1/5 2xl:block">
        {sidebar}
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-4 mb-4 flex flex-col space-y-2 rounded-xl border-2 border-primary bg-white p-8 px-4 pt-6">
          {children}
        </div>
      </main>
    </div>
  );
}
