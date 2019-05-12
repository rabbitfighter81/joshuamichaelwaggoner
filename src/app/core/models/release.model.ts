interface Formats {
  descriptions: string[];
  name: string; // vinyl
  text: string; // red
}
interface Artist {
  name: string;
  resource_url: string;
}

interface ExtraArtist {
  role: string;
  name: string;
  resource_url: string;
}

interface TrackList {
  duration: string; // "7:55"
  position: string; // "A1"
  title: string; // "Slip Inside This House"
}

interface Videos {
  description: string; // "Slip Inside This House"
  duration: number; // 483
  embed: boolean; // true
  title: string; // "Slip Inside This House"
  uri: string; // "https://www.youtube.com/watch?v=lw--pywH9Wk"
}

interface IRelease {
  artists: Artist[];
  extraartists: ExtraArtist[];
  formats: Formats[];
  genres: string[]; // ['rock']
  notes: string; // notes
  released: string; // date
  styles: string[];
  title: string[]; // easter everywhere
  lowest_price?: number; // 1
}

export class Release implements IRelease {
  artists: Artist[];
  extraartists: ExtraArtist[];
  formats: Formats[];
  genres: string[]; // ['rock']
  notes: string; // notes
  released: string; // date
  styles: string[];
  title: string[]; // easter everywhere
  lowestprice: number; // 19.99

  constructor(release: IRelease) {
    this.artists = release.artists;
    this.extraartists = release.extraartists;
    this.formats = release.formats;
    this.genres = release.genres;
    this.notes = release.notes;
    this.released = release.released;
    this.styles = release.styles;
    this.title = release.title;
    this.lowestprice = release.lowest_price; // Important to avoid _
  }
}
