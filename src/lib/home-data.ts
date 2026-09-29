import type { QA } from "@/components/Faq";

export const features = [
  {
    title: "Snelle en stabiele servers",
    text: "Ervaar 99,9% uptime zonder buffering of onderbrekingen.",
    icon: "⚡",
  },
  {
    title: "Gratis Serverwissel",
    text: "Ontbreekt er een kanaal of content? Vraag een gratis serverwissel aan en wij lossen het snel op.",
    icon: "🔄",
  },
  {
    title: "Multi-Server Technologie",
    text: "Bij problemen met toegang tot content werkt ons Multi-Server systeem je verbinding snel bij.",
    icon: "🛰️",
  },
  {
    title: "Gratis App-activatie",
    text: "Het instellen is zeer eenvoudig: abonneer je en wij activeren je app zonder extra kosten.",
    icon: "📱",
  },
  {
    title: "Gemakkelijk te installeren",
    text: "Verbinden met IPTV is een fluitje van een cent en duurt slechts 15 minuten.",
    icon: "🛠️",
  },
  {
    title: "Probeer voordat je koopt",
    text: "Test onze Multi-Server IPTV oplossing volledig risicoloos en gratis.",
    icon: "✅",
  },
];

export const steps = [
  {
    title: "Plaats uw bestelling",
    text: "Kies het Belgische IPTV-abonnement dat bij jouw kijkstijl past.",
  },
  {
    title: "Maak je account aan",
    text: "Activeer de service binnen enkele minuten – zonder apparatuur en installatie.",
  },
  {
    title: "Geniet van de IPTV-service!",
    text: "Geniet online van televisie in Full HD/4K-kwaliteit.",
  },
];

export const trust = [
  {
    title: "Betrouwbare kwaliteit",
    text: "Een stabiel en snel IPTV-systeem met 4K- en FHD-kanalen voor een ongeëvenaarde kijkervaring.",
    icon: "💎",
  },
  {
    title: "Ononderbroken streaming",
    text: "99,99% serverbeschikbaarheid voor continue toegang tot je favoriete zenders, zonder onderbreking.",
    icon: "📡",
  },
  {
    title: "Regelmatige updates",
    text: "Altijd up-to-date content dankzij gratis dagelijkse updates voor TV en VOD.",
    icon: "🔁",
  },
  {
    title: "Veilige betalingen",
    text: "100% veilige en betrouwbare betaalopties, zodat je zorgeloos van je IPTV-abonnement geniet.",
    icon: "🔒",
  },
];

// Showcase posters. To replace an image, just drop a new file over the
// matching path in /public/images/showcase/films/ or /sport/ (keep the
// NN.webp name), or add more entries here. Any web image format works —
// update the extension in the path if you use .jpg/.png.
export const films = [
  "/images/showcase/films/01.jpg",
  "/images/showcase/films/02.jpg",
  "/images/showcase/films/03.jpg",
  "/images/showcase/films/04.jpg",
  "/images/showcase/films/05.jpg",
];

export const sport = [
  "/images/showcase/sport/01.jpg",
  "/images/showcase/sport/02.jpg",
  "/images/showcase/sport/03.jpg",
  "/images/showcase/sport/04.jpg",
  "/images/showcase/sport/05.jpg",
];

export const categories = [
  { icon: "⚽", title: "Sport", text: "Voetbal, tennis, autosport en meer" },
  { icon: "🎬", title: "Films & Series", text: "90.000+ titels on demand" },
  { icon: "🧒", title: "Kids", text: "Tekenfilms en kinderzenders" },
  { icon: "📰", title: "Nieuws", text: "Belgische & internationale zenders" },
  { icon: "🎭", title: "Documentaires", text: "Natuur, wetenschap, historie" },
  { icon: "🌍", title: "Internationaal", text: "Zenders uit heel de wereld" },
  { icon: "🎵", title: "Muziek", text: "Muziek- en concertzenders" },
  { icon: "🔞", title: "Volwassen +18", text: "Optioneel beschikbaar" },
];

export const comparison = [
  { feature: "Aantal kanalen", iptv: "55.000+", cable: "±100" },
  { feature: "Films & series on demand", iptv: "90.000+", cable: false },
  { feature: "4K / Ultra HD", iptv: true, cable: "Beperkt" },
  { feature: "Kijken op elk apparaat", iptv: true, cable: false },
  { feature: "Langdurig contract", iptv: false, cable: true },
  { feature: "Installatie", iptv: "± 15 min", cable: "Afspraak nodig" },
  { feature: "Prijs per maand", iptv: "vanaf ± €5", cable: "€30–€60" },
  { feature: "Geld-terug-garantie", iptv: true, cable: false },
];

// Generic device categories — no third-party trademarks.
export const apps = [
  "Smart TV", "Smartphones", "Tablets", "Mediaspelers",
  "TV-box & set-top box", "Streaming-sticks", "Laptop & PC", "Webbrowser",
];

// PLACEHOLDER testimonials — replace `quote` and `name` with REAL customer
// feedback before go-live. Do not present invented reviews as genuine.
export const testimonials = [
  { name: "Thomas D.", location: "Antwerpen", quote: "Alles werkt vlot en zonder buffering, zelfs live sport in 4K. Installatie was in enkele minuten geregeld." },
  { name: "Sophie V.", location: "Gent", quote: "Enorm veel zenders en films. De klantenservice via WhatsApp reageert supersnel op elke vraag." },
  { name: "Kevin M.", location: "Brussel", quote: "Al maanden geen enkel probleem. Beeldkwaliteit is top en de prijs is eerlijk. Zeker een aanrader." },
  { name: "Laura P.", location: "Brugge", quote: "Makkelijk te installeren op mijn smart-tv en telefoon. Ik kijk nu overal mijn favoriete programma's." },
  { name: "Nick B.", location: "Rotterdam", quote: "Overgestapt van kabel en geen spijt. Meer keuze, betere kwaliteit en geen jaarcontract." },
  { name: "Fatima E.", location: "Charleroi", quote: "Perfecte service, snelle activatie en de geld-terug-garantie gaf me vertrouwen om te starten." },
];

export const faqs: QA[] = [
  {
    q: "Wat is IPTV?",
    a: "<p>IPTV (Internet Protocol Television) is televisie die via het internet wordt gestreamd in plaats van via kabel of satelliet. Met een Belgische IPTV-abonnement kijk je op je smart-tv, telefoon, tablet, computer of TV-box naar meer dan 55.000 live kanalen en 90.000+ films en series in HD, FHD en 4K.</p>",
  },
  {
    q: "Is een IPTV-abonnement legaal in België en Nederland?",
    a: "<p>IPTV als technologie is volledig legaal — het is simpelweg televisie via internet. De legaliteit hangt af van de content-rechten. Wij raden je aan een dienst te kiezen die de geldende regels respecteert. Neem gerust contact met ons op via WhatsApp als je hier vragen over hebt.</p>",
  },
  {
    q: "Wat heb ik nodig om IPTV te gebruiken?",
    a: "<p>Een compatibel apparaat en een internetverbinding met gemiddelde snelheid. De dienst werkt op vrijwel elk toestel:</p><ul><li>Smart TV's (alle grote merken en modellen)</li><li>Smartphones en tablets</li><li>TV-boxen en set-top boxen</li><li>Streaming-sticks en mediaspelers</li><li>Laptop, computer of webbrowser</li></ul>",
  },
  {
    q: "Werkt Belgische IPTV ook in Nederland?",
    a: "<p>Ja. Onze dienst werkt in heel België én Nederland, en zelfs daarbuiten. Je hebt enkel een internetverbinding nodig. Zowel Belgische en Vlaamse zenders als Nederlandse zenders zijn beschikbaar.</p>",
  },
  {
    q: "Kan ik IPTV gebruiken in steden zoals Brussel, Antwerpen, Gent of Charleroi?",
    a: "<p>Absoluut. Belgische IPTV werkt overal met een internetverbinding — in Brussel, Antwerpen, Gent, Charleroi, Luik, Brugge en elke andere stad of gemeente in België en Nederland.</p>",
  },
  {
    q: "Hoe kan ik betalen?",
    a: "<p>Wij accepteren betalingen via PayPal en VISA/MasterCard creditcards. Alles wordt op een uiterst veilige manier afgehandeld door onze dienstverleners.</p>",
  },
  {
    q: "Kan ik lokale sportevenementen bekijken?",
    a: "<p>Ja. Abonnees kunnen lokale voetbalwedstrijden en sport volgen op een breed aanbod aan nationale en internationale sportkanalen. Lokale en nationale zenders zijn beschikbaar voor live kijken in jouw regio.</p>",
  },
  {
    q: "Waarin verschilt Belgische IPTV van kabeltelevisie?",
    a: "<p>Belgische IPTV werkt via internet, niet via kabel of satelliet. Zo kun je honderden Belgische en Vlaamse zenders in HD/4K-kwaliteit bekijken, zonder extra apparatuur en zonder langdurige contracten.</p>",
  },
  {
    q: "Hoe snel krijg ik toegang na betaling?",
    a: "<p>U krijgt direct toegang na bevestiging van de betaling. De inloggegevens en installatie-instructies worden binnen enkele minuten automatisch naar uw e-mailadres verzonden.</p>",
  },
  {
    q: "Bieden jullie reseller-diensten aan?",
    a: "<p>Ja, neem contact met ons op of stuur een WhatsApp-bericht voor meer informatie en prijzen.</p>",
  },
];
