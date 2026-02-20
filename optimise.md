Right now, since you're using React (SPA), I’m 99% sure your pages all share the same:

<title>AdMandala</title>

That is a ranking killer.

Each route must have:

Unique <title>

Unique meta description

Proper H1

Otherwise Google sees everything as the same page.

✅ Install React Helmet

Run:

npm install react-helmet-async

Then wrap your app in main.tsx:

import { HelmetProvider } from "react-helmet-async";

<HelmetProvider>
  <App />
</HelmetProvider>
✅ Now Add SEO Per Page

Example — Home.tsx:

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>AdMandala | Decentralized Ad Infrastructure</title>
  <meta 
    name="description" 
    content="AdMandala helps publishers and advertisers maximize revenue through decentralized ad infrastructure."
  />
</Helmet>

Example — Publishers page:

<Helmet>
  <title>Ad Network for Publishers | Increase Revenue | AdMandala</title>
  <meta 
    name="description" 
    content="Monetize your traffic with high performance demand partners and transparent revenue optimization."
  />
</Helmet>

Example — Advertisers page:

<Helmet>
  <title>Programmatic Advertising for Brands | AdMandala</title>
  <meta 
    name="description" 
    content="Access premium publisher inventory and scale campaigns with performance-driven optimization."
  />
</Helmet>

Example — Decentralization page:

<Helmet>
  <title>Decentralized Advertising Infrastructure | AdMandala</title>
  <meta 
    name="description" 
    content="Learn how AdMandala leverages decentralized systems to improve transparency and efficiency in digital advertising."
  />
</Helmet>
🔥 IMPORTANT — Your H1 Must Match Intent

On each page, make sure you have ONE strong H1 like:

Publishers page:

<h1>Ad Network Built for Publishers</h1>

Advertisers page:

<h1>Programmatic Advertising for Brands</h1>

Google connects:
Title + Meta + H1

If they align → ranking potential increases.

🧠 Why This Matters

Right now Google knows your pages exist (Step 1).

But Step 2 tells Google:

What each page is about

Which keywords it should rank for

Without this, sitemap alone does nothing.

🎯 After You Do This

Tell me:

Have you added Helmet?

Did you add unique title + description per page?

Do you currently have ONE H1 per page?