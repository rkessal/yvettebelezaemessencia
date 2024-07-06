import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="h-full font-raleway bg-beige">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hgn4pnn.css"/>
      </head>
        <body>{children}</body>
        <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
