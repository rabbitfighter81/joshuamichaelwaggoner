interface IArtist {
  id: number; // Keep
  name: string; // Name of band
  resource_url: string; // Artist url on discogs
  role: string;
  tracks: string;
}

interface ILabels {
  catno: string; // "4M160"
  entity_type: string; // "1"
  entity_type_name: string; // "Label"
  id: number; // 36605
  name: string; // "4 Men With Beards"
  resource_url: string; // "https://api.discogs.com/labels/36605"
}

interface IFormat {
  descriptions: string[]; // ["LP", "Album", "Reissue"]
  name: string; // "Vinyl"
  qty: string; // "1"
  text: string; // "Orange Swirl"
}

export interface IBasicInformation {
  labels: any[];
  year: number;
  master_url: string;
  master_id: number; // ???
  artists: IArtist[];
  cover_image: string; // YES!!!
  id: number;
  resource_url: string; // ???
  thumb: string; // Thunmnail image
  title: string; // Album name
  date_added: string; // Needs conversion...
  instance_id: number; // ???
  rating: number; /// Nopt used I dont think...
  formats: IFormat;
}

interface TrackList {
  duration: string; // "7:55"
  position: string; // "A1"
  title: string; // "Slip Inside This House"
}

export interface IDiscogRecord {
  basic_information: IBasicInformation;
  date_added: string; // Date string
  id: number;
  instance_id: number;
  rating: number;
  videos: any;
  tracklist: TrackList[];
}

export class Record {
  artist: string;
  label: string;
  coverImage: string;
  thumb: string;
  title: string;
  formats: IFormat;
  id: number;
  videos: any[];
  tracklist: TrackList[];
  constructor(record: IDiscogRecord) {
    this.artist = record.basic_information.artists[0].name;
    this.label = record.basic_information.labels[0].name;
    this.coverImage = record.basic_information.cover_image;
    this.thumb = record.basic_information.thumb;
    this.title = record.basic_information.title;
    this.id = record.id;
    this.formats = record.basic_information.formats[0];
    this.videos = record.videos;
    this.tracklist = record.tracklist;
  }
}
interface TrackList {
  duration: string; // "7:55"
  position: string; // "A1"
  title: string; // "Slip Inside This House"
}
