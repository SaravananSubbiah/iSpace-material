import { Component, OnInit, Input } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'ispace-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() url: string;
  vimeoUrl = 'https://vimeo.com/197933516';
  youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
  dailymotionUrl =
    'https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport';

  vimeoId = '197933511';
  youtubeId = 'iHhcHTlGtRs';
  dailymotionId = 'x20qnej';

  iframe_html: any;

  constructor(
    private embedService: EmbedVideoService ) {
    console.log(this.embedService.embed(this.vimeoUrl));
    console.log(this.embedService.embed(this.youtubeUrl));
    console.log(this.embedService.embed(this.dailymotionUrl));

    console.log(this.embedService.embed_vimeo(this.vimeoId));
    console.log(this.embedService.embed_youtube(this.youtubeId));
    console.log(this.embedService.embed_dailymotion(this.dailymotionId));
    this.iframe_html = this.embedService.embed(this.youtubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 853, height: 480 }
    });
  }

  ngOnInit() {
  }

}
