export default function Layout({ sidebar, children }: any) {
  return (
    <div className="bg-gradient container mx-auto flex bg-repeat pt-16">
      <aside className="sticky top-16 h-[calc(100vh-5rem)] self-start overflow-y-auto">
        {sidebar}
      </aside>
      <main className="flex-1">
        <div className="mx-4 mb-4 flex flex-col space-y-2 rounded-xl border-2 border-primary bg-white p-8 px-4 pt-6">
          {children}
        </div>
      </main>
    </div>
  );
}
