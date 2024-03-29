export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-200 min-h-screen">{children}</div>;
}
