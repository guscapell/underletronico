// Track information lives here. Add another object to add a gallery tile and detail page.
const tracks = [
  {
    id: "dj-alyx-esta-vivo",
    title: "DJ ALYX ESTÁ VIVO ELE ESTÁ VIVO (E DETEM O PODER aparentemente)",
    artist: "DJ ALYX",
    artistUrl: "https://soundcloud.com/xx_alyx_xx",
    artistBio: {
      en: "DJ ALYX is a Brazilian DJ and producer based in Londrina, Paraná.",
      pt: "DJ ALYX é um DJ e produtor brasileiro que reside em Londrina, Paraná."
    },
    collective: "NAÇÃOREBOLATION69",
    collectiveUrl: "https://soundcloud.com/rebolation",
    album: "",
    license: "CC BY-NC-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    url: "https://soundcloud.com/rebolation/alyx",
    embed: { provider: "soundcloud" },
    cover: "https://i1.sndcdn.com/artworks-CfhduyZlpjAVc832-iPKJtw-original.jpg",
    coverAlt: "DJ ALYX release cover art from SoundCloud",
    coverText: "",
    note: { en: "Release artwork from SoundCloud.", pt: "Arte do lançamento via SoundCloud." }
  },
  {
    id: "synova-heal-again",
    title: "Heal Again",
    artist: "Synova",
    artistUrl: "https://synovamusic.bandcamp.com/music",
    artistBio: {
      en: "Synova is an electronic music artist from Los Angeles. The artist describes the project as DIY-EDM.",
      pt: "Synova é um artista de música eletrônica de Los Angeles. O projeto é descrito pelo artista como DIY-EDM ('EDM-faça você mesmo')."
    },
    collective: "",
    album: "D.I.Y.E.D.M",
    albumUrl: "https://synovamusic.bandcamp.com/album/d-i-y-e-d-m",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    url: "https://synovamusic.bandcamp.com/track/heal-again-3",
    embed: { provider: "bandcamp", trackId: "3949445678" },
    cover: "https://f4.bcbits.com/img/a1128829024_0.jpg",
    coverAlt: "D.I.Y.E.D.M album art, via Bandcamp",
    coverText: "",
    note: { en: "Release artwork from Bandcamp.", pt: "Arte do lançamento via Bandcamp." }
  }
];

const copy = {
  en: {
    gallery: "Track archive",
    heading: "Tracks that stay with you.",
    navGallery: "Gallery",
    navAbout: "About",
    navContact: "Contact",
    navLicense: "License",
    footerNote: "Independent music, shared with care.",
    intro: "A living collection of tracks, artists and sounds from the mix. Select a cover to explore a track.",
    tracks: "tracks",
    back: "← All tracks",
    artist: "Artist",
    album: "Release / album",
    collective: "Collective",
    license: "License",
    about: "About",
    aboutText: "An independent archive of tracks used in the 'Underletrônico' DJ mix by boinguxa. Each entry gathers the artist, release details, a link to listen, and the track’s license when available.",
    contact: "Contact",
    contactText: "For questions, corrections, or music suggestions, contact boinguxa on Instagram or SoundCloud.",
    instagram: "Instagram",
    soundcloud: "SoundCloud",
    licenseText: "The Underletrônico website and mix by boinguxa are licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license. You may share and adapt them noncommercially with attribution, and adaptations must use the same license.",
    licenseLink: "Read the CC BY-NC-SA 4.0 license ↗",
    notFound: "That track could not be found.",
    home: "Browse the track archive"
  },
  pt: {
    gallery: "Arquivo de faixas",
    heading: "Faixas que ficam com você.",
    navGallery: "Galeria",
    navAbout: "Sobre",
    navContact: "Contato",
    navLicense: "Licença",
    footerNote: "Música independente, compartilhada com cuidado.",
    intro: "Uma coleção viva de faixas, artistas e sons presentes nos mixes. Escolha uma capa para conhecer uma faixa.",
    tracks: "faixas",
    back: "← Todas as faixas",
    artist: "Artista",
    album: "Lançamento / álbum",
    collective: "Coletivo",
    license: "Licença",
    about: "Sobre",
    aboutText: "Um arquivo independente de faixas usadas na curadoria do DJ set 'Underletrônico' por boinguxa. Cada entrada reúne artista, informações do lançamento, link para ouvir e a licença da faixa quando disponível.",
    contact: "Contato",
    contactText: "Para dúvidas, correções ou sugestões musicais, entre em contato com boinguxa pelo Instagram ou pelo SoundCloud.",
    instagram: "Instagram",
    soundcloud: "SoundCloud",
    licenseText: "O site e o mix Underletrônico de boinguxa estão licenciados sob a licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional. Você pode compartilhar e adaptar para fins não comerciais com atribuição, e as adaptações devem usar a mesma licença.",
    licenseLink: "Leia a licença CC BY-NC-SA 4.0 ↗",
    notFound: "Não foi possível encontrar essa faixa.",
    home: "Explorar o arquivo de faixas"
  }
};

const params = new URLSearchParams(window.location.search);
const lang = params.get("lang") === "pt" ? "pt" : "en";
const text = copy[lang];
document.documentElement.lang = lang;
document.title = `Underletrônico — ${lang === "pt" ? "faixas" : "tracks"}`;
document.querySelectorAll(".language-switch a").forEach(link => {
  if (link.getAttribute("lang") === lang) link.setAttribute("aria-current", "true");
});

const app = document.querySelector("#app");
document.querySelectorAll(".main-nav a").forEach((link, index) => {
  link.textContent = [text.navGallery, text.navAbout, text.navContact, text.navLicense][index];
});
document.querySelector(".site-footer span:last-child").textContent = text.footerNote;
const trackId = params.get("track");
const page = params.get("page");

function coverMarkup(track) {
  const content = track.cover
    ? `<img src="${track.cover}" alt="${track.coverAlt}" loading="lazy">`
    : `<span class="cover-placeholder">${track.coverText.replace("\n", "<br>")}</span>`;
  return `<div class="cover" aria-label="${track.cover ? track.coverAlt : track.note[lang]}">${content}</div>`;
}

function playerMarkup(track) {
  let src;
  let height;

  if (track.embed.provider === "soundcloud") {
    const options = new URLSearchParams({
      url: track.url,
      color: "#6eb7ff",
      auto_play: "false",
      hide_related: "true",
      show_comments: "false",
      show_user: "true",
      show_reposts: "false",
      visual: "false"
    });
    src = `https://w.soundcloud.com/player/?${options.toString()}`;
    height = 166;
  } else if (track.embed.provider === "bandcamp") {
    src = `https://bandcamp.com/EmbeddedPlayer/track=${encodeURIComponent(track.embed.trackId)}/size=large/bgcol=20231f/linkcol=6eb7ff/tracklist=false/artwork=small/transparent=true/`;
    height = 120;
  } else {
    return "";
  }

  return `<div class="track-player"><iframe title="${track.artist} — ${track.title}" src="${src}" height="${height}" loading="lazy" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
}

function showGallery() {
  app.innerHTML = `
    <p class="eyebrow">${text.gallery} · ${tracks.length} ${text.tracks}</p>
    <h1>${text.heading}</h1>
    <p class="intro">${text.intro}</p>
    <section class="track-grid" aria-label="${text.gallery}">
      ${tracks.map(track => `
        <a class="track-card" href="?track=${encodeURIComponent(track.id)}&lang=${lang}">
          ${coverMarkup(track)}
          <div class="card-copy"><h2>${track.title}</h2><p>${track.artist}</p></div>
        </a>`).join("")}
    </section>`;
}

function trackLink(name, url) {
  return url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>` : name;
}

function showTrack(track) {
  const facts = [
    [text.artist, trackLink(track.artist, track.artistUrl)],
    [text.album, trackLink(track.album, track.albumUrl)],
    [text.collective, trackLink(track.collective, track.collectiveUrl)],
    [text.license, `<a href="${track.licenseUrl}" target="_blank" rel="noopener noreferrer">${track.license}</a>`]
  ].filter(([, value]) => value);
  app.innerHTML = `
    <a class="back-link" href="?lang=${lang}">${text.back}</a>
    <article class="detail">
      <div class="detail-cover">${coverMarkup(track)}</div>
      <div class="detail-copy">
        <p class="eyebrow">${text.gallery}</p>
        <h1>${track.title}</h1>
        <p class="artist">${trackLink(track.artist, track.artistUrl)}</p>
        <p>${track.artistBio[lang]}</p>
        <dl class="track-facts">${facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
        ${playerMarkup(track)}
      </div>
    </article>`;
}

function showTextPage(title, body) {
  const contactLinks = title === text.contact
    ? `<nav class="contact-links" aria-label="${text.contact}"><a href="https://www.instagram.com/boinguxa" target="_blank" rel="noopener noreferrer">${text.instagram} ↗</a><a href="https://soundcloud.com/boinguxa" target="_blank" rel="noopener noreferrer">${text.soundcloud} ↗</a></nav>`
    : "";
  const licenseLink = title === text.license
    ? `<p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">${text.licenseLink}</a></p>`
    : "";
  app.innerHTML = `<section class="text-page"><p class="eyebrow">Underletrônico</p><h1>${title}</h1><p>${body}</p>${contactLinks}${licenseLink}</section>`;
}

if (trackId) {
  const selectedTrack = tracks.find(track => track.id === trackId);
  if (selectedTrack) showTrack(selectedTrack);
  else showTextPage(text.notFound, `<a href="?lang=${lang}">${text.home}</a>`);
} else if (page === "about") {
  showTextPage(text.about, text.aboutText);
} else if (page === "contact") {
  showTextPage(text.contact, text.contactText);
} else if (page === "license") {
  showTextPage(text.license, text.licenseText);
} else {
  showGallery();
}
