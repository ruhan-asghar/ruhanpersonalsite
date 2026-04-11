import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = "https://ruhanpersonalsite.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ruhan Asghar — AI Engineer, CTO & Builder",
    template: "%s | Ruhan Asghar",
  },
  description:
    "I build AI systems that actually ship. 23+ production systems across defense, FinTech, field ops, and SaaS. Co-Founder & CTO at HybridDot. Based in Lahore, managing teams across Dubai and Riyadh.",
  keywords: [
    "Ruhan Asghar",
    "AI Engineer",
    "CTO",
    "HybridDot",
    "Full Stack Developer",
    "Machine Learning",
    "Computer Vision",
    "Next.js",
    "Python",
    "TensorFlow",
    "Drone Swarm",
    "SaaS Builder",
    "Lahore Pakistan",
    "AI Consultant",
    "Production AI Systems",
  ],
  authors: [{ name: "Ruhan Asghar", url: siteUrl }],
  creator: "Ruhan Asghar",
  publisher: "Ruhan Asghar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/img/favicon/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/img/favicon/apple-touch-icon.png",
  },
  manifest: "/img/favicon/manifest.webmanifest",
  openGraph: {
    title: "Ruhan Asghar — AI Engineer, CTO & Builder",
    description:
      "I build AI systems that actually ship. 23+ production systems across defense, FinTech, field ops, and SaaS.",
    url: siteUrl,
    siteName: "Ruhan Asghar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 675,
        alt: "Ruhan Asghar — AI Engineer, CTO & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruhan Asghar — AI Engineer, CTO & Builder",
    description:
      "I build AI systems that actually ship. 23+ production systems across defense, FinTech, field ops, and SaaS.",
    images: ["/images/og-image.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruhan Asghar",
  url: siteUrl,
  jobTitle: "Co-Founder, Director & CTO",
  worksFor: {
    "@type": "Organization",
    name: "HybridDot",
  },
  description:
    "AI Engineer and CTO who builds production AI systems. 23+ systems shipped across defense, FinTech, field operations, and SaaS.",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Full Stack Development",
    "Python",
    "TypeScript",
    "Next.js",
    "TensorFlow",
    "Drone Technology",
    "SaaS Development",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Lahore University of Management Sciences (LUMS)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "FAST National University (NUCES)",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/ruhan-asghar",
    "https://www.linkedin.com/in/ruhan-asghar/",
    "https://www.facebook.com/ruhan.asghar.3/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Browser Theme Color */}
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#EEEAE8"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0f0f0f"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Template Styles */}
        <link rel="stylesheet" type="text/css" href="/css/loader.css" />
        <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Custom Cursor */}
        <div id="mxd-cursor" className="mxd-cursor">
          <div id="mxd-cursor__dot" className="mxd-cursor__dot"></div>
          <p id="mxd-cursor__text" className="mxd-cursor__text"></p>
          <div id="mxd-cursor__image" className="mxd-cursor__image"></div>
        </div>

        {/* Template Scripts */}
        <Script src="/js/libs.min.js" strategy="beforeInteractive" />
        <Script src="/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
