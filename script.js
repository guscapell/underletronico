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
    id: "rrose-triplicate",
    title: "Triplicate",
    artistId: "rrose",
    album: "2 or 3 Drops of Height Have Nothing to do With Savagery",
    albumUrl: "https://rrose.bandcamp.com/album/2-or-3-drops-of-height-have-nothing-to-do-with-savagery",
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
  }
];

const copy = {
  en: {
    gallery: "Track archive",
    navGallery: "Tracks", navArtists: "Artists", navTracklist: "Tracklist",
    navAbout: "About", navContact: "Contact", navLicense: "License",
    footerNote: "Independent music, shared with care.",
    tracks: "tracks", back: "← All tracks", artist: "Artist", album: "Release / album",
    collective: "Collective", license: "License", listen: "Listen / buy",
    artistTracks: "Tracks featuring this artist",
    about: "About",
    aboutText: "An underground electronic DJ mix by boinguxa, only with tracks under Creative Commons licenses. Each entry gathers the artist, release details, a link to listen, and the track's license.",
    contact: "Contact",
    contactText: "For questions, corrections, or music suggestions, contact boinguxa on Instagram or SoundCloud.",
    instagram: "Instagram", soundcloud: "SoundCloud",
    licenseText: "The Underletrônico mix by boinguxa is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license. You may share and adapt it noncommercially with attribution, and adaptations must use the same license. All tracks are under compatible licenses.",
    licenseLink: "Read the CC BY-NC-SA 4.0 license ↗",
    tracklist: "Tracklist", tracklistText: "Under construction",
    notFound: "That track or artist could not be found.", home: "Browse the track archive"
  },
  pt: {
    gallery: "Arquivo de faixas",
    navGallery: "Faixas", navArtists: "Artistas", navTracklist: "Lista de Faixas",
    navAbout: "Sobre", navContact: "Contato", navLicense: "Licença",
    footerNote: "Música independente, compartilhada com cuidado.",
    tracks: "faixas", back: "← Todas as faixas", artist: "Artista", album: "Lançamento / álbum",
    collective: "Coletivo", license: "Licença", listen: "Ouvir / comprar",
    artistTracks: "Faixas com este artista",
    about: "Sobre",
    aboutText: "Um DJ set de música eletrônica e underground feito por boinguxa, apenas com faixas sob licenças Creative Commons. O site apresenta um arquivo das faixas usadas na curadoria do set. Cada entrada reúne artista, informações do lançamento, link para ouvir e a licença da faixa.",
    contact: "Contato",
    contactText: "Para dúvidas, correções ou sugestões musicais, entre em contato com boinguxa pelo Instagram ou pelo SoundCloud.",
    instagram: "Instagram", soundcloud: "SoundCloud",
    licenseText: "O mix Underletrônico de boinguxa está licenciado sob a licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional. Você pode compartilhar e adaptar para fins não comerciais com atribuição, e as adaptações devem usar a mesma licença. Todas as faixas utilizadas possuem licenças compatíveis.",
    licenseLink: "Leia a licença CC BY-NC-SA 4.0 ↗",
    tracklist: "Lista de Faixas", tracklistText: "Em construção",
    notFound: "Não foi possível encontrar essa faixa ou artista.", home: "Explorar o arquivo de faixas"
  }
};

const params = new URLSearchParams(window.location.search);
const lang = params.get("lang") === "pt" ? "pt" : "en";
const text = copy[lang];
const trackId = params.get("track");
const page = params.get("page");
document.documentElement.lang = lang;
const titleLabels = lang === "pt"
  ? { artists: "Artistas", artist: "Artista", about: "Sobre", contact: "Contato", license: "Licença", tracklist: "Lista de Faixas", track: "Faixa" }
  : { artists: "Artists", artist: "Artist", about: "About", contact: "Contact", license: "License", tracklist: "Tracklist", track: "Track" };
const pageTitle = trackId ? titleLabels.track : (page ? titleLabels[page] : "");
document.title = pageTitle ? `Underletrônico | ${pageTitle}` : "Underletrônico";
document.querySelectorAll(".language-switch a").forEach(link => {
  const nextParams = new URLSearchParams(params);
  nextParams.set("lang", link.getAttribute("lang"));
  link.href = `?${nextParams.toString()}`;
  if (link.getAttribute("lang") === lang) link.setAttribute("aria-current", "true");
});

const app = document.querySelector("#app");
const navRoutes = ["", "artists", "tracklist", "about", "contact", "license"];
document.querySelectorAll(".main-nav a").forEach((link, index) => {
  link.textContent = [text.navGallery, text.navArtists, text.navTracklist, text.navAbout, text.navContact, text.navLicense][index];
  const navParams = new URLSearchParams();
  if (navRoutes[index]) navParams.set("page", navRoutes[index]);
  navParams.set("lang", lang);
  link.href = `?${navParams.toString()}`;
});
document.querySelector(".wordmark").href = `?lang=${lang}`;
document.querySelector(".site-footer span:last-child").textContent = text.footerNote;

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
    const options = new URLSearchParams({ url: track.url, color: "#6eb7ff", auto_play: "false", hide_related: "true", show_comments: "false", show_user: "true", show_reposts: "false", visual: "false" });
    const src = `https://w.soundcloud.com/player/?${options.toString()}`;
    return `<div class="track-player"><iframe title="${track.title}" src="${src}" height="166" loading="lazy" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  }
  if (track.embed.provider === "bandcamp" && track.embed.albumId && track.embed.trackId) {
    const src = `https://bandcamp.com/EmbeddedPlayer/album=${encodeURIComponent(track.embed.albumId)}/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/track=${encodeURIComponent(track.embed.trackId)}/transparent=true/`;
    return `<div class="track-player"><iframe title="${track.title}" src="${src}" height="120" loading="lazy" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  }
  if (track.embed.provider === "bandcamp" && track.embed.trackId) {
    const src = `https://bandcamp.com/EmbeddedPlayer/track=${encodeURIComponent(track.embed.trackId)}/size=large/bgcol=20242a/linkcol=6eb7ff/tracklist=false/artwork=small/transparent=true/`;
    return `<div class="track-player"><iframe title="${track.title}" src="${src}" height="120" loading="lazy" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  }
  return "";
}

function showGallery() {
  const orderedTracks = [...tracks].sort((a, b) => a.title.localeCompare(b.title, lang, { sensitivity: "base" }));
  app.innerHTML = `
    <p class="eyebrow">${text.gallery} · ${tracks.length} ${text.tracks}</p>
    <section class="track-grid" aria-label="${text.gallery}">
      ${orderedTracks.map(track => `
        <a class="track-card" href="?track=${encodeURIComponent(track.id)}&lang=${lang}">
          ${coverMarkup(track)}
          <div class="card-copy"><h2>${track.title}</h2><p>${artists.find(artist => artist.id === track.artistId)?.name ?? ""}</p></div>
        </a>`).join("")}
    </section>`;
}

function trackLink(name, url) {
  return url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>` : name;
}

function showTrack(track) {
  const artist = artists.find(entry => entry.id === track.artistId);
  const facts = [
    [text.artist, artist ? `<a href="?page=artist&artist=${artist.id}&lang=${lang}">${artist.name}</a>` : ""],
    [text.album, trackLink(track.album, track.albumUrl)],
    [text.listen, track.url ? trackLink(text.listen, track.url) : ""],
    [text.collective, trackLink(track.collective, track.collectiveUrl)],
    [text.license, track.license ? `<a href="${track.licenseUrl}" target="_blank" rel="noopener noreferrer">${track.license}</a>` : ""]
  ].filter(([, value]) => value);
  app.innerHTML = `
    <a class="back-link" href="?lang=${lang}">${text.back}</a>
    <article class="detail">
      <div class="detail-cover">${coverMarkup(track)}</div>
      <div class="detail-copy"><p class="eyebrow">${text.gallery}</p><h1>${track.title}</h1>
        <dl class="track-facts">${facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
        ${playerMarkup(track)}</div>
    </article>`;
}

function showArtists() {
  const orderedArtists = [...artists].sort((a, b) => a.name.localeCompare(b.name, lang, { sensitivity: "base" }));
  app.innerHTML = `
    <p class="eyebrow">${text.navArtists}</p>
    <section class="artist-grid" aria-label="${text.navArtists}">
      ${orderedArtists.map(artist => `<a class="artist-card" href="?page=artist&artist=${artist.id}&lang=${lang}"><img class="artist-card-image" src="${artist.image}" alt="${artist.imageAlt}" loading="lazy" draggable="false"><div class="card-copy"><h2>${artist.name}</h2></div></a>`).join("")}
    </section>`;
}

function showArtist(artist) {
  const links = artist.links.map(link => `<a class="artist-social" href="${link.url}" target="_blank" rel="noopener noreferrer">${platformIcon(link.type)}<span>${link.label}</span></a>`).join("");
  const artistTracks = tracks.filter(track => track.artistId === artist.id).sort((a, b) => a.title.localeCompare(b.title, lang, { sensitivity: "base" }));
  const discography = artistTracks.length ? `<section class="artist-discography"><h2>${text.artistTracks}</h2><ul>${artistTracks.map(track => `<li><a href="?track=${encodeURIComponent(track.id)}&lang=${lang}">${track.title}</a></li>`).join("")}</ul></section>` : "";
  app.innerHTML = `<a class="back-link" href="?page=artists&lang=${lang}">${text.navArtists}</a><article class="artist-profile"><img class="artist-profile-image" src="${artist.image}" alt="${artist.imageAlt}" draggable="false"><div><p class="eyebrow">${text.navArtists}</p><h1>${artist.name}</h1><p>${artist.bio[lang]}</p><nav class="artist-socials" aria-label="${artist.name}">${links}</nav>${discography}</div></article>`;
}

function showTextPage(title, body) {
  const contactLinks = title === text.contact ? `<nav class="contact-links" aria-label="${text.contact}"><a href="https://www.instagram.com/boinguxa" target="_blank" rel="noopener noreferrer">${text.instagram} ↗</a><a href="https://soundcloud.com/boinguxa" target="_blank" rel="noopener noreferrer">${text.soundcloud} ↗</a></nav>` : "";
  const licenseLink = title === text.license ? `<p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">${text.licenseLink}</a></p>` : "";
  app.innerHTML = `<section class="text-page"><p class="eyebrow">Underletrônico</p><h1>${title}</h1><p>${body}</p>${contactLinks}${licenseLink}</section>`;
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
