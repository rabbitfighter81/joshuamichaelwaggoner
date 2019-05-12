import { getCorrectTime } from '../helpers/correct-time.helper';

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

export interface IDiscogRecord {
  basic_information: IBasicInformation;
  date_added: string; // Date string
  id: number;
  instance_id: number;
  rating: number;
  videos: any;
}

export class DiscogRecord {
  basicInformation: IBasicInformation;
  dateAdded: Date; // Date string
  id: number;
  instanceId: number;
  rating: number;
  formats: IFormat;

  constructor(record: IDiscogRecord) {
    this.basicInformation = record.basic_information;
    this.dateAdded = getCorrectTime(record.date_added); // Date string
    this.id = record.id;
    this.instanceId = record.instance_id;
    this.rating = record.rating;
    this.formats = record.basic_information.formats;
  }

}

interface Artist {
  name: string; // Name of band
  resource_url: string; // Artist url on discogs
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
  constructor(record: IDiscogRecord) {
    this.artist = record.basic_information.artists[0].name;
    this.label = record.basic_information.labels[0].name;
    this.coverImage = record.basic_information.cover_image;
    this.thumb = record.basic_information.thumb;
    this.title = record.basic_information.title;
    this.id = record.id;
    this.formats = record.basic_information.formats[0];
    this.videos = record.videos;
  }
}


