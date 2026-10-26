// Edit these arrays to add tracks and artists to the archive.
const artists = [
  {
    id: "dj-alyx",
    name: "DJ ALYX",
    image: "assets/dj-alyx.jpg",
    imageAlt: "DJ ALYX portrait",
    bio: {
      en: "DJ ALYX is a Brazilian DJ and producer based in Londrina, Paraná.",
      pt: "DJ ALYX é um DJ e produtor brasileiro que reside em Londrina, Paraná."
    },
    links: [
      { type: "bandcamp", label: "Bandcamp", url: "https://djalyx.bandcamp.com/" },
      { type: "soundcloud", label: "SoundCloud", url: "https://soundcloud.com/xx_alyx_xx" },
      { type: "instagram", label: "Instagram", url: "https://www.instagram.com/alyx___________/" }
    ]
  },
  {
    id: "rrose",
    name: "Rrose",
    image: "assets/rrose.jpg",
    imageAlt: "Rrose performing at Dekmantel Festival",
    bio: {
      en: "Rrose is the pseudonym of Seth Horvitz, a techno artist from the United States based in London.",
      pt: "Rrose é o pseudônimo de Seth Horvitz, artista de techno dos Estados Unidos residente em Londres."
    },
    links: [
      { type: "website", label: "Website", url: "https://rrose.ro/" },
      { type: "bandcamp", label: "Bandcamp", url: "https://rrose.bandcamp.com/" },
      { type: "soundcloud", label: "SoundCloud", url: "https://soundcloud.com/rrose1921" },
      { type: "instagram", label: "Instagram", url: "https://www.instagram.com/rrose1921" }
    ]
  },
  {
    id: "fluid",
    name: "FLUID",
    image: "assets/fluid.jpg",
    imageAlt: "FLUID artist portrait",
    bio: {
      en: "FLUID is an electronic music producer from Poland.",
      pt: "FLUID é um produtor de música eletrônica da Polônia."
    },
    links: [
      { type: "bandcamp", label: "Bandcamp", url: "https://itsfluidmusic.bandcamp.com/music" },
      { type: "soundcloud", label: "SoundCloud", url: "https://soundcloud.com/itsfluid" },
      { type: "instagram", label: "Instagram", url: "https://www.instagram.com/fluid.m4a/" }
    ]
  },
  {
    id: "synova",
    name: "Synova",
    image: "assets/synova.jpg",
    imageAlt: "Synova portrait",
    bio: {
      en: "Synova is an electronic music artist from Los Angeles. The artist describes the project as DIY-EDM.",
      pt: "Synova é um artista de música eletrônica de Los Angeles. O projeto é descrito pelo artista como DIY-EDM ('EDM-faça você mesmo')."
    },
    links: [
      { type: "bandcamp", label: "Bandcamp", url: "https://synovamusic.bandcamp.com/" },
      { type: "soundcloud", label: "SoundCloud", url: "https://soundcloud.com/synovamusic" },
      { type: "instagram", label: "Instagram", url: "https://www.instagram.com/synovamusic" }
    ]
  },
  {
    id: "chris-zabriskie",
    name: "Chris Zabriskie",
    image: "assets/chris-zabriskie.jpg",
    imageAlt: "Chris Zabriskie",
    bio: {
      en: "Chris Zabriskie is an American composer, musician and filmmaker known for his minimalist electronic soundscapes and instrumental ambient music.",
      pt: "Chris Zabriskie é um compositor, músico e cineasta americano conhecido por suas paisagens sonoras minimalistas, eletrônicas e de música instrumental ambiente."
    },
    links: [
      { type: "website", label: "Website", url: "https://chriszabriskie.com/" },
      { type: "bandcamp", label: "Bandcamp", url: "https://chriszabriskie.bandcamp.com/" }
    ]
  },
  {
    id: "yabiru",
    name: "Yabiru",
    image: "assets/yabiru.jpeg",
    imageAlt: "Yabiru",
    bio: {
      en: "Yabiru is a DJ and producer based in São Paulo, Brazil, focused on genres such as house, garage and bass music.",
      pt: "Yabiru é um DJ e produtor residente de São Paulo, focado em gêneros como house, garage e bass music."
    },
    links: [
      { type: "bandcamp", label: "Bandcamp", url: "https://yabiru.bandcamp.com/" },
      { type: "soundcloud", label: "SoundCloud", url: "https://soundcloud.com/yabiru" },
      { type: "instagram", label: "Instagram", url: "https://www.instagram.com/_yabiru/" }
    ]
  }
];

const tracks = [
  {
    id: "dj-alyx-esta-vivo",
    title: "DJ ALYX ESTÁ VIVO ELE ESTÁ VIVO (E DETEM O PODER aparentemente)",
    artistId: "dj-alyx",
    collective: "NAÇÃOREBOLATION69",
    collectiveUrl: "https://soundcloud.com/rebolation",
    license: "CC BY-NC-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    url: "https://soundcloud.com/rebolation/alyx",
    embed: { provider: "soundcloud" },
    cover: "https://i1.sndcdn.com/artworks-CfhduyZlpjAVc832-iPKJtw-original.jpg",
    coverAlt: "DJ ALYX release cover art from SoundCloud",
    note: { en: "Release artwork from SoundCloud.", pt: "Arte do lançamento via SoundCloud." }
  },
  {
    id: "synova-heal-again",
    title: "Heal Again",
    artistId: "synova",
    album: "D.I.Y.E.D.M",
    albumUrl: "https://synovamusic.bandcamp.com/album/d-i-y-e-d-m",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    url: "https://synovamusic.bandcamp.com/track/heal-again-3",
    embed: { provider: "bandcamp", trackId: "3949445678" },
    cover: "https://f4.bcbits.com/img/a1128829024_0.jpg",
    coverAlt: "D.I.Y.E.D.M album art, via Bandcamp",
    note: { en: "Release artwork from Bandcamp.", pt: "Arte do lançamento via Bandcamp." }
  },
  {
    id: "fluid-nasty",
    title: "NASTY",
    artistId: "fluid",
    album: "",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    url: "https://itsfluidmusic.bandcamp.com/track/nasty",
    embed: { provider: "bandcamp", trackId: "85115493" },
    cover: "https://f4.bcbits.com/img/a1841539194_0.avif",
    coverAlt: "NASTY cover art, via Bandcamp",
    note: { en: "Release artwork from Bandcamp.", pt: "Arte do lançamento via Bandcamp." },
    trackNote: {
      en: "Remix of Nasty by Ayesha Erotica",
      pt: "Remix de Nasty por Ayesha Erotica"
    }
  },
  {
    id: "rrose-triplicate",
    title: "Triplicate",
    artistId: "rrose",
    album: "2 or 3 Drops of Height Have Nothing to do With Savagery",
    albumUrl: "https://rrose.bandcamp.com/album/2-or-3-drops-of-height-have-nothing-to-do-with-savagery",
    label: "T4T LUV NRG",
    labelUrl: "https://t4tluvnrg.bandcamp.com/",
    license: "CC BY-NC 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    url: "https://rrose.bandcamp.com/track/triplicate",
    embed: {
      provider: "bandcamp",
      albumId: "1244851672",
      trackId: "4155416088",
      albumLink: "https://eaux.ro/album/2-or-3-drops-of-height-have-nothing-to-do-with-savagery"
    },
    cover: "https://f4.bcbits.com/img/a1942501855_0.jpg",
    coverAlt: "Triplicate release artwork, via Bandcamp",
    note: { en: "Release artwork from Bandcamp.", pt: "Arte do lançamento via Bandcamp." }
  },
  {
    id: "chris-zabriskie-i-fuck-you-not",
    title: "I Fuck You Not",
    artistId: "chris-zabriskie",
    album: "Mayor Feedback",
    albumUrl: "https://chriszabriskie.bandcamp.com/album/mayor-feedback",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    url: "https://chriszabriskie.bandcamp.com/track/i-fuck-you-not",
    embed: {
      provider: "bandcamp",
      albumId: "1884538358",
      trackId: "2671698159"
    },
    cover: "https://f4.bcbits.com/img/a3689933104_0.jpg",
    coverAlt: "Mayor Feedback release artwork, via Bandcamp",
    note: { en: "Release artwork from Bandcamp.", pt: "Arte do lançamento via Bandcamp." }
  },
  {
    id: "yabiru-conversa-de-bebado",
    title: "Conversa de Bêbado",
    artistId: "yabiru",
    album: "Ecos do Caminho EP",
    albumUrl: "https://casacaos.bandcamp.com/album/ecos-do-caminho-ep",
    label: "Casa Caos",
    labelUrl: "https://casacaos.bandcamp.com/",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    url: "https://casacaos.bandcamp.com/track/yabiru-conversa-de-b-bado-2",
    embed: {
      provider: "bandcamp",
      albumId: "3444223695",
      trackId: "1787791081"
    },
    cover: "https://f4.bcbits.com/img/a4086419109_0.jpg",
    coverAlt: "Ecos do Caminho EP cover art, via Bandcamp",
    note: { en: "Release artwork from Bandcamp.", pt: "Arte do lançamento via Bandcamp." }
  }
];

const copy = {
  en: {
    gallery: "Track Archive",
    navGallery: "Tracks", navArchive: "Archive", navArtists: "Artists", navTracklist: "Tracklist",
    navAbout: "About", navContact: "Author", navLicense: "License",
    tracks: "tracks", back: "← All tracks", title: "Title", artist: "Artist", album: "Album",
    collective: "Collective", label: "Label", license: "License", listen: "Listen / Buy", note: "Note",
    artistTracks: "Tracks featuring this artist",
    artistPage: "Artist",
    trackPage: "Track",
    about: "About",
    aboutText: "An underground electronic DJ mix including only tracks released under Creative Commons licenses. Each entry gathers the artist, release details, a link to listen, and the track's license.",
    contact: "Author",
    contactText: "Underletrônico is a project by Gustavo Capellari, also known as boinguxa.",
    instagram: "Instagram", soundcloud: "SoundCloud",
    contactInstagramUrl: "https://www.instagram.com/boinguxa",
    contactSoundCloudUrl: "https://soundcloud.com/boinguxa",
    licenseText: "The Underletrônico mix by boinguxa is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license. You may share and adapt it noncommercially with attribution, and adaptations must use the same license. All tracks are under compatible licenses.",
    licenseLink: "Read the CC BY-NC-SA 4.0 license ↗",
    tracklist: "Tracklist", tracklistText: "Coming soon...",
    notFound: "That track or artist could not be found.", home: "Browse the track archive"
  },
  pt: {
    gallery: "Arquivo de Faixas",
    navGallery: "Faixas", navArchive: "Arquivo", navArtists: "Artistas", navTracklist: "Lista de Faixas",
    navAbout: "Sobre", navContact: "Autor", navLicense: "Licença",
    tracks: "faixas", back: "← Todas as faixas", title: "Título", artist: "Artista", album: "Álbum",
    collective: "Coletivo", label: "Selo", license: "Licença", listen: "Ouvir / Comprar", note: "Observação",
    artistTracks: "Faixas com este artista",
    artistPage: "Artista",
    trackPage: "Faixa",
    about: "Sobre",
    aboutText: "Um DJ set de música eletrônica e underground, apenas com faixas disponibilizadas sob licenças Creative Commons. O site apresenta um arquivo das faixas usadas na curadoria do set. Cada entrada reúne artista, informações do lançamento, link para ouvir e a licença da faixa.",
    contact: "Autor",
    contactText: "Underletrônico é um projeto por Gustavo Capellari, também conhecido como boinguxa.",
    instagram: "Instagram", soundcloud: "SoundCloud",
    contactInstagramUrl: "https://www.instagram.com/boinguxa",
    contactSoundCloudUrl: "https://soundcloud.com/boinguxa",
    licenseText: "O mix Underletrônico de boinguxa está licenciado sob a licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional. Você pode compartilhar e adaptar para fins não comerciais com atribuição, e as adaptações devem usar a mesma licença. Todas as faixas utilizadas possuem licenças compatíveis.",
    licenseLink: "Leia a licença CC BY-NC-SA 4.0 ↗",
    tracklist: "Lista de Faixas", tracklistText: "Em breve...",
    notFound: "Não foi possível encontrar essa faixa ou artista.", home: "Explorar o arquivo de faixas"
  }
};

const params = new URLSearchParams(window.location.search);
const lang = params.get("lang") === "pt" ? "pt" : "en";
const text = copy[lang];
const trackId = params.get("track");
const page = params.get("page");
document.documentElement.lang = lang;
// Discourage casual image saving; images remain accessible through browser tools and network requests.
document.addEventListener("contextmenu", event => {
  if (event.target instanceof HTMLImageElement) event.preventDefault();
}, true);
document.addEventListener("dragstart", event => {
  if (event.target instanceof HTMLImageElement) event.preventDefault();
}, true);
const pageLabels = lang === "pt"
  ? { tracks: text.gallery, artists: text.navArtists, artist: "Artista", about: text.about, contact: text.contact, license: text.license, tracklist: text.tracklist, track: "Faixa" }
  : { tracks: text.gallery, artists: text.navArtists, artist: "Artist", about: text.about, contact: text.contact, license: text.license, tracklist: text.tracklist, track: "Track" };
const pageTitle = trackId ? pageLabels.track : (page ? pageLabels[page] : "");
document.title = pageTitle ? `Underletrônico | ${pageTitle}` : "Underletrônico";
document.querySelectorAll(".language-switch a").forEach(link => {
  const nextParams = new URLSearchParams(params);
  nextParams.set("lang", link.getAttribute("lang"));
  link.href = `?${nextParams.toString()}`;
  if (link.getAttribute("lang") === lang) link.setAttribute("aria-current", "true");
});

const app = document.querySelector("#app");
const navLinks = [
  [".nav-tracks", text.navGallery, null],
  [".nav-artists", text.navArtists, "artists"],
  [".nav-about", text.navAbout, "about"],
  [".nav-contact", text.navContact, "contact"],
  [".nav-license", text.navLicense, "license"]
];
navLinks.forEach(([selector, label, route]) => {
  const link = document.querySelector(selector);
  const navParams = new URLSearchParams();
  if (route && route !== "archive") navParams.set("page", route);
  navParams.set("lang", lang);
  link.textContent = label;
  link.href = `?${navParams.toString()}`;
  const isActive = route === null ? (!page || page === "tracklist" || page === "artist" || Boolean(trackId)) : page === route;
  if (isActive) link.setAttribute("aria-current", "page");
  else link.removeAttribute("aria-current");
});
document.querySelector(".wordmark").href = `?lang=${lang}`;
document.querySelector(".footer-license").href = lang === "pt"
  ? "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br"
  : "https://creativecommons.org/licenses/by-nc-sa/4.0/";

function coverMarkup(item) {
  const content = item.cover
    ? `<img src="${item.cover}" alt="${item.coverAlt}" loading="lazy" draggable="false">`
    : `<span class="cover-placeholder">${item.title}</span>`;
  return `<div class="cover" aria-label="${item.cover ? item.coverAlt : item.note?.[lang] ?? item.name}">${content}</div>`;
}

function platformIcon(type) {
  const icons = {
    website: "assets/icon-website.svg",
    bandcamp: "assets/icon-bandcamp.svg",
    soundcloud: "assets/icon-soundcloud.svg",
    instagram: "assets/icon-instagram.svg"
  };
  const path = icons[type];
  return path ? `<img src="${path}" alt="" aria-hidden="true" loading="lazy">` : "";
}

function playerMarkup(track) {
  if (track.embed.provider === "soundcloud") {
    const options = new URLSearchParams({ url: track.url, color: "#6eb7ff", auto_play: "false", hide_related: "true", show_comments: "false", show_user: "true", show_reposts: "false", show_artwork: "false", visual: "false" });
    const src = `https://w.soundcloud.com/player/?${options.toString()}`;
    return `<div class="track-player soundcloud-player"><iframe title="${track.title}" src="${src}" height="166" loading="lazy" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  }
  if (track.embed.provider === "bandcamp" && track.embed.albumId && track.embed.trackId) {
    const src = `https://bandcamp.com/EmbeddedPlayer/album=${encodeURIComponent(track.embed.albumId)}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/track=${encodeURIComponent(track.embed.trackId)}/transparent=true/`;
    return `<div class="track-player bandcamp-player bandcamp-player-light"><iframe title="${track.title}" src="${src}" height="120" loading="lazy" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  }
  if (track.embed.provider === "bandcamp" && track.embed.trackId) {
    const playerOptions = "size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/";
    const src = `https://bandcamp.com/EmbeddedPlayer/track=${encodeURIComponent(track.embed.trackId)}/${playerOptions}`;
    return `<div class="track-player bandcamp-player bandcamp-player-light"><iframe title="${track.title}" src="${src}" height="120" loading="lazy" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  }
  return "";
}

function trackSectionNav(activePage) {
  const archiveActive = activePage === "archive";
  const tracklistActive = activePage === "tracklist";
  return `<nav class="track-section-nav" aria-label="${text.navGallery}">
    <a href="?lang=${lang}"${archiveActive ? ' aria-current="page"' : ""}>${text.gallery}</a>
    <a href="?page=tracklist&lang=${lang}"${tracklistActive ? ' aria-current="page"' : ""}>${text.navTracklist}</a>
  </nav>`;
}

function showGallery() {
  const orderedTracks = [...tracks].sort((a, b) => a.title.localeCompare(b.title, lang, { sensitivity: "base" }));
  app.innerHTML = `
    ${trackSectionNav("archive")}
    <section class="track-grid" aria-label="${text.gallery}">
      ${orderedTracks.map(track => `
        <a class="track-card" href="?track=${encodeURIComponent(track.id)}&lang=${lang}">
          ${coverMarkup(track)}
          <div class="card-copy"><h2>${track.title}</h2><p>${artists.find(artist => artist.id === track.artistId)?.name ?? ""}</p></div>
        </a>`).join("")}
    </section>`;
}

function localizedLicenseUrl(url) {
  if (!url || lang !== "pt" || !url.startsWith("https://creativecommons.org/licenses/")) return url;
  return `${url.replace(/\/(?:deed(?:\.[a-z-]+)?)?\/?$/, "")}/deed.pt-br`;
}

function trackLink(name, url) {
  return url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>` : name;
}

function listenLinkMarkup(track) {
  if (!track.url) return "";
  const provider = track.url.includes("bandcamp.com") ? "bandcamp" : track.url.includes("spotify.com") ? "spotify" : "soundcloud";
  const icon = platformIcon(provider);
  return `<a class="listen-link" href="${track.url}" target="_blank" rel="noopener noreferrer">${icon}<span>${text.listen}</span></a>`;
}

function showTrack(track) {
  const artist = artists.find(entry => entry.id === track.artistId);
  const facts = [
    [text.title, `<span class="track-title-value">${track.title}</span>`],
    [text.artist, artist ? `<a href="?page=artist&artist=${artist.id}&lang=${lang}">${artist.name}</a>` : ""],
    [text.album, trackLink(track.album, track.albumUrl)],
    [text.collective, trackLink(track.collective, track.collectiveUrl)],
    [text.label, trackLink(track.label, track.labelUrl)],
    [text.note, track.trackNote?.[lang] ?? ""],
    [text.license, track.license ? `<span class="license-listen-value"><a href="${localizedLicenseUrl(track.licenseUrl)}" target="_blank" rel="noopener noreferrer">${track.license}</a>${track.url ? `<span class="metadata-divider" aria-hidden="true"></span>${listenLinkMarkup(track)}` : ""}</span>` : listenLinkMarkup(track)]
  ].filter(([, value]) => value);
  app.innerHTML = `
    <a class="back-link" href="?lang=${lang}">${text.back}</a>
    <article class="detail">
      <div class="detail-cover">${coverMarkup(track)}</div>
      <div class="detail-copy"><p class="eyebrow">${pageLabels.track}</p>
        <dl class="track-facts">${facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
        ${playerMarkup(track)}</div>
    </article>`;
}

function showArtists() {
  const orderedArtists = [...artists].sort((a, b) => a.name.localeCompare(b.name, lang, { sensitivity: "base" }));
  app.innerHTML = `
    <p class="eyebrow">${pageLabels.artists}</p>
    <section class="artist-grid" aria-label="${text.navArtists}">
      ${orderedArtists.map(artist => `<a class="artist-card" href="?page=artist&artist=${artist.id}&lang=${lang}"><img class="artist-card-image" src="${artist.image}" alt="${artist.imageAlt}" loading="lazy" draggable="false"><div class="card-copy"><h2>${artist.name}</h2></div></a>`).join("")}
    </section>`;
}

function showArtist(artist) {
  const links = artist.links.map(link => `<a class="artist-social" href="${link.url}" target="_blank" rel="noopener noreferrer">${platformIcon(link.type)}<span>${link.label}</span></a>`).join("");
  const artistTracks = tracks.filter(track => track.artistId === artist.id).sort((a, b) => a.title.localeCompare(b.title, lang, { sensitivity: "base" }));
  const discography = artistTracks.length ? `<section class="artist-discography"><h2>${text.artistTracks}</h2><ul>${artistTracks.map(track => `<li><a href="?track=${encodeURIComponent(track.id)}&lang=${lang}">${track.title}</a></li>`).join("")}</ul></section>` : "";
  app.innerHTML = `<a class="back-link" href="?page=artists&lang=${lang}">${text.navArtists}</a><article class="artist-profile"><img class="artist-profile-image" src="${artist.image}" alt="${artist.imageAlt}" draggable="false"><div><p class="eyebrow">${pageLabels.artist}</p><p>${artist.bio[lang]}</p><nav class="artist-socials" aria-label="${artist.name}">${links}</nav>${discography}</div></article>`;
}

function showTextPage(title, body) {
  const contactLinks = title === text.contact ? `<nav class="contact-links" aria-label="${text.contact}"><a href="${text.contactInstagramUrl}" target="_blank" rel="noopener noreferrer"><img src="assets/icon-instagram.svg" alt="" aria-hidden="true" draggable="false">${text.instagram}</a><a href="${text.contactSoundCloudUrl}" target="_blank" rel="noopener noreferrer"><img src="assets/icon-soundcloud.svg" alt="" aria-hidden="true" draggable="false">${text.soundcloud}</a></nav>` : "";
  const licenseLink = title === text.license ? `<p><a href="${localizedLicenseUrl("https://creativecommons.org/licenses/by-nc-sa/4.0/")}" target="_blank" rel="noopener noreferrer">${text.licenseLink}</a></p>` : "";
  const isTracklist = title === text.tracklist;
  const sectionHeading = isTracklist ? "" : title;
  app.innerHTML = `<section class="text-page">${isTracklist ? trackSectionNav("tracklist") : ""}${sectionHeading ? `<p class="eyebrow">${sectionHeading}</p>` : ""}<p>${body}</p>${contactLinks}${licenseLink}</section>`;
}

if (trackId) {
  const selectedTrack = tracks.find(track => track.id === trackId);
  if (selectedTrack) showTrack(selectedTrack);
  else showTextPage(text.notFound, `<a href="?lang=${lang}">${text.home}</a>`);
} else if (page === "artists") {
  showArtists();
} else if (page === "artist") {
  const artist = artists.find(entry => entry.id === params.get("artist"));
  if (artist) showArtist(artist);
  else showTextPage(text.notFound, `<a href="?page=artists&lang=${lang}">${text.navArtists}</a>`);
} else if (page === "about") {
  showTextPage(text.about, text.aboutText);
} else if (page === "contact") {
  showTextPage(text.contact, text.contactText);
} else if (page === "license") {
  showTextPage(text.license, text.licenseText);
} else if (page === "tracklist") {
  showTextPage(text.tracklist, text.tracklistText);
} else {
  showGallery();
}
