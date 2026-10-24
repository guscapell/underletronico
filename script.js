// Track information lives here. Add another object to add a gallery tile and detail page.
const tracks = [
  {
    id: "dj-alyx-esta-vivo",
    title: "DJ ALYX ESTÁ VIVO ELE ESTÁ VIVO (E DETEM O PODER aparentemente)",
    artist: "DJ ALYX",
    artistBio: {
      en: "Artist and release details are shared on the linked SoundCloud page.",
      pt: "Informações sobre a artista e o lançamento estão na página do SoundCloud."
    },
    collective: "NAÇÃOREBOLATION69",
    album: "",
    license: "CC BY-NC-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    url: "https://soundcloud.com/rebolation/alyx",
    embed: { provider: "soundcloud" },
    cover: "https://i1.sndcdn.com/artworks-CfhduyZlpjAVc832-iPKJtw-original.jpg",
    coverAlt: "DJ ALYX release cover art from SoundCloud",
    coverText: "DJ ALYX\nESTÁ VIVO",
    note: { en: "Cover art not added yet.", pt: "Capa ainda não adicionada." }
  },
  {
    id: "synova-heal-again",
    title: "Heal Again",
    artist: "Synova",
    artistBio: {
      en: "Synova is an electronic music artist from Los Angeles. The artist describes the project as DIY-EDM.",
      pt: "Synova é um artista de música eletrônica de Los Angeles. O projeto é descrito pelo artista como DIY-EDM ('EDM-faça você mesmo')."
    },
    collective: "",
    album: "D.I.Y.E.D.M",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    url: "https://synovamusic.bandcamp.com/track/heal-again-3",
    embed: { provider: "bandcamp", trackId: "3949445678" },
    cover: "https://f4.bcbits.com/img/a1128829024_2.jpg",
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
    footerNote: "Independent music, shared with care.",
    intro: "A living collection of tracks, artists and sounds from the mix. Select a cover to explore a track.",
    tracks: "tracks",
    back: "← All tracks",
    listen: "Open track page ↗",
    artist: "Artist",
    album: "Release / album",
    collective: "Collective",
    license: "License",
    about: "About",
    aboutText: "Underletrônico is an independent archive of tracks used in DJ mixes. Each entry gathers the artist, release details, a link to listen, and the track’s license when available.",
    contact: "Contact",
    contactText: "For questions, corrections, or music suggestions, contact boinguxa on Instagram or SoundCloud.",
    instagram: "Instagram",
    soundcloud: "SoundCloud",
    notFound: "That track could not be found.",
    home: "Browse the track archive"
  },
  pt: {
    gallery: "Arquivo de faixas",
    heading: "Faixas que ficam com você.",
    navGallery: "Galeria",
    navAbout: "Sobre",
    navContact: "Contato",
    footerNote: "Música independente, compartilhada com cuidado.",
    intro: "Uma coleção viva de faixas, artistas e sons presentes nos mixes. Escolha uma capa para conhecer uma faixa.",
    tracks: "faixas",
    back: "← Todas as faixas",
    listen: "Abrir página da faixa ↗",
    artist: "Artista",
    album: "Lançamento / álbum",
    collective: "Coletivo",
    license: "Licença",
    about: "Sobre",
    aboutText: "Underletrônico é um arquivo independente de faixas usadas em mixes de DJ. Cada entrada reúne artista, informações do lançamento, link para ouvir e a licença da faixa quando disponível.",
    contact: "Contato",
    contactText: "Para dúvidas, correções ou sugestões musicais, entre em contato com boinguxa pelo Instagram ou pelo SoundCloud.",
    instagram: "Instagram",
    soundcloud: "SoundCloud",
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
  link.textContent = [text.navGallery, text.navAbout, text.navContact][index];
});
document.querySelector(".site-footer span:last-child").textContent = text.footerNote;
const trackId = params.get("track");
const page = params.get("page");

function coverMarkup(track, detail = false) {
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
      color: "#d6ee74",
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
    src = `https://bandcamp.com/EmbeddedPlayer/track=${encodeURIComponent(track.embed.trackId)}/size=large/bgcol=20231f/linkcol=d6ee74/tracklist=false/artwork=small/transparent=true/`;
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

function showTrack(track) {
  const facts = [
    [text.artist, track.artist],
    [text.album, track.album],
    [text.collective, track.collective],
    [text.license, `<a href="${track.licenseUrl}" target="_blank" rel="noopener noreferrer">${track.license}</a>`]
  ].filter(([, value]) => value);
  app.innerHTML = `
    <a class="back-link" href="?lang=${lang}">${text.back}</a>
    <article class="detail">
      <div class="detail-cover">${coverMarkup(track, true)}</div>
      <div class="detail-copy">
        <p class="eyebrow">${text.gallery}</p>
        <h1>${track.title}</h1>
        <p class="artist">${track.artist}</p>
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
  app.innerHTML = `<section class="text-page"><p class="eyebrow">Underletrônico</p><h1>${title}</h1><p>${body}</p>${contactLinks}</section>`;
}

if (trackId) {
  const selectedTrack = tracks.find(track => track.id === trackId);
  if (selectedTrack) showTrack(selectedTrack);
  else showTextPage(text.notFound, `<a href="?lang=${lang}">${text.home}</a>`);
} else if (page === "about") {
  showTextPage(text.about, text.aboutText);
} else if (page === "contact") {
  showTextPage(text.contact, text.contactText);
} else {
  showGallery();
}
